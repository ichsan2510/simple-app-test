const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
require('dotenv').config()
const port  = process.env.PORT || 3000;
const api_register  = process.env.API_REGISTER || 'http://localhost:8080/users';

app.use(bodyParser.json());

// endpoint for validate and *Validate user handles the validation of user credentials. *It retrivies the list of registered useres for the user service
// *check if the provided username and password match any users
app.post('/validate', async (req, res) => {
    const { username, password } = req.body;
    try {
// fetching users from user service
        const response = await axios.get(api_register);
        const users = response.data;
// Finding the user with the matching username and password
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            res.status(200).send({ message: 'User validated successfully', user });
        } else {
            res.status(400).send({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Start the server
if (require.main === module) {
    app.listen(port, () => {
        console.log('User validation service running on port 3000');
    });
}

module.exports = app;
