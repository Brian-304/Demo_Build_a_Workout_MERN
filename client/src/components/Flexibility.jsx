import React, { useState, useEffect } from 'react'
import axios from 'axios'


//Declare form inputs
const category = "flexibility";

const Flexibility = (props) => {

    // const [days, setDays] = useState([]);

    //Database Errors
    const [err, setErrors] = useState([]);

    //Get all endurance
    const [flexibilities, setFlexibility] = useState([]);

    // const axiosDays = () => {
    //     axios.get("https://wger.de/api/v2/daysofweek")
    //         .then(res => {
    //             console.log(res.data);
    //             setDays(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }


    useEffect(() => {
        axios.get("http://localhost:8000/api/all/exercises") //worthy of retrieving data from the server
            .then(dataResponse => {
                console.log(dataResponse.data);
                setFlexibility(dataResponse.data.filter(exercise => exercise.category === category))
            })
            .catch(err => console.log("Something went wrong", err))

            // axios.get("https://wger.de/api/v2/daysofweek")
            // .then(res => {
            //     console.log(res.data);
            //     setDays(res.data);
            // })
            // .catch(err => {
            //     console.log(err);
            // })
    }, [])

    //Declare form inputs
    const [date, setDate] = useState("");

    //Declare form inputs
    const [activity, setActivity] = useState("");

    //Declare form inputs
    const [details, setDetails] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/new/exercise', { //axios means worthy of accessing the database
            date,
            category,
            activity,
            details

        })
            .then(res => {
                console.log(res.data);// receive data from back end
                // navigate("/endurance")
            })
            // .catch(err => console.log(err.response.data))// for validations
            .catch(err => {
                console.log(err);
                const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    //Delete function
    const deleteFlexibility = (deleteId) => {
        console.log(deleteId);

        axios.delete("http://localhost:8000/api/delete/" + deleteId) //axios means worthy of accessing the database
            .then(res => {
                console.log(res.data);
                console.log("Item has been deleted!");

                //remove from DOM and refresh
                setFlexibility(flexibilities.filter((flexibility) => flexibility._id !== deleteId))
            })
            .catch(err => console.log(err))
    }

    return (

        <body>


            <div className="container">
                <header class="flex">
                    <h1>Flexibility</h1>
                    <div class="flex">
                        <a href="/">Home</a>
                        <a href="contact.asp">Contact</a>
                        <a href="about.asp">About</a>
                        <input type="text" placeholder="Search.."></input>
                    </div>
                    <button class="btn btn-primary">Sign Out</button>
                </header>
                <div className="features flex">
                    <div className="feature1">
                        <form onSubmit={submitHandler}>

                            {err.map((er, idx) => <p key={idx}>{er}</p>)

                            }
                            <h1>Build My Workout</h1>
                            <div>
                                <label >Date:</label>
                                <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
                            </div>
                            <div>
                                <label >Activity:</label>
                                <input type="text" onChange={(e) => setActivity(e.target.value)} value={activity} />
                            </div>
                            <div>
                                <label >Details:</label>
                                <input type="text" onChange={(e) => setDetails(e.target.value)} value={details} />
                            </div>
                            <button class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="feature1">
                        <h2>Scheduled Workouts</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Activity</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    flexibilities.map((flexibility, idx) => {
                                        console.log(flexibility);
                                        return <tr key={flexibility._id}>
                                            <td>{flexibility.date}
                                                {/* <button onClick={() => deletePirate(pirate._id)} class="btn btn-primary">Walk the Plank</button> */}</td>
                                            <td>{flexibility.activity}</td>
                                            <td><li>{flexibility.details}</li></td>
                                            <button onClick={() => deleteFlexibility(flexibility._id)} class="btn btn-primary">Delete</button>
                                        </tr>

                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Flexibility