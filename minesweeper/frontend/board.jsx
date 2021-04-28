import React from "react";
import Tile from "./tile";



class Board extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        debugger
        return (
            <div id="board">
                {this.props.board.grid.map((row, idx1) => {
                   debugger

                    // {row.map((tile, idx2) => {
                    //     debugger
                    //    return <div key={idx2}> < Tile tile={tile}  updateGame={this.props.updateGame}/> </div>
                      
                    // })}
                    
                    return <div key={idx1} row={idx1} className="row">  </div>
                })} 
                
            </div>
        )
    }
}

export default Board;