const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const ejs = require("ejs");
const connection = require("./config/conn.js")


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs")
app.use(express.static("public"))

const FeedBack = require("./models/feedback.js")



app.get("/", async (req, res) => {
    try {

        res.status(200).render("home")
    } catch (err) {
        res.status(404).json({
            success: false,
            err: err.message
        })
    }
})



app.post("/feedback", async (req, res) => {
    try {

        const data = req.body;
        console.log(data)
        const newFeedBack = new FeedBack({

            user_name: data.user_name,
            email: data.email,
            message: data.message
        })

        await newFeedBack.save();
        console.log("data saved successfully")
        res.status(200).redirect("/");
    }
    catch {
        console.log("some error occurs")
        res.status(400).json({
            success: false,
            message: err.message
        });
    }



})

app.get("/about", async (req, res) => {
    try {

        res.status(200).render("about")
    } catch (err) {
        res.status(404).json({
            success: false,
            err: err.message
        })
    }


})
app.get("/contact", async (req, res) => {
    try {

        res.status(200).render("contact")
    } catch (err) {
        res.status(404).json({
            success: false,
            err: err.message
        })
    }


})


app.get("/*", (req, res) => {
    res.status(404).json({
        success: false,
        err: "page not found"
    })
})


app.listen(3000, () => {
    console.log("app is listening on port 3000")
})