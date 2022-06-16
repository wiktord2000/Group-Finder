const express = require('express');         // For API methods
const cors = require('cors');
const admin = require('firebase-admin');




const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));


const functions = require("firebase-functions");
