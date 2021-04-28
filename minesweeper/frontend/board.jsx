import React from "react";
import Tile from "./tile";



class Board extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        debugger
        return (
            <div>
                <h1>Board Component</h1>
                {this.props.board.grid.map((row, idx1) => {
                    <div key={idx1} row={idx1}>{row}

                    {row.map((tile, idx2) => {
                        return   <Tile key={[idx1, idx2]} updateGame={this.props.updateGame}/>
                    })}
                    </div>
                })}
                
            </div>
        )
    }
}

export default Board;