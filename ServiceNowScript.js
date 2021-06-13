var config = {
    "adminUser": {
      "username": "portal_user",
      "password": "Portal123"
    },
    "companySecure": {
      "name": "Little Company Inc",
      "sys_id": ""
    },
    "companyInsecure": {
      "name": "Big Company Inc",
      "sys_id": ""
    },
    "serverKey": "2c860c44-782c-4c67-8ed0-c6b6edfb8546",
    "ticketData": {
      "c1": [
        {
          "short_description": "Secret ticket!",
          "description": "Here's your flag: \n",
          "company": 1,
          "impact": 1
        },
        {
          "short_description": "Unable to access company portal",
          "description": "I seem to have lost access to the company portal, could you please check it out?",
          "company": 0,
          "impact": 3
        },
        {
          "short_description": "Email not received",
          "description": "Brian Wilson says he sent an email but I can't see it in my inbox.",
          "company": 0,
          "impact": 3
        },
        {
          "short_description": "Invalid teams link in email",
          "description": "The teams meeting invite embedded for internal meetings shows as invalid when visited.",
          "company": 0,
          "impact": 3
        },
        {
          "short_description": "Incorrect phone routing",
          "description": "The phone number for reception is being routed to sales.",
          "company": 0,
          "impact": 3
        },
        {
          "short_description": "Phone service is down",
          "description": "My phone is no longer receiving calls. Is there an issue?",
          "company": 0,
          "impact": 2
        },
        {
          "short_description": "Docker image cannot be loaded",
          "description": "I've tried to pull the latest docker image from the repo but I'm getting errors!",
          "company": 0,
          "impact": 2
        },
        {
          "short_description": "Missing data on spreadsheet",
          "description": "The weekly call spreadsheet is missing a whole month's data.",
          "company": 0,
          "impact": 2
        },
        {
          "short_description": "Website is down",
          "description": "The company website is totally down! Please fix ASAP",
          "company": 0,
          "impact": 1
        },
        {
          "short_description": "Loss of internet at London office",
          "description": "The London office's internet is totally down, we need this fixed!",
          "company": 0,
          "impact": 1
        }
      ],
      "c3": [
        {
          "short_description": "Change IP address",
          "description": "Could you please change our system's IP address to 192.168.0.1?",
          "company": 0,
          "impact": 2,
          "priority": 3,
          "risk": 2
        },
        {
          "short_description": "Need access to backend of portal",
          "description": "Could you please allow my admin account access to the back end?",
          "company": 0,
          "impact": 1,
          "priority": 4,
          "risk": 2
        },
        {
          "short_description": "Change user's surname",
          "description": "One of our employees got married, please change their surname. User is 'Zoe Smith', please change this to 'Zoe Fletcher'",
          "company": 0,
          "impact": 1,
          "priority": 2,
          "risk": 2
        },
        {
          "short_description": "Allow me to change user emails",
          "description": "I need access to change the email for certain user accounts.",
          "company": 0,
          "impact": 1,
          "priority": 3,
          "risk": 2
        },
        {
          "short_description": "Delete user account",
          "description": "One of our Service Desk has recently left the company, please delete josh.roberts from the users list.",
          "company": 0,
          "impact": 1,
          "priority": 1,
          "risk": 3
        },
        {
          "short_description": "Update policy description",
          "description": "We have recently updated our policy description, please change to the new version I have emailed you.",
          "company": 0,
          "impact": 2,
          "priority": 1,
          "risk": 4
        },
        {
          "short_description": "Undo yesterday's changes",
          "description": "Yesterday you set up the new phone system. We've had many problems with it so far, please revert it back to how it was.",
          "company": 0,
          "impact": 1,
          "priority": 3,
          "risk": 3
        }
      ]
    },
    "c3FlagPage": {
      "name": "flag",
      "pageB64": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiID8+CjxqOmplbGx5IHRyaW09ImZhbHNlIgoJeG1sbnM6aj0iamVsbHk6Y29yZSIKCXhtbG5zOmc9ImdsaWRlIgoJeG1sbnM6ajI9Im51bGwiCgl4bWxuczpnMj0ibnVsbCI+Cgk8ZzpldmFsdWF0ZSA+CiAgICAgICAgdmFyIHVzZXJJRCA9IGdzLmdldFVzZXIoKS5nZXRJRCgpOwogICAgICAgIHZhciBmbGFncyA9IEpTT04ucGFyc2UoZ3MuZ2V0UHJvcGVydHkoJ2MzZmxhZ3MnKSk7CiAgICAgICAgdmFyIGZsYWcgPSBmbGFncy5yZWR1Y2UoZnVuY3Rpb24oYWNjLCBmKSB7CiAgICAgICAgICAgIGlmIChmLmMzVXNlcklEID09IHVzZXJJRCkgewogICAgICAgICAgICAgICAgcmV0dXJuIHsKICAgICAgICAgICAgICAgICAgICAibmFtZSI6IFN0cmluZyhmLm5hbWUpLnJlcGxhY2UoL14uLywgZnVuY3Rpb24obSkgewogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS50b1VwcGVyQ2FzZSgpCiAgICAgICAgICAgICAgICAgICAgfSksCiAgICAgICAgICAgICAgICAgICAgImtleSI6IFN0cmluZyhmLmNoYWxsZW5nZXMuY2hhbGxlbmdlMy5rZXkpCiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIGFjYzsKICAgICAgICB9LCBudWxsKTsKICAgPC9nOmV2YWx1YXRlPgoJPGgxIHN0eWxlPSJmb250LXNpemU6NDBweDsgdGV4dC1hbGlnbjpjZW50ZXI7Ij5Db25ncmF0cywgJHtmbGFnLm5hbWV9ITwvaDE+Cgk8aDEgc3R5bGU9ImNvbG9yOiAjMDA4MDAwOyBmb250LXNpemU6NDBweDsgdGV4dC1hbGlnbjpjZW50ZXI7Ij4jI0ZMQUc6JHtmbGFnLmtleX0jIzwvaDE+CjwvajpqZWxseT4="
    },
    "JWTToken": "6oqnv32cYOt76uDLLEJkc6iggUaAs6Tr0Qqs4tyKq8W2nfh_GjxUJIUQSSM_YXqg51fNvTCl52eRtuVKeKLNvx5oQDcCJsoQEOqJNFKAt9rkFc5NoLbO6Tq16JujfHPl7q3Lks6xS3M7krbJa",
    "port": 3010,
    "baseURI": "",
    "users": [
        {
          "id": 1,
          "name": "Guest",
          "username": "guest",
          "password": "$2b$10$vw2yLjnX7/E9rra.4Ki7yOyYW/s6VX7UN0oEKUVXLEwsv/ZQ2ULSW",
          "challenges": {
            "challenge1": {
              "challenge": 1,
              "key": "f90aa4f4-8e83-4cd6-8451-dc690ed33f49",
              "completed": false
            },
            "challenge2": {
              "challenge": 2,
              "key": "904d62e2-ef48-42fc-881e-cf11f86b3ad1",
              "completed": false
            },
            "challenge3": {
              "challenge": 3,
              "key": "2b756a0d-0a2a-4af0-a38b-65102bfd936a",
              "completed": false
            }
          },
          "c3UserID": "399f43c8db383010760d72c7f4961962"
        }
      ]
  };

