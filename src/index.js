const express = require('express');
const path = require('path')
const adminRoutes = require('./routes/admin/users')

const app = express();
const router = express.Router();

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))

router.get('/users', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'views', 'users.html'))
})

router.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.use('/admin', adminRoutes)
app.use(router)


app.listen(8080)