import express from "express"


import { getAllUsers,deleteUser } from "../controllers/users"
import { isAuthenticated } from './../middlewares/index';




export default (router:express.Router) => {
    router.get('/users',isAuthenticated,getAllUsers)
    router.delete("/users/:id",isAuthenticated,deleteUser);

}