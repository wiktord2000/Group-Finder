
const admin = require('firebase-admin');
const users = require('./apiFunctions/users');
const singleAds = require('./apiFunctions/singleAds');

admin.initializeApp();

exports.user = users.userPost;


// ---------------------------------------- API functions----------------------------------------------

// const functions = require("firebase-functions");

// app.get('/', async (req, res) => {
    
//     const snapshot = await admin.firestore().collection('users').get();
//     let users = [];

//     snapshot.forEach(doc => {
//         // Parse users and add to array (Be aware that data could be different for any document)
//         let id = doc.id;
//         let data = doc.data();
//         users.push({id, ...data});
//     })

//     // Return users
//     res.status(200).send(JSON.stringify(users));
// });

// exports.userGet = functions.region('europe-central2').https.onRequest(app);

// app.post('/', async (req, res) => {

//     // Read user data from body
//     const user = req.body;
//     // Add user to collection
//     await admin.firestore().collection('users').add(user);
//     // Send response
//     res.status(201).send();
// });


// exports.userPost = functions.region('europe-central2').https.onRequest(app);