import React from "react";
import icon from '../../assets/images/icon-success.svg'
import './success.css'
import { useNavigate , useParams } from "react-router-dom";

const Success = () =>{
    const navigate = useNavigate();
    const { email } = useParams();
    
    const clickHandler = () =>{
        navigate('/')
    }


    return (
        <div className="page">
            <div className="page__container-success">
                <div className="page__container-sucess-text">
                    <div className="page__container-success-image">
                        <img src={icon} alt="success" />
                    </div>
                    <h1>Thanks for subscribing!</h1>
                    <p> A confirmation email has been sent to <span>{decodeURIComponent(email)}</span>. Please open it and click the button inside to confirm your subscription. </p>
                </div>
                <button onClick={clickHandler}>Dismiss Message</button>
            </div>
        </div>
    )
}

export default Success;