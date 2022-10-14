//Import the controller
const ExerciseController = require("../controllers/exercise.controller") //product.controller file in controllers
const Exercise = require("../models/exercise.model")
module.exports = (app) => {
    app.get("/api/all/exercises", ExerciseController.findAllExercises) 
    app.post("/api/new/exercise", ExerciseController.createNewExercise)
    app.get("/api/single/:id", ExerciseController.findOneSingleExercise)
    app.put("/api/update/:id", ExerciseController.updateExistingExercise)
    app.delete('/api/delete/:id', ExerciseController.deleteAnExistingExercise);
    //control and hover to see what function is going to execute. 
    //Also, ensure app is passed throught the server to execute function
}
