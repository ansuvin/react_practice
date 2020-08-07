import React, {useContext} from 'react';

//UserDispatch 불러오기
import { UserDispatch } from './App';


const User = React.memo(function User({user}){
    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={()=> {
                    dispatch({ type: 'TOGGLE_USER', id:user.id});
                }}        //클릭할시 onToggle함수 실행 (user.id 전달)
            >
                {user.username}
            </b> 
            <span>({user.email})</span> 
            <button onClick={() => {
                dispatch({ type: 'REMOVE_USER', id: user.id});
            }}>삭제</button>
        </div>
    );
});

function UserList({users}){
    return(
        <div>
            {users.map(user=> (     //map 이용하기 
                <User user={user} 
                key={user.id} />   //고유한 값을 key로 , 없을시에는key={index}로 하여 map함수를 사용할시 나오는 index를 이용한다.
            ))}
        </div>
    );
}

export default React.memo(UserList);