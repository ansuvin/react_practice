import React, { useState } from 'react';
import { Link } from "react-router-dom";
    const Join = () => {
        const [ userId, setUserId ] = useState('');
        const [ userPw, setUserPw ] = useState('');
        const [ userName, setUserName ] = useState('');
        const [ isJoinSuccess, setJoinSuccess ] = useState(false);
        const createUserApi = (user) => {
            return fetch('/users/new', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
            'Content-Type': 'application/json'
            }
            }).then(response => response.json());
        };
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await createUserApi({
                user_id: userId,
                user_pw: userPw,
                user_name: userName
            });
                if (response.result === 'ok') {
                setJoinSuccess(true);
                }
            } catch (err) {
                console.error('login error', err);
                alert('회원가입에 실패하였습니다. 잠시 후 다시 시도해주세요.')
            }
        };
        return (
            <div>
            {!isJoinSuccess && (
                <>
                <h2>Join</h2>
                <form
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="user_id"
                        value={userId}
                        onChange={e => setUserId(e.target.value)}
                        placeholder="id"
                    />
                    <input
                        type="password"
                        name="user_pw"
                        value={userPw}
                        onChange={e => setUserPw(e.target.value)}
                        placeholder="pw"
                    />
                    <input
                        type="text"
                        name="user_name"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder="name"
                    />
                    <button
                        type="submit"
                    >
                        제출
                    </button>
                </form>
                </>
            )}
                {isJoinSuccess && (
                    <div>
                        <p>회원가입을 축하합니다!</p>
                        <Link to="/login">로그인</Link>
                    </div>
                )}
            </div>
        );
    };
export default Join;
