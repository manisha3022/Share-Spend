const { urlencoded } = require('body-parser')
const express= require('express')
const { protect }=require('../middleware/auth')

const routes=express.Router()

const {signupAction,loginAction,logoutAction}=require('../controllers/auth_controller')

routes.use(express.json())
routes.use(urlencoded({extended:true}))

routes.post('/signup',signupAction);
routes.post('/login',loginAction);
routes.post('/logout',protect,logoutAction);

module.exports=routes;