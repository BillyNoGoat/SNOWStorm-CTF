const express = require('express');
const passport = require('passport');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const logger = require("./logger");

const SNConfig = require("./servicenow-config.json");

const snow = require("./SNHelper");

const usersDB = require("./DBHelper");

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(cors());

app.use(passport.initialize()); // Used to initialize passport

const passportInit = require('./passport-config')

passportInit();

// Takes an array of tickets, iterates each description to search for server flag and removes it from the response.
// If flag found and removed, new flag field is added to ticket and set to the user's flag
function handleFlag(tickets, challengeNum, user) {
    if (!tickets) return tickets;
    return tickets.reduce((acc, t) => {
        if (t.description && t.description.includes(SNConfig.serverKey)) {
            t.flag = `##FLAG:${getFlagForUser(challengeNum, user)}##`; // Add flag as property on ticket
            t.description = t.description.replace(/##FLAG:[^#]+##/, ""); // Delete flag
            acc.unshift(t);
        } else {
            acc.push(t);
        }
        return acc;
    }, []);
}

//Checks if there is a flag in the description field and returns the user's personal flag
function getFlagForUser(challengeNum, username) {
    return SNConfig.users.find(u => u.username == username).challenges[`challenge${challengeNum}`].key;
}

app.post("/submitflag", passport.authenticate(['jwt'], {
    session: false
}), function (req, res) {
    let submittedKey = req.body.flag;
    logger.info({
        user: req.user.username
    }, `Submitting flag: ${submittedKey}`);
    if (/##FLAG:([^#]+)##/.test(submittedKey)) submittedKey = /##FLAG:([^#]+)##/.exec(submittedKey)[1] //Allow either FLAG format or just the key
    const userFlags = SNConfig.users.find(u => u.username == req.user.username).challenges; // Pull out the challenges object from config
    const challengeCompleted = Object.keys(userFlags).find(key => userFlags[key].key == submittedKey); // Returns Challenge object key if correct
    if (!challengeCompleted) return res.status(400).send(`${submittedKey} is invalid.`);
    const challengeNumber = userFlags[challengeCompleted].challenge;
    usersDB.setChallengeComplete(req.user.username, challengeNumber);
    logger.info({
        user: req.user.username
    }, `Accepted flag: ${submittedKey}`);
    res.send(`Congratulations, challenge ${challengeNumber} complete!`);
});

app.get('/challenge/1/gettickets/vue', passport.authenticate(['jwt'], {
    session: false
}), async (req, res) => {
    const parameters = req.query;
    const url = `${SNConfig.baseURI}/api/now/table/incident?sysparm_query=company=${SNConfig.companySecure.sys_id}^impact=${parameters.impact}&sysparm_limit=${parameters.limit}`;
    logger.info({
        user: req.user.username,
        url: url
    }, `Getting Challenge 1 data`);
    // Data to return to client
    const out = {
        url: url
    };

    try {
        const response = await snow.getTickets(url);
        out.data = handleFlag(response.data.result, "1", req.user.username);
        out.status = response.status;
        out.method = response.request.method;
        out.count = String(response.data.result.length);
    } catch (e) {
        const error = getPropertySafely(['response', 'data', 'error', 'message'], e);
        out.method = getPropertySafely(['response', 'request', 'method'], e);
        out.error = error ? error : e.message;
        out.status = getPropertySafely(['response', 'status'], e);
    }
    res.send(out);
});

app.get('/challenge/2/gettickets/vue', passport.authenticate(['jwt'], {
    session: false
}), async (req, res) => {
    const parameters = req.query;
    const url = `${SNConfig.baseURI}/api/now/table/incident?sysparm_limit=${parameters.limit}&sysparm_query=company=${SNConfig.companySecure.sys_id}`;
    logger.info({
        user: req.user.username,
        url: url
    }, `Getting Challenge 2 data`);
    // Data to return to client
    const out = {
        url: url
    };

    try {
        const response = await snow.getTickets(url);
        out.data = handleFlag(response.data.result, "2", req.user.username);
        out.status = response.status;
        out.method = response.request.method;
        out.count = String(response.data.result.length);
    } catch (e) {
        const error = getPropertySafely(['response', 'data', 'error', 'message'], e);
        out.error = error ? error : e.message;
        out.method = getPropertySafely(['response', 'request', 'method'], e);
        out.status = getPropertySafely(['response', 'status'], e);
    }
    res.send(out);
});

app.get('/challenge/3/gettickets/vue', passport.authenticate(['jwt'], {
    session: false
}), async (req, res) => {
    const url = `${SNConfig.baseURI}/api/now/table/change_request?sysparm_query=company=${SNConfig.companySecure.sys_id}`;
    logger.info({
        user: req.user.username,
        url: url
    }, `Getting Challenge 3 data`);
    // Data to return to client
    const out = {
        url: url
    };

    try {
        const response = await snow.getTickets(url);
        out.data = handleFlag(response.data.result, "2", req.user.username);
        out.status = response.status;
        out.method = response.request.method;
        out.count = String(response.data.result.length);
    } catch (e) {
        const error = getPropertySafely(['response', 'data', 'error', 'message'], e);
        out.error = error ? error : e.message;
        out.method = getPropertySafely(['response', 'request', 'method'], e);
        out.status = getPropertySafely(['response', 'status'], e);
    }
    res.send(out);
});

app.put('/challenge/3/updatechange/vue', passport.authenticate(['jwt'], {
    session: false
}), async (req, res) => {
    const sys_id = req.query.sys_id;
    const url = `${SNConfig.baseURI}/api/now/table/change_request/${sys_id}`;

    const body = req.body;
    logger.info({
        user: req.user.username,
        url: url,
        body: body
    }, `Updating Challenge 3 data`);
    // Data to return to client
    const out = {
        url: url
    };

    try {
        const response = await snow.updateTicket(url, body);
        out.data = response.data.result;
        out.status = response.status;
        out.method = response.request.method;
        out.body = body;
    } catch (e) {
        const error = getPropertySafely(['response', 'data', 'error', 'message'], e);
        out.error = error ? error : e.message;
        out.body = body;
        out.method = getPropertySafely(['response', 'request', 'method'], e);
        out.status = getPropertySafely(['response', 'status'], e);
    }
    res.send(out);
});

// AUTH
// Just a handy endpoint to help me generate passwords. Not part of the challenge.
app.get('/password', async function (req, res) {
    console.log(JSON.stringify(req.user));
    const hash = await bcrypt.hash(req.query.p, 10);
    return res.send(await bcrypt.hash(req.query.p, 10));
});

// Provide information about the ServiceNow account in challenge 3
app.get('/accdetails', passport.authenticate(['jwt'], {
    session: false
}), async function (req, res) {
    const user = req.user.username;
    const sys_id = SNConfig.users.find(u => u.username == user).c3UserID;
    const accDetails = {
        "user_id": `admin_user_${user}`,
        "sys_id": sys_id,
        "instance": SNConfig.baseURI
    }
    return res.status(200).send(accDetails);
});

app.post(
    '/login', passport.authenticate('local', {
        session: false
    }),
    function (req, res) {
        const token = jwt.sign(req.user.id, SNConfig.JWTToken);
        logger.info({
            user: req.user.username
        }, `User logged in`);
        return res.json({
            token
        });
    }
);

app.get(
    '/user',
    passport.authenticate(['jwt', 'bearer'], {
        session: false
    }),
    function (req, res, next) {
        const {
            id
        } = req.user;
        // const user = users.users.find(u => u.id == id);
        const user = usersDB.getUserFromID(id);
        if (!user) {
            res.status(500).send(err);
        } else if (user) {
            const userData = user;
            res.status(200).send(userData);
        }
    }
);

app.delete('/logout', function (req, res) {
    req.logOut()
    return res.status(200).send("Logged out");
})

// Used to access deeply nested properties on an object without error
// Returns null if not found
// Usage: get(['prop1', 'properties', 0, 'number', obj]
const getPropertySafely = (p, o) =>
    p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)

app.listen(process.env.PORT || SNConfig.port, () => {
    logger.info({}, `App starting`);
    console.log(`App listening at http://localhost:${SNConfig.port}`)
})