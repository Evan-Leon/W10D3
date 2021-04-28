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
        this.handleClick= this.handleClick.bind(this);
    }

    tileStatus () {
        if (this.state.flagged) {
            return "🚩";
        } else if (this.state.bombed) {
            return "";
        }
    } //💣"
    

    handleClick(e){
        debugger
        if (e.currentTarget.bombed){
            
            alert("You Lost");
        }
        this.setState()
    }

    render () {
        // debugger
        return <div onClick = {() => this.handleClick(e)}>{this.tileStatus()}</div>
    } 
}

export default Tile;