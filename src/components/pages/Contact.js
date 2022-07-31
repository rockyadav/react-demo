import React, { useRef } from "react";
import { firestore } from "../../firewase";
import { addDoc, collection } from "@firebase/firestore";

const Contact = () => {
    const fullnameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();
    const ref = collection(firestore, "contact-form");
    const formHandler = async(e) => {
        e.preventDefault();

        let data = {
            fullname : fullnameRef.current.value,
            email : emailRef.current.value,
            phone : phoneRef.current.value,
            message : messageRef.current.value
        };

        try {
            if(addDoc(ref, data))
            {
                e.target.reset();
                alert("Form submited successfully");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="feature" id="content">
				<div id="content-inner">
					<main id="contentbar">
						<div className="article">
                            <h1 className="center">Contact Page</h1>
                                <form onSubmit={formHandler}>
                                    <label>Full Name</label>
                                    <input type="text" id="fname" name="fullname" placeholder="Your full name.." ref={fullnameRef} required />

                                    <label>Email</label>
                                    <input type="email" id="email" name="email" placeholder="Enter your email.." ref={emailRef} required/>

                                    <label>Phone</label>
                                    <input type="phone" id="phone" name="phone" placeholder="Enter your phone number.." ref={phoneRef} />
                                    
                                    <label>Message</label>
                                    <textarea id="message" name="message" placeholder="Write something.." ref={messageRef} required></textarea>
                                    <input type="submit" value="Submit" />
                                </form>
						</div>
					</main>					
					<div className="clr"></div>
				</div>
			</div>
        </>
    );
}

export default Contact;