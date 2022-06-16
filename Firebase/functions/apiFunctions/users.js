const express = require('express');                 // For API methods
const cors = require('cors');
const admin = require('firebase-admin');
const functions = require("firebase-functions");

const app = express();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));


// Get all users
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


// Get specific user
app.get('/:id', async (req, res) => {
     
   await admin.firestore().collection('users').doc(req.params.id).get().then(
        doc => {
            if(doc.exists){ 
                res.status(200).send(JSON.stringify({id: doc.id, ...doc.data()}));
            }
            else{
                res.status(404).send("Error: Record not found");
            }
        }
    );    
});


// Add specific user
app.post('/', async (req, res) => {

    // Read user data from body
    const user = req.body;
    // Add user to collection
    await admin.firestore().collection('users').add(user);
    // Send response
    res.status(201).send();
});


// Update specific user
app.put('/:id', async (req, res) => {

    // Get new user data from body
    const updatedUser = req.body;
    // Find and update user in collection
    await admin.firestore().collection('users').doc(req.params.id).update(updatedUser.data);
    // Send response
    res.status(200).send();
});


// Delete specific user
app.delete('/:id', async (req, res) => {

    // Find and delete user in collection
    await admin.firestore().collection('users').doc(req.params.id).delete();
    // Send response
    res.status(200).send();
});


// Exports functions
exports.userAPI = functions.region('europe-central2').https.onRequest(app);