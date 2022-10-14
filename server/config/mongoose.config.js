// Import mongoose
const mongoose = require("mongoose");
module.exports = (Db_Name) => {
mongoose.connect(`mongodb://localhost/${Db_Name}`)
    .then(() => console.log(`🙌🙌 Established connection to ${Db_Name}`))
    .catch(err => console.log(`Cannot connect to ${Db_Name}`, err))
}