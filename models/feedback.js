const express = require("express");
const mongoose = require( "mongoose");

const feedbackSchema = new mongoose.Schema({
    user_name: {
        type: String,
        min: 3,
        max: 15,
        required: true,
    },
    email: {
        type: String,
        required: false,
        unique: false,
    },
    message: {
        type: String,
        required: true
    }
})

const FeedBack = mongoose.model("FeedBack", feedbackSchema)
module.exports = FeedBack;