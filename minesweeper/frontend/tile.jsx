import React from "react";
import Minesweeper from "../minesweeper";
// const Minesweeper = require ( "../minesweeper");

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flagged: this.props.tile.flagged,
            explored: this.props.tile.explored,
            bombed: this.props.tile.bombed,
            pos: this.props.tile.pos
        }
    }

    tileStatus () {
        if (this.state.flagged) {
            return "🚩";
        } else if (this.state.bombed) {
            return "💣";
        }
    }

    render () {
        // debugger
        return <p>{this.tileStatus()}</p>
    } 
}

export default Tile;