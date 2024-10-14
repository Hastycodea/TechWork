const express = require('express');
const Task = require('./models')

const router = express.Router();

router.get('/todo', async(request, response) => {
    const tasks = await Task.findAll();

    response.status(200).json(tasks);
})

router.post('/todo', async(request, response) => {
    const { content, description } = request.body;

    const newTask = Task.build({
        'content':content,
        'description':description
    })
    
    try {
        await newTask.save()
        response.status(201).json(newTask);
        
    } catch (error) {
       response.json(error) 
    }
})


router.get('/todo/:id', async(request, response) => {
    const task = await Task.findOne({
        where: {
            id:request.params.id
        }
    })

    response.status(200).json(task)

})


router.put('/todo/:id', (request, response) => {

})

router.delete('/todo/:id', (request, response) => {

})

module.exports = router;