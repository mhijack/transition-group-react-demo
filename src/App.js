import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

// import Aux from './components/Aux';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            showBlock: false
        };
    }

    showModal = () => {
        this.setState({
            modalOpen: true
        });
    };

    closeModal = () => {
        this.setState({
            modalOpen: false
        });
    };

    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>

                {/* BLOCK */}
                <button
                    onClick={() =>
                        this.setState(prevState => {
                            return {
                                showBlock: !prevState.showBlock
                            };
                        })
                    }
                >
                    Toggle
                </button>

                <br />

                <Transition
                    in={this.state.showBlock}
                    timeout={1000}
                    mountOnEnter
                    unmountOnExit
                >
                    {state => (
                        <div
                            style={{
                                backgroundColor: 'blue',
                                width: '100px',
                                height: '100px',
                                opacity: state === 'exiting' ? 0 : 1,
                                transition: 'all 1s ease-out'
                            }}
                        />
                    )}
                </Transition>

                {/* MODAL ANIMATION */}

                <Modal show={this.state.modalOpen} closed={this.closeModal} />

                {this.state.modalOpen ? (
                    <Backdrop show closed={this.closeModal} />
                ) : null}

                {/* CONTROL BUTTON */}
                <button className="Button" onClick={this.showModal}>
                    Open Modal
                </button>

				{/* LIST */}
                <h3>Animating Lists</h3>
                <List />
            </div>
        );
    }
}

export default App;
