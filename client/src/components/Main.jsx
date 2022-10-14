import React from 'react'
import endurance from '../images/endurance.jpg'
import strength from '../images/strength.jpg'
import balance from '../images/balance.jpg'
import flexibility from '../images/flexibility.jpg'
import main from '../images/main.jpg'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <body>
            <div class="container">
                <header class="flex"><h1>My Workout Space</h1>
                    <div class="flex">
                        <a href="default.asp">Home</a>
                        <a href="contact.asp">Contact</a>
                        <a href="about.asp">About</a>
                        <input type="text" placeholder="Search.."></input>
                    </div>
                    <div>
                        <button class="btn btn-primary">Register</button>
                        <button class="btn btn-primary">Sign Out</button>
                    </div>
                </header>
                <div class="hero flex">
                    <div class="profile">
                        <img id="userImg" src={main} alt="" />
                        <h2>My Profile</h2>
                    </div>
                </div>
                <h1>Build a Workout</h1>
                <div class="features flex">
                
                    <div className="feature">
                        
                        <img src={endurance} alt="" />
                        <Link to={"/endurance"} class="btn btn-primary">Endurance</Link>
                    </div>
                    <div className="feature">
                        <img src={strength} alt="" />
                        <Link to={"/strength"} class="btn btn-primary">Strength</Link>
                    </div>
                    <div className="feature">
                        <img src={balance} alt="" />
                        <Link to={"/balance"} class="btn btn-primary">Balance</Link>
                    </div>
                    <div className="feature">
                        <img src={flexibility} alt="" />
                        <Link to={"/flexibility"} class="btn btn-primary">Flexibility</Link>
                    </div>
                </div>
                <footer class="flex">
                    <div class="container flex">
                        <a href="default.asp">Legal</a>
                        <a href="news.asp">Privacy</a>
                        <a href="contact.asp">Security</a>
                    </div>
                </footer>
            </div>
        </body >
    )
}

export default Main