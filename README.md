# SNOWStorm

# Introduction
SNOWStorm is a CTF built to emulate an online portal application which interfaces with ServiceNow via it's API.
The goal of the CTF is to complete Challenge 1, 2 and 3
A YouTube video explaining SNOWStorm and how to complete the challenges can be found here:
[Youtube link]

## Technology
SNOWStorm is built on Nuxt.js (Vue.js) and also contains a back-end built with express.
Since SNOWStorm also requires a ServiceNow instance to operate, a ServiceNow developer instance is required to run this CTF.
You can get the developer instance by browsing to developer.service-now.com. **DO NOT run this in any real ServiceNow instances, the code is purposefully vulnerable to attack.**.
There is a setup script `backend/ServiceNowScript.js` which will help you to setup the ServiceNow side. 
Logs are saved to the root directory in `.output.log`

# Build/Run
After cloning this repository, run `npm i` to install all dependencies
Run the front end with `npm run build`

# Config

# ServiceNow



