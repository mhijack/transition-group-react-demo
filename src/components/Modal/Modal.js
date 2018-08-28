// with CSSTransition
import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const modal = props => {
    const animationTiming = {
        enter: 300,
        exit: 300
    };

    return (
        // with 'classNames', we have 2 choices of applying CSS classes:
        // 1. define a prefix (can be any name), and in css file name it with:
        // classname-enter, classname-enter-active to apply styles for each state
        // 2. pass in javascript object in the form:
        // { enter: '', enterActive: 'ModalOpen', exit: '', exitActive: 'ModalClosed', appear: '', appearActive: '' }
        <CSSTransition
            in={props.show}
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed',
                appear: ''
            }}
        >
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>
                    Dismiss
                </button>
            </div>
        </CSSTransition>
    );
};

export default modal;
