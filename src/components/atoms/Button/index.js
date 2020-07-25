// Button Component 
// --------------------------------

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';
const Button = ({
    className,
    style,
    type,
    to,
    target,
    variant,
    family,
    tabIndex,
    onClick,
    disabled,
    full,
    children
}) => {
    const classNames = classname('a-button', className, variant, family, {
        'full-content': full
    });
    return (
        <Fragment>
            {type === 'link' && (
                <a 
                    href={to}
                    className={classNames}
                    target={target}
                    tabIndex={tabIndex}
                    onClick={onClick}
                >
                    {children}
                </a>
            )}
            {type === 'link-dom' && (
                <Link
                    to={to}
                    className={classNames}
                    target={target}
                    tabIndex={tabIndex}
                    onClick={onClick}
                >
                    {children}
                </Link>
            )}
            {(type === 'button' || type === 'submit') && (
                // eslint-disable-next-line react/button-has-type
                <button
                    type={type}
                    className={classNames}
                    onClick={onClick}
                    tabIndex={tabIndex}
                    style={style}
                    disabled={disabled}
                >
                    {children}
                </button>
            )}
        </Fragment>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    to: PropTypes.string,
    target: PropTypes.string,
    variant: PropTypes.string,
    family: PropTypes.string,
    tabIndex: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    full: PropTypes.bool,
    children: PropTypes.node
};

Button.defaultProps = {
    className: '',
    style: {},
    type: 'button',
    to: '',
    target: '_self',
    variant: '',
    family: '',
    tabIndex: '0',
    onClick: () => {},
    disabled: false,
    full: false,
    children: ''
};

export default Button;