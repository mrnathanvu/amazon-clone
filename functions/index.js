// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Hi1kfFfVAW7nhk7V9SmTj9ftQf67i7QKHoFRpPJhVawVKuDsw5XgMr25mc12VU1liwKjfhsQfUJuC8je2qd6hLl00TYDSwSID');

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

// app.get('/nathanvu', (request, response) => response.status(200).send('Testing'));

app.post('/payments/create', async (request, response) => {
    // const total = request.params;
    const total = request.query.total;
    console.log('PAYMENT REQUEST RECIEVED: ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Subunits of the currency
        currency: 'usd'
    });

    // Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// Listen command
exports.api = functions.https.onRequest(app);