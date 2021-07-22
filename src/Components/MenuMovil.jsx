import React from 'react'

import {  Link } from "react-router-dom"

import Home from '../assets/house.png'

import computer from '../assets/computer.png'
import education from '../assets/education.png'
import sciencia from '../assets/atom.png'
import people from '../assets/people.png'


const MenuMovil = ({visibilidad}) =>{

    return (
        <div className="MenuMovil">
           <div id="title">
                <Link to="/" title="Photos">Pix90</Link>
            </div>
            <ul>
                <li>
                    <div className="logo">
                       <img src={Home} alt="" />
                    </div>
                    <Link to="/" title="Home">Home</Link>
                </li>
                <li>
                    <div className="logo">
                       <img src={computer} alt="" />
                    </div>
                    <Link to="/Categoria/computer" title="computer">Computer</Link>
                </li>
                <li>
                  <div className="logo">
                    <img src={education} alt="" />
                  </div>
                    <Link to="/Categoria/education" title="education">Educatión</Link>
                </li>
                <li>
                  <div className="logo">
                    <img src={sciencia} alt="" />
                  </div>
                    <Link to="/Categoria/science" title="science">Ciencia</Link>
                </li>
                <li>
                <div className="logo">
                    <img src={people} alt="" />
                  </div>
                    <Link to="/Categoria/people" title="people" >Peoples</Link>
                  </li>
            </ul>
        </div>

    );

}

export default MenuMovil;
