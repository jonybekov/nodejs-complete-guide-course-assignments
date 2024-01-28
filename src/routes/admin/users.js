const express = require('express');
const path = require('path');

const {appDir} = require('../../utils')

const adminRouter = express.Router();

adminRouter.post('/create-user', (req,res,next) => {
    console.log(req.body);

    res.status(302).setHeader("Location", "/");
    res.send('Some')
})

adminRouter.get('/create-user', (req,res,next) => {
    res.sendFile(path.join(appDir, 'views', 'admin', 'create-user.html'))
})

module.exports = adminRouter;