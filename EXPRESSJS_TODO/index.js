
const express = require('express');
const apiRoutes = require('./routes')
const {sequelize, connectToDb} = require('./db')
const body_parser = require('body-parser')

const app = express()
const PORT = 3000;

app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (request, response) => {
    response.status(200).json({message:"Hello Andreh!"});
})

app.listen(PORT, async()=> {
    console.log(`Server is running at http://localhost:${PORT}`)
    await connectToDb();
})
   
   
   
   
   