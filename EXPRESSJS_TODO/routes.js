const express = require('express');
const User = require('./models')

const router = express.Router();

router.get('/todo', async(request, response) => {
    const tasks = await User.findAll();

    response.status(200).json(tasks);
})

router.post('/todo', (request, response) => {
    const data = request.body;

    response.status(201).json(data);
})


router.get('/todo/:id', (request, response) => {

})


router.put('/todo/:id', (request, response) => {

})

router.delete('/todo/:id', (request, response) => {

})

module.exports = router;