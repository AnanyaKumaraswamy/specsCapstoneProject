import React from "react";
import './Layout.css';
import { ImFacebook, ImInstagram} from "react-icons/im";

const Footer = ()=> {

    function onClick_emailsignup(){
        var emailSignUp = document.querySelector(".footer_email-sign-up");
        var emailSignUpTy = document.querySelector(".footer_email-sign-up-ty");
        var userEmail = document.querySelector(".footer_input");
        

        if (userEmail.value == "") 
            return;
                emailSignUp.remove();
                emailSignUpTy.innerHTML="Thank you " + userEmail.value + " for signing up!";
        }
    return (
        <div className="footer">
            <div className="footer_social_container">
                <h2 className="footer_h3" >Folllow us on :  </h2>
                <div className="footer_icons">
                    <a href="https://www.facebook.com" target="_blank" className="circle">
                        <ImFacebook  size="1.5em" color="rgb(43, 40, 40)" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" className="circle">
                        <ImInstagram  size="1.5em" color="rgb(43, 40, 40)" />
                    </a>
                </div>
            </div>
            <div >
                <section class="footer_email-sign-up">
                    <h2>Sign-up for our Newsletter- </h2>
                    <input className="footer_input" type="text" id="signup-input" placeholder="Your Email" />
                    <button className="footer_sign-up" onClick={onClick_emailsignup}>Sign Up</button>
                </section>
                <section class="footer_email-sign-up-ty"></section>
            </div>
        
            
        </div>
        
    ) 
}

export default Footer;