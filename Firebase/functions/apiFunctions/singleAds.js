const express = require('express');         // For API methods
const cors = require('cors');
const admin = require('firebase-admin');
const functions = require("firebase-functions");



const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));


// Get all singleAds
app.get('/', async (req, res) => {
    
    const snapshot = await admin.firestore().collection('singleAds').get();
    let singleAds = [];

    snapshot.forEach(doc => {
        // Parse users and add to array (Be aware that data could be different for any document)
        let id = doc.id;
        let data = doc.data();
        singleAds.push({id, ...data});
    })

    // Return users
    res.status(200).send(JSON.stringify(singleAds));
});

// Add single ad
app.post('/addSingleAd', async (req, res) => {

    // Read user data from body
    const {name, description, courses, tags} = req.body;
    // Add user to collection
    await admin.firestore().collection('singleAds').add({name: name, description: description, courses: courses, tags: tags});
    // Send response
    res.status(201).send();
});

// Exports functions
exports.singleAdsAPI = functions.region('europe-central2').https.onRequest(app);


