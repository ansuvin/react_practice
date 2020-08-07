import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind';

// styles을 간편하게 쓰기위해 classNames/bind 라이브러리 사용
const cx = classNames.bind(styles);

function CheckBox({ children, checked, ...rest }) {
    return (
        <div className={cx('checkbox')}>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div className={cx('icon')}>
                    {checked ? (
                        <MdCheckBox className={cx('checked')} />
                    ) : (
                        <MdCheckBoxOutlineBlank />
                    )}
                </div>
            </label>
            <span>{children}</span>
        </div>
    );
}

export default CheckBox;
