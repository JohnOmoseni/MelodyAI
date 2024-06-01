import React from 'react';
import Personal from '../assets/Vector.png'
import Admin from '../assets/Vector1.png'
import { Link } from 'react-router-dom';
import '../Styles/pop.css'
import { FcLeft } from "react-icons/fc";

const Pop = (props) => {
  
  return (
    <div className="pop">
        <Link to="/">
        <span className="text-white animate-bounce font-semibold font-lg">Click to go back </span>
       <FcLeft size={50} />
        </Link>

        <h1>How would you like to sign up?</h1>

        <Link to='/personal'>
            <div className="box">
                <img src={Personal} alt="" />
                <div>
                    <h2>Sign up for personal use</h2>
                    <h3>Have access to limited features, <br />
                        including  building personalize model
                    </h3>
                </div>
            </div>
        </Link>

        <Link to='/admin'>
            <div className="box">
                <img src={Admin} alt="" />
                <div>
                    <h2>Sign up as an Organization</h2>
                    <h3>Access to unlimited features offer by <br />
                        Melody AI
                    </h3>
                </div>
            </div>
        </Link>  
    </div>
  );
};

export default Pop;