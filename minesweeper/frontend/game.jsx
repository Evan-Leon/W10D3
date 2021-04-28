import React from 'react';

import Board from './board';


export default class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            board: new Board()
        }
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(){

    }

    render(){
        return (
            <div>
                < Board board={this.state.board} updateGame={this.updateGame} />

            </div>
        )
    }

}