run();

function run() {
    var adminRoleID = getAdminRole();
    var adminID = createPortalAdmin(config.adminUser.username, config.adminUser.password);
    assignUserAdmin(adminID, adminRoleID);

    var users = config.users.map(function (u) {
        var userID = createHackableUser(u.username);
        u.c3UserID = userID;
        assignUserAdmin(userID, adminRoleID);
        return u;
    });
    config.companySecure.sys_id = createCompany(config.companySecure.name);
    config.companyInsecure.sys_id = createCompany(config.companyInsecure.name);

    createSysProperties();
    createUIPage();

    config.ticketData.c1.forEach(function (t) {
        createIncident(t);
    });

    config.ticketData.c3.forEach(function (t) {
        createChange(t);
    });

    config.baseURI = gs.getProperty('glide.servlet.uri').slice(0, -1);

    gs.print(JSON.stringify(config));


};

// Create the initial portal user to drive this 
function createPortalAdmin(username, password) {
    var newUser = new GlideRecord('sys_user');
    newUser.initialize();
    newUser.user_password.setDisplayValue(password);
    newUser.first_name = "Portal";
    newUser.last_name = "User";
    newUser.user_name = username;
    return newUser.insert();
}

// Create the user accounts for challenge 3
function createHackableUser(username) {
    var password = "Portal123";
    var newUser = new GlideRecord('sys_user');
    newUser.initialize();
    newUser.user_password.setDisplayValue(password);
    newUser.first_name = "Admin (" + username + ")";
    newUser.last_name = "User";
    newUser.user_name = "admin_user_" + username;
    return newUser.insert();
}

// Create
function assignUserAdmin(userID, roleID) {
    var adminAssign = new GlideRecord('sys_user_has_role');
    adminAssign.initialize();
    adminAssign.user = userID;
    adminAssign.role = roleID;
    adminAssign.insert();
}

function getAdminRole() {
    var adminRole = new GlideRecord('sys_user_role');
    adminRole.addQuery('name', 'admin');
    adminRole.query();
    if (adminRole.next()) {
        return adminRole.sys_id;
    }
}

function createCompany(name) {
    var company = new GlideRecord('core_company');
    company.initialize();
    company.name = name;
    return company.insert();
}

function createSysProperties() {
    // Needed to feed the UI page for c3
    gs.setProperty("c3flags", JSON.stringify(config.users));
    // Needed to set the UI page to show on login for c3
    gs.setProperty("glide.login.home", config.c3FlagPage.name + ".do");
    // Enable email
    gs.setProperty("glide.email.smtp.active", true);
    // Be flexible with lockouts
    gs.setProperty("glide.user.max_unlock_attempts", 100);
}

function createUIPage() {
    var page = new GlideRecord('sys_ui_page');
    page.initialize();
    page.name = config.c3FlagPage.name;
    page.html = GlideStringUtil.base64Decode(config.c3FlagPage.pageB64);
    return page.insert();
}

function createIncident(t) {
    var inc = new GlideRecord('incident');
    inc.initialize();
    inc.short_description = t.short_description;
    inc.description = t.description;
    inc.impact = t.impact;

    // 0 = normal ticket, 1 = secret ticket
    if (t.company == 0) {
        inc.company = config.companySecure.sys_id;
        inc.description = t.description;
    } else {
        inc.company = config.companyInsecure.sys_id;
        inc.description = t.description + "##FLAG:" + config.serverKey + "##"
    }

    return inc.insert();
}

function createChange(t) {
    var chg = new GlideRecord('change_request');
    chg.initialize();
    chg.short_description = t.short_description;
    chg.description = t.description;
    chg.impact = t.impact;
    chg.priority = t.priority;
    chg.risk = t.risk;

    // 0 = normal ticket, 1 = secret ticket
    if (t.company == 0) {
        chg.company = config.companySecure.sys_id;
    } else {
        chg.company = config.companyInsecure.sys_id;
    }

    return chg.insert();
}