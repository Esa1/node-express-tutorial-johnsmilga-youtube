const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(404).send('Home page')
})

app.get('/about', (req, res) => {
    res.status(404).send('About page')
})

app.all('*', (req, res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})
app.listen(5000, () => {
    console.log("listening port 5000")
})



