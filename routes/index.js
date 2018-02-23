var router = require('express').Router();
var request = require('request');

router.get('/services/stores', getStores);
router.get('/services/articles', getArticles);
router.get('/services/articles/stores/:id', getArticleStore);

module.exports = router;

//////////////

var urlJsonHost = 'http://localhost:3000/'

function getStores(req, res, next) {
    var url = urlJsonHost + 'stores',
        options = {
            method: 'GET',
            url: url,
        };
    var callback = function(error, response, body) {
        if (!error && !response) {
            console.log('Teams API - No Error, No response');
            console.log(body);
            res.status(500).send(body);
        } else if (!response) {
            console.log(error);
            res.status(500).send('Teams API - No response');
        } else {
            if (!error && response.statusCode === 200) {
                res.status(response.statusCode).send(body);
            } else {
                console.log('Teams API - Error!');
                console.log(response.statusCode);
                console.log(error);
                console.log(body);
                res.status(response.statusCode).send(error);
            }
        }
    };
    request(options, callback);
}

function getArticles(req, res, next) {
    var url = urlJsonHost + 'articles',
        options = {
            method: 'GET',
            url: url,
        };
    var callback = function(error, response, body) {
        if (!error && !response) {
            console.log('Teams API - No Error, No response');
            console.log(body);
            res.status(500).send(body);
        } else if (!response) {
            console.log(error);
            res.status(500).send('Teams API - No response');
        } else {
            if (!error && response.statusCode === 200) {
                res.status(response.statusCode).send(body);
            } else {
                console.log('Teams API - Error!');
                console.log(response.statusCode);
                console.log(error);
                console.log(body);
                res.status(response.statusCode).send(error);
            }
        }
    };
    request(options, callback);
}

function getArticleStore(req, res, next) {
    var id = +req.params.id;
    var url = urlJsonHost + 'articles/' + id,
        options = {
            method: 'GET',
            url: url,
        };
    var callback = function(error, response, body) {
        if (!error && !response) {
            console.log('Teams API - No Error, No response');
            console.log(body);
            res.status(500).send(body);
        } else if (!response) {
            console.log(error);
            res.status(500).send('Teams API - No response');
        } else {
            if (!error && response.statusCode === 200) {
                res.status(response.statusCode).send(body);
            } else {
                console.log('Teams API - Error!');
                console.log(response.statusCode);
                console.log(error);
                console.log(body);
                res.status(response.statusCode).send(error);
            }
        }
    };
    request(options, callback);
}