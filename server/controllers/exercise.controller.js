const Exercise = require('../models/exercise.model'); // thing.model file in models folder

module.exports.findAllExercises = (req, res) => {   //This function will exexute a query in the database
    Exercise.find()// A promise which also has a .then and .catch
        .then(allDaExercises => res.json(allDaExercises)) // will return an array or put curly brackets to return an object
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.createNewExercise = (req, res) => {
    console.log("req.body = ", req.body);
    const {date, category, activity, details} = req.body; //Alternate way of using req.body destructured
    Exercise.create({ //Using the Thing model
        date, //need to match const {date, activity, details}
        category,
        activity,
        details

        
    }) 
        .then(newlyCreatedExercise => res.json({ exercise: newlyCreatedExercise }))
        .catch(err => res.status(400).json({ message: 'Error: Something went wrong', error: err }));
}
module.exports.findOneSingleExercise = (req, res) => {
    Exercise.findOne({ _id: req.params.id })// changing the id in the route will have to change the params.id
        .then(oneSingleExercise => res.json( oneSingleExercise ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.updateExistingExercise = (req, res) => {
    console.log("req.body = ", req.body);
    Exercise.findOneAndUpdate( //Using Thing class
        { _id: req.params.id },
        req.body,
        // { new: true, runValidators: true }
    )
        .then(updatedExercise => res.json({ exercise: updatedExercise }))
        .catch(err => res.json({ exercise: 'Something went wrong', error: err }));
}
module.exports.deleteAnExistingExercise = (req, res) => {
    Exercise.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
//Route will invoke this function
