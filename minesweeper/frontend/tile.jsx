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
        // this.handleClick= this.handleClick.bind(this);
    }

    tileStatus () {
       
    } //
    

    handleClick(e){
        // debugger
        if (e.currentTarget.className === "bombed"){
            
            alert("You Lost");
        }
        this.setState()
    }

    render () {
        // debugger
        let x, tileStatus;
        if (this.state.flagged) {
            x = "flagged"
            tileStatus = "🚩";
        } else if (this.state.bombed) {
            x = "bombed";
            tileStatus = "💣";
        }
        return <div className={x} onClick={this.handleClick.bind(this)}>{tileStatus}</div>
    } 
}

export default Tile;