import React, {useState, useRef} from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    });

    const nameInput = useRef();

    const {name, nickname} = inputs;

    const onChange =(e) =>{
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () =>{
        setInputs({
            name:'',
            nickname:''
        });
        nameInput.current.focus();      //현제의 focus를 ref값이 nameInput인 개체로 이동
    };

    return (
        <div>
            <input 
                placeholder="이름" 
                name="name" 
                onChange={onChange} 
                value={name}
                ref={nameInput}     //ref값을 nameInput으로 설정
            />
            <input 
                placeholder="닉네임" 
                name="nickname" 
                onChange ={onChange} 
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;