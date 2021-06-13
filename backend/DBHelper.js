// Only write functions. All read functions are done directly by reading json file.

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('../servicenow-config.json');
const usersDB = low(adapter);

function getUserFromID(id){
    return usersDB.get('users').find({id: id}).value();
}

function setChallengeComplete(username, challenge){
    return usersDB.get('users').find({username: username}).set(`challenges.challenge${challenge}.completed`, true).write();
};

module.exports = { setChallengeComplete, getUserFromID };