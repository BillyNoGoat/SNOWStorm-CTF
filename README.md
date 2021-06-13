# SNOWStorm

# Introduction
SNOWStorm is a CTF built to emulate an online portal application which interfaces with ServiceNow via it's API.
The goal of the CTF is to complete Challenge 1, 2 and 3
A YouTube video explaining SNOWStorm and how to complete the challenges can be found here:
[Youtube link]

## Built with
SNOWStorm is built on Nuxt.js (Vue.js) and also contains a back-end built with express.
Since SNOWStorm also requires a ServiceNow instance to operate, a ServiceNow developer instance is required to run this CTF.
You can get the developer instance by browsing to developer.service-now.com. **DO NOT run this in any real ServiceNow instances, the code is purposefully vulnerable to attack.**.
There is a setup script `ServiceNowScript.js` in the root directory which will help you to setup the ServiceNow side. See below sections for details on setting this up.
Logs are saved to the root directory in `.output.log`

# Config
To edit the config, edit `servicenow-config.json` in the root directory. Once complete, you will need to provide this to the ServiceNow setup script. 
## Values
**NOTE**: Keys named `sys_id`, `baseURI` and `c3UserID` should be left blank, the ServiceNow setup script takes the config with these values blank and populates them. See ServiceNow setup for details.
- `adminUser` The username and password to the service account that the back-end uses to make requests to ServiceNow's API. If unsure, leave unchanged.
- `companySecure` The name of the company who's ticket data will be seen in SNOWStorm without any vulnerabilities. 
- `companyInsecure` The name of the company who's ticket data must be obtained via a vulnerability during challenges.
- `ticketData` Contains the ticket data for challenges 1/2 and challenge 3. If unsure, leave unchanged.
- `c3FlagPage` Contains the code (base64 encoded) which the ServiceNow setup script uses to get the ServiceNow developer instance to display the flag once the user completes challenge 3. If unsure, leave unchanged.
- `JWTToken` A High entropy string used to generate JWT tokens. If unsure, leave unchanged or edit if you wish.
- `port` the port of the back-end. If unsure, leave unchanged, if changed, ensure the nuxt config reflects this change. 
- `baseURI` The baseURI of the service-now instance. 

### Users
As SNOWStorm is designed for ServiceNow development teams, there is a login system. Every user should have their own user account which is created by adding a new user object to this array in the config.
There is a helper endpoint for generating the passwords on the back-end. Once the back-end is running with `npm run backend` browse to http://localhost:3010/password?p=`password123!` and it will bcrypt the password and provide the output for setting user passwords.

- `id` A unique identifier. Ideally stick to incrementing numerical ID's e.g 1
- `name` A human readable name of the user e.g Johan
- `username` A unique string for the user e.g johan
- `password` The user's password after being bcrypted, I recomment the helper endpoint mentioned above.
- `challenges.key` The value provided as the flag for each challenge. I recommend using UUID's but this could be any string value.
- `challenges.completed` Boolean which decides if a user has completed the challenge or not. This serves as the database to track progression. Set to false.

# ServiceNow
In order to make malicious requests to a ServiceNow instance without disruption, you will need to request a ServiceNow develoepr instance from developer.servicenow.com.
Once you have an instance, on the developer website go to `Instance Action` and click `Remove demo data`. Once all demo data is removed (Can take 30 minutes) log into ServiceNow developer instance.
In the top left corner, search for `background` and click on `System Definition -> Scripts - Background`.

In here, paste the entire script as seen in `ServiceNowScript.js`.
Before you click `Run Script`, you should change the JSON given to `var config = {}` on line 1, and replace the whole object with the whole JSON object in your `servicenow-config.json` file.

Now click `Run Script` at the bottom of the page, and wait a few minutes for it to complete.
The script will provide some output once it's finished running, at the bottom there will be a large JSON output which is the config you provided it but many values such as `baseURI` should now have new values generated.
Take the whole output and overwrite the `servicenow-config.js with it.`

# Build/Run
After cloning this repository, run `npm i` to install all dependencies 
Run the back end with `npm run backend`
Run the front by building with `npm run build` then starting with `npm run start`
Browse to http://localhost:3010 to log in with the credentials you added to the config under `users`.
