const axios = require("axios");
const config = require("../servicenow-config.json");

async function getTickets(url) {
    return await axios.get(url, {
        auth: {
            username: config.adminUser.username,
            password: config.adminUser.password
        }
    });
};

async function updateTicket(url, body) {
    return await axios.put(url, body, {
        auth: {
            username: config.adminUser.username,
            password: config.adminUser.password
        }
    });
};

module.exports = {getTickets, updateTicket};