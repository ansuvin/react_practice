import React, {useRef, useState} from 'react';
import UsersList from './UsersList';
import CreateUser from './CreateUser';

function App() {
	const [inputs, setInputs] = useState({
		username:'',
		email:''
	});
	const {username, email} =inputs;
	const onChange = e =>{
		const {name, value} = e.target;
		setInputs({		//이름이 name인 값을 value로 바꾸기
			...inputs,
			[name]: value
		});
	};
	const [users, setUsers] = useState([	//users객채가 있고, setUsers 함수가 있음
		{
			id:1,
			username:'안수빈',
			email:"dkstnqls0925@naver.com",
			active:  true
		},
		{
			id:2,
			username:'개근서',
			email:"rormstj@naver.com",
			active:false
		},
		{
			id:3,
			username:'쫄',
			email:"JJOL@naver.com",
			active:true
		},
		{
			id:4,
			username:'기소여',
			email:"gisuyeo@naver.com",
			active:false
		}
	]);    
  
	const nextId = useRef(4);		//4는 .current의 기본값
	const onCreate =() =>{
		const user ={		
			id:nextId.current,
			username,
			email
		};

		//1.soread연산자 이용(...,기존 users를 복사하고 거기에 새로운 user 추가 수정 반환)
		//setUsers([...users, user]);	

		//2.concat 이용 (기존의 배열을 수장하지 않고 새로운 원소가 추가된 새로운 배열을 만듬)
		setUsers(users.concat(user));		//users에 user을 추가하여 새로만든 배열을 반환

		setInputs({		//username과 email 초기화 시키기
			username:'',
			email:''
		});
		nextId.current +=1;
	};

	const onRemove = id =>{
		//user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
		//= user.id가 id 인 것을 제거함
		setUsers(users.filter(user=> user.id !== id));
	}

	const onToggle = id =>{
		//user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
		//= user.id가 id 인것을 제거함
		setUsers(
			users.map(user =>
				user.id === id ? { ...user, active: !user.active} : user
				)
		);
	};
	
	return(
		<>
			<CreateUser 
				username={username}
				email={email}
				onChange={onChange}
				onCreate={onCreate}
			/>
			<UsersList users={users} onRemove={onRemove} onToggle={onToggle}	/>
		</>
	);
}

export default App;
