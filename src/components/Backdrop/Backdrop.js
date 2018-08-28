import React from 'react';

import './Backdrop.css';

const backdrop = props => {
    const classes = [
        'Backdrop',
        props.show ? 'BackdropOpen' : 'BackDropClosed'
    ];

    return <div className={classes.join(' ')} onClick={props.closed} />;
};

export default backdrop;
