const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')

.all((req, res, next) => {
    res.statuscode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all promos to you!');
})
.post((req, res, next) => {
    res.end('will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promo/')
})
.delete((req, res, next) => {
    res.end('DELETE operations not supported');
});

promoRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req, res, next) => {
    res.end('Will send details of promo: ' + req.params.promoId + ' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promo/' + req.params.promoId);
})

.put((req, res, next) => {
    res.write('Updating the promo: ' + req.params.promoId);
    res.end('Will update the promo: ' + req.body.name + ' with details: ' + req.body.description); 
})

.delete((req, res, next) => {
    res.end('Deleting all promo');
});

module.exports = promoRouter;