const { home, bolywood, fitness, holywood, food, technology } = require("../controller/categoryController")

const category=require("express").Router()
category.get('/',home)
category.get('/bolywood',bolywood)
category.get('/fitness',fitness)
category.get('/holywood',holywood)
category.get('/food',food)
category.get('/technology',technology)

module.exports=category