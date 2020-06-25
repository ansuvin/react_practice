import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Login =({setHasCookie}) =>{
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    const loginApi =(user) =>{
        return fetch('/users/login',{
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json());
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!userId ||!userPw){
            return;
        }

        try{
            const response = await loginApi({
                user_id: userId,
                user_pw: userPw
            });

            if(response.result === 'ok'){
                setHasCookie(true);
            } else {
                throw new Error(response.error);
            }
        }catch(err){
            alert("로그인 실패");
            setUserId("");
            setUserPw("");
            console.error("login error",err);
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form
                onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="user_id"
                        value={userId}
                        onChange={e => setUserId(e.target.value)}
                        placeholder ="id"
                        />
                    <input
                        type="password"
                        name="user_pw"
                        value={userPw}
                        onChange={e => setUserPw(e.target.value)}
                        placeholder ="pw"
                    />
                    <button type="submit">
                        Login
                    </button>
                </form>
                <Link
                    to="/join"
                >
                    회원가입
                </Link>
        </div>
    );
}

export default Login;