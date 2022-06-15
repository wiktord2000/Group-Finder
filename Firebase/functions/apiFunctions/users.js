const express = require('express');         // For API methods
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();


const functions = require("firebase-functions");

app.get('/', async (req, res) => {
    
    const snapshot = await admin.firestore().collection('users').get();
    let users = [];

    snapshot.forEach(doc => {
        // Parse users and add to array (Be aware that data could be different for any document)
        let id = doc.id;
        let data = doc.data();
        users.push({id, ...data});
    })

    // Return users
    res.status(200).send(JSON.stringify(users));
});

app.post('/', async (req, res) => {

    // Read user data from body
    const user = req.body;
    // Add user to collection
    await admin.firestore().collection('users').add(user);
    // Send response
    res.status(201).send();
});


exports.user = functions.region('europe-central2').https.onRequest(app);