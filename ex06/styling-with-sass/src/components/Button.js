import React from 'react';
import classNames from 'classnames'; //import 잊지않기!
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, ...rest }) {
    // classname 라이브러리를 이용하는 방법
    return (
        <button
            className={classNames('Button', size, color, {
                outline,
                fullWidth,
            })}
            {...rest}
        >
            {children}
        </button>
    );

    // 라이브러리를 사용하지 않고 직접 문자열을 조합하는 방법
    /*return <button className={['Button', size].join('')}>{children}</button>;
    className에 css클래스 이름을 동적으로 넣기 위해서는!
    className={['Button', size].join('')} 이나
    className={'Button ${size}'}  방법을 사용합니다~ 이게 좀더 괜찮을듯?*/
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
};

export default Button;
