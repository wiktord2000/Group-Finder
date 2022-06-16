import React from "react";

const apiURL = 'https://europe-central2-group-finder-bb64a.cloudfunctions.net'

const ApiService = {
    

    getUsers: () => {
        // Default get method
        fetch(`${apiURL}/users`, {method: 'get'}).then(
            res => JSON.parse(res)
        ).then(
            response => console.log(response)
        );
    },

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
    },

    postSingleAd: (singleAd) => {

        return fetch(`${apiURL}/singleAds`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(singleAd)
        })
    }
};

export default ApiService;