import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Contact = () => {

    const navigate = useNavigate()
    let goToback = () =>
    {
        navigate(-1)
    }
    return (
        <>
            <h1>Contact Page</h1>
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
                <button onClick={goToback}>go to back</button>
            </ul>
        </>
    )

}
export default Contact;