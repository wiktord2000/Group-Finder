import React from "react";

const apiURL = 'http://localhost:8000'

const ApiService = {
    
    getSingleAds: () => {
        // Default get method
        return fetch(`${apiURL}/singleAds`, {method: 'get'});
    },

    getAccounts: () => {
        return fetch(`${apiURL}/accounts`, {method: 'get'});
    },

    getPhoto: () => {
        fetch("https://picsum.photos/70/100?random=1").then( res => res.json()).then(data => console.log(data));
    },

    postAccount: (account) => {

        return fetch(`${apiURL}/accounts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(account)
        })
    }
};

export default ApiService;