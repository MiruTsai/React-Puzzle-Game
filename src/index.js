import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Ranking from './components/ranking';
import './style.css';
const root = document.querySelector('.root');

const Header = () => {
    return (
        <h1>React Puzzle Game</h1>
    )
}

const Block = (props) => {
    function showNumber() {
        console.log(props.id)
    }
    return (
        <button className="block" onClick={() => showNumber()}>
            <span className="number">{props.id}</span>
        </button>
    )
}

const NewGame = (props) => {
    return (
        <button className="new_game" onClick={() => props.again()}>New Game</button>
    )
}
// class Board extends React.Component { 
//     render(){
//         console.log(this.props.list)
//     return (

//         this.props.list.map(number => {
//             <Block id={number}
//                 key={Math.floor(Math.random() * 100000)} />
//         })
//     )}
// }

class App extends React.Component {
    state = {
        correct: [1, 2, 3, 4, 5, 6, 7, 8, ''],
        list: [1, 2, 3, 4, 5, 6, 7, 8, '']
    }
    newGame = () => {
        let newList = this.state.list;
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * i);
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
        this.setState({
            list: shuffleArray(newList)
        })
        console.log(this.state.list);
        console.log(this.state.list.indexOf(""));
    }
    // changeIndex = (e) => {
    //     let list = this.state.list;
    //     this.setState(
    //         list.indexOf(e.target)=list.indexOf("")
    //     )
    // }
    render() {
        let game;
        game = this.state.list.map(number => {
            return (
                <Block id={number}
                    key={Math.floor(Math.random() * 100000)}
                    // changeIndex={this.changeIndex}
                />
            )
        })
        return (
            <BrowserRouter>
                <div className="playground">                
                    <NavBar />
                    <Route exact path="/" render={() => <div><Header />
                        <div className="board">
                            {game}
                        </div>
                        <NewGame again={this.newGame} /> </div>} />
                    <Route path="/ranking" component={Ranking} />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, root);
