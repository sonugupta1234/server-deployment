const express=require("express")

const {newOrder, getOrder, deleteOrder}=require("../controller/ordercontroller")


const orderRoute=express.Router()


orderRoute.post("/new",newOrder)
orderRoute.get("/get",getOrder)
orderRoute.delete("/:id",deleteOrder)

module.exports=orderRoute
