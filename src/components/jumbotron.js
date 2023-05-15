import * as React from 'react';
import { highlight, jumbotron_border, jumbotron_container } from './jumbotron.module.css';

const Jumbotron = () => {

    return (
        <div>
            <div className={jumbotron_container}>
                <h1>crossdot is an <span className={highlight}>inclusive</span> coding collective aiming to bring people <span className={highlight}>together.</span></h1>
            </div>
            <div className={jumbotron_border} />
        </div>
    )
}

export default Jumbotron