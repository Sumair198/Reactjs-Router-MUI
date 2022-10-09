import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const About = () =>
{
    const navigate = useNavigate()

    let goTo = () =>
    {
        navigate('/')
    }
    let goToback = () =>
    {
        navigate(-1)
    }
    return(
    <>
            <h1>About Page</h1>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <button onClick={goTo}>go to home</button>
                <button onClick={goToback}>go to back</button>
                
            </ul>
        </>
    )
}
export default About;