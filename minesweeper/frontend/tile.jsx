import React from "react";
const Minesweeper = require("../minesweeper");



class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flagged: this.props.tile.flagged,
            explored: this.props.tile.explored,
            bombed: this.props.tile.bombed,
            pos: this.props.tile.pos
        }
        this.adjacentBombCount = this.props.tile.adjacentBombCount();
        // this.handleClick= this.handleClick.bind(this);
    }

    handleClick(e){
        
        if (e.currentTarget.className === "tile bombed"){
            
            alert("You Lo÷st");
        } else {
            this.setState({explored: true});
        }
        if (e.altKey){
            this.setState({flagged:true });
        }
        
        
    }

    render () {
        // debugger
        let x, tileStatus;
        if (this.state.flagged) {
            x = "tile flagged"
            tileStatus = "🚩";
        } else if (this.state.bombed) {
            x = "tile bombed";
            tileStatus = "💣";
        } else if (!this.state.explored){
            x = "tile unexplored";
            tileStatus = "";
        } else if (this.state.explored){
            x = "tile explored";
            tileStatus = this.adjacentBombCount;
        }
        return <div className={x} onClick={this.handleClick.bind(this)}>{tileStatus}</div>
    } 
}

export default Tile;