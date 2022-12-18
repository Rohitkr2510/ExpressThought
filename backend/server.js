const express = require('express')
const cors = require('cors');
const app = express();
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./db')
const router = require('./routers')
const PORT = process.env.PORT || 80

// db connection
db.connect();



//middleware 
app.use(bodyParser.json({limit: "50mb"}))
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}))

app.use(express.json())


//headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "*")
    next()
})


//api
app.use('/api', router)



//static resources
app.use('/upload', express.static(path.join(__dirname, "/../uploads")))
app.use( express.static(path.join(__dirname, "/../frontend/build")))

app.get('*', (req, res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
    } catch (e) {
        res.send('Oops ! error occurred');
    }
})

//cons 
app.use(cors())

//server listen
app.listen(PORT, () => {
    console.log(`StackOverflow clone is running on PORT No - ${PORT}`)
})