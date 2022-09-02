const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all leaders to you ASAP');
})
.post((req, res, end) => {
    res.end('Will add leader: ' + req.body.name + ' with description ' + req.body.description);
})
.put((req, res, end) => {
    res.statusCode = 403;
    res.end('PUT operation not supported');
})
.delete((req, res, next) => {
    res.end('deleting all leaders');
});

leaderRouter.route('/:leaderId')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req, res, next) => {
    res.end('Will send details of leader: ' + req.params.leaderId + ' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/' + req.params.leaderId);
})

.put((req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderId);
    res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description); 
})

.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

module.exports = leaderRouter;