// with Transition
import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const modal = props => {
    const animationTiming = {
        enter: 300,
        exit: 300
    };

    return (
        <Transition
            in={props.show}
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            onEnter={() => console.log('[Enter]')}
            onEntering={() => console.log('[Entering]')}
            onEntered={() => console.log('[Entered]')}
            onExit={() => console.log('[Exit]')}
            onExiting={() => console.log('[Exiting]')}
            onExited={() => console.log('[Exited]')}
        >
            {state => {
                const classes = [
                    'Modal',
                    state === 'entering'
                        ? 'ModalOpen'
                        : state === 'exiting'
                            ? 'ModalClosed'
                            : null
                ];
                return (
                    <div className={classes.join(' ')}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>
                            Dismiss
                        </button>
                    </div>
                );
            }}
        </Transition>
    );
};

export default modal;
