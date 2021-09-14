const express = require('express');
const medicineControllers = require('./controllers/medicineControllers');
const userControllers = require('./controllers/userControllers');

const routes = express.Router();

routes.post("/auth/signup", userControllers.signUp);
routes.post("/auth/signin", userControllers.signIn);
routes.post("/auth/logout", userControllers.logOut);

routes.post("/medicine/create", medicineControllers.create)
routes.post("/medicine/update", medicineControllers.update)
routes.get("/medicine/all", medicineControllers.selectAll)
routes.get("/medicine/id", medicineControllers.selectByID)
routes.post("/medicine/remove", medicineControllers.removeMedicine)




module.exports = routes;