import express from 'express'
import middleware from './middleware/logs.js'
const app = express()
// MiddleWare
app.use(middleware)

app.get('/', (req, res) => {
    res.send('<h1>Salom Shuxratello</h1>')
})
app.get('/about', (req, res) => {
    res.send('<h1>Salom Baburello</h1>')
})

app.listen(8000, () => console.log('Server Ishga Tushdi'))
