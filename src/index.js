import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
const root = document.querySelector('.root');



const Header = () => {
    return (
        <h1>React Puzzle Game</h1>
    )
}
const Block = (props) => {
    return (
        <button className="block">
            <span className="number">{props.id}</span>
        </button>
    )
}
const NewGame = (props) => {
    return (
        <button onClick={() => props.again}>New Game</button>
    )
}

class Board extends React.Component{
    render(){
        return(
        <div className="row">
            <Block />
        </div> 
        )   
    }
}
class App extends React.Component {
    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8],
        size: 3
    }

    newGame = () =>{
           let list =this.state.list.sort( function(x,y) {
            if (x % 2 ==0) return 1;
            if (x % 2 !=0) return -1;
            });
            return list;

    }

    render() {
        let game;
        game = this.state.list.map(number => {
            return (
                <Block id={number}
                    key={Math.floor(Math.random() * 100)} />
            )
        })

        return (
            <div >
                <Header />
                <div className="board">
                {game}
                </div>
                <NewGame again={this.newGame} />
            </div>
        )
    }
}
ReactDOM.render(<App />, root);