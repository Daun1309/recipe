import React, { useState } from 'react'
import "../css/Login.css"
import "../css/common.css"
import Footer from '../component/Footer'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from 'firebase/auth';

//회원가입후 메인페이지로 이동하기 !
const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onChange = (event) => {
        const {
            target: { name, value }
        } = event;
        if(name === "email"){
            setEmail(value);
        } else if (name === "password"){
            setPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data
            const auth = getAuth()
            //회원가입
            data = await createUserWithEmailAndPassword(auth, email, password);
            console.log (data);
        } catch(error) {
            setError(error.message)
        }
    }


    return (
        <>
        
        <div className='header-empty-box'/>
            <div className='login-wrap'>
                <div className='chef-lee-background'>
                    <img src='https://ifh.cc/g/R9Hdfr.png'/>
                </div>
                <div className='login-component'>
                    <h4>회원가입</h4>
                    <form onSubmit={onSubmit}>
                        <input 
                            type="text" 
                            placeholder='Email' 
                            required 
                            value={email} 
                            name="email" 
                            onChange={onChange}
                        />
                        <input 
                            type="password" 
                            placeholder='Password' 
                            required 
                            value={password} 
                            name="password" 
                            onChange={onChange}
                        />
                        <input type="submit" value="Sign up" className='submit-btn' />            
                        {error}
                    </form>
                </div>
            </div>
                <Footer/>
        </>
    )
}

export default Signup