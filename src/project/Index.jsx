import React,{useState} from "react";
import List from './components/list/List'
import image from './assets/images/illustration-sign-up-desktop.svg'
import mobile from './assets/images/illustration-sign-up-mobile.svg'
import { useNavigate } from "react-router-dom";

import './index.css'

const Index = () =>{
    const[email,setEmail]= useState('')
    const navigate = useNavigate();
    

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)

      }

    const handleSubmit = (e) =>{    
        e.preventDefault()
        const isEmailValid = validateEmail();

        const label = document.getElementById('error-msg')
        const input = document.getElementById('email')

        if(!isEmailValid){
            label.classList.add('error')
            input.classList.add('input-error')
        }else{
            label.classList.remove('error')
            input.classList.remove('input-error')
            navigate(`/success/${encodeURIComponent(email)}`)
        } 

    }



    return (
        <div className="page">
            <div className="page__container">
                <div className="page__container-img-mobile">
                    <img src={mobile} alt="mobile-sign-up" />
                </div>
                <div className="page__container-text">
                    <p>Stay updated!</p>
                    <p>Join 60,0000+ product managers recieving monthly updates on:</p>

                    <List text="Product discovery and building what matters"/>
                    <List text="Measuring to ensure updates are a success"/>
                    <List text="And much more!"/>

                    <form onSubmit={handleSubmit}>
                        <div className="page__container-text-error">
                            <label htmlFor="email">Email address </label>
                            <label id="error-msg" className="error-label"> Valid email required </label>
                        </div>
                        <input  value={email} id="email" placeholder="email@company.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                        <button type="submit"> Subscribe to monthly newsletter</button>
                    </form>

                </div>
                <div className="page__container-image">         
                    <img src={image} alt="sign-up" />
                </div>
            </div>
        </div>
    )
}

export default Index