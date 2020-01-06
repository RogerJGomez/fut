import React, { Component } from 'react'

export class Player extends Component {
    constructor(){
        super()
        this.state ={
            player:{}
        }
        this.hover = this.hover.bind(this);
        this.noHover = this.noHover.bind(this);
    }
    componentDidMount(){
        this.setState({
            player:this.props.players
        })
    }

    hover(){
        this.setState(prevState => {
            const player = prevState.player
            player.foto="/players/field/search-card.png"
            return {
                player: player
            }
        })
    }
    noHover(){
        this.setState(prevState => {
            const player = prevState.player
            player.foto="/players/field/card.png"
            return {
                player: player
            }
        })
    }
    render() {
        if(this.state.player.lineup){
            if(this.state.player.nombre!=="void"){  
                return(
                    <div className="players">
                        <img src={this.state.player.foto} width="140px" height="195px" alt=""/>
                        <h5>{this.state.player.rol}</h5>
                        <button onClick={()=>{this.props.del(this.state.player.rol)}} className="btn btn-sm btn-danger"><i className="fa fa-minus fa-lg"></i></button>
                    </div>
                )
            }
            return(
                <div className="players">
                    <div className="card-player" onMouseLeave={this.noHover} onMouseEnter={this.hover} onClick={()=>{this.props.search(this.state.player.rol)}} ><img src={this.state.player.foto} width="140px" height="195px" alt=""/></div>
                    <h5>{this.state.player.rol}</h5>
                    <button className="btn btn-sm btn-secondary"><i className="fa fa-plus fa-lg"></i></button>
                </div>
            )
        }
        if(this.props.modal){
            return(
                <div className="players">
                    <img src={this.state.player.foto} width="140px" height="195px" alt=""/>
                    <button onClick={()=>{this.props.add(this.state.player.id); this.props.closeModal()}} className="btn btn-sm btn-success"><i className="fa fa-plus fa-lg"></i></button>
                </div>
            )
        }
        return(
            <div className="players">
                <img src={this.state.player.foto} width="140px" height="195px" alt=""/>
                <button onClick={()=>{this.props.add(this.state.player.id)}} className="btn btn-sm btn-success"><i className="fa fa-plus fa-lg"></i></button>
            </div>
        )
    }
}

export default Player

