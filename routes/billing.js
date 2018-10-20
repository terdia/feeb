const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const auth = require('../middleware/auth');
const NUM_OF_CREDITS_TO_ADD = 5;

module.exports = app => {
    app.post('/api/stripe', auth, async (request, response) => {
        const charge = await stripe.charges.create({
           amount: 500,
           currency: 'usd',
           description: 'Seamless Feedback $5 for 5 credit',
           source: request.body.id
        })

       request.user.credits += NUM_OF_CREDITS_TO_ADD;
       response.send(await request.user.save());
    });
};