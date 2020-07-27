import React, {useEffect} from 'react';

function User({user, onRemove, onToggle}){
    useEffect(() => {
        console.log('user 값이 설정됨');
        return () => {
            console.log('user 가 바뀌기 전..');
            console.log(user);
        };
    },[user]);      //최신 상태를 사용하기 위해서 []에 값을 넣어야 함.
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={()=> onToggle(user.id)}        //클릭할시 onToggle함수 실행 (user.id 전달)
            >
                {user.username}
            </b> 
            <span>({user.email})</span> 
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}){
    return(
        <div>
            {users.map(user=> (     //map 이용하기 
                <User user={user} 
                key={user.id} 
                onRemove={onRemove} 
                onToggle={onToggle}/>   //고유한 값을 key로 , 없을시에는key={index}로 하여 map함수를 사용할시 나오는 index를 이용한다.
            ))}
        </div>
    );
}

export default UserList;