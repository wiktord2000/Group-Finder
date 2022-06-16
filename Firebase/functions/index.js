
const admin = require('firebase-admin');
const users = require('./apiFunctions/users');
const singleAds = require('./apiFunctions/singleAds');

admin.initializeApp();


exports.users = users.userAPI;
exports.singleAds = singleAds.singleAdsAPI;


