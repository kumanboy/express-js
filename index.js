import express from 'express'
const app = express()

app.param("id", (req, res, next, id) => {
    console.log(`id: ${id}`)
    next()
})

app.get("/user/:id", (req, res) => {
    res.send("Hello World")
})



app.listen(8000, () => console.log('Server Ishga Tushdi'))
