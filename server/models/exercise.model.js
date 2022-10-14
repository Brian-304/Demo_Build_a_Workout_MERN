// Import mongoose
const mongoose = require("mongoose");

//New schema that the database must follow
const ExerciseSchema = new mongoose.Schema({

    date: {
        type: Date,
        required: [true, "Date is required!"],
    },
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    activity: {
        type: String,
        required: [true, "Activity is required!"],
        minLength: [2, "Title does not meet requirement of 2 characters"]
    },
    details: {
        type: String,
        required: [true, "Details is required!"],
        minLength: [2, "Title does not meet requirement of 2 characters"]
    },
}, { timestamps: true })//created and updated at
// Establish model to query the database
const Exercise = mongoose.model("Exercise", ExerciseSchema)//returns model author
console.log(Exercise);
//Export model
module.exports = Exercise;// export model from line 15
