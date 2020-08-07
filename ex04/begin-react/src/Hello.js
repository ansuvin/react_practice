import React, {Component} from 'react';

// class형 컴포넌트 만드는 방법
class Hello extends Component{

    
    static Hello.defaultProps = {
        name: '이름없음'
    };
    render(){   //class형 컴포넌트에는 render함수가 꼭 있어야 한다.!
        const {color, name, isSpecial} = this.props;
        return (
            <div style = {{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }
}


export default Hello;