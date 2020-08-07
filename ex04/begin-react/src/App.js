import React, { useReducer, useMemo} from 'react';
import UsersList from './UsersList';
import CreateUser from './CreateUser';
import produce from 'immer';

function countActiveUsers(users){
	console.log("활성 사용자 수를 세는중...");
	return users.filter(user=> user.active).length;
}

const initialState ={

	users:[
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
	]
};

function reducer(state, action){
	switch (action.type){
		case 'CREATE_USER':
			return produce(state, draft => {
					draft.users.push(action.user);
				});
		case 'TOGGLE_USER':
			return produce(state, draft => {
				const user = draft.find(user => user.id === action.id);
				user.active = !user.active;
			});
		case 'REMOVE_USER':
			return produce(state, draft => {
				const index = draft.user.findIndex(user => user.id === action.id);
				draft.users.splice(index,1);
			});
		default:
			return state;
	}
}

//UserDispatch 라는 이름으로 내보내줍니다.
// Context만들기 - 전역으로 사용가능
export const UserDispatch = React.createContext(null);

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { users }= state;

	const count = useMemo(() => countActiveUsers(users), [users]);

	return(
		//UserDispatch라는 context를 만들어서 어디서든지 dispatch를 꺼내 쓸 수 있도록 준비
		<UserDispatch.Provider value={dispatch}>
			<CreateUser />
			<UsersList users={users}  />
			<div>활성사용자 수 : {count}</div>
		</UserDispatch.Provider>
	);
}

export default App;
