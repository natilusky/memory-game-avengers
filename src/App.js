import './App.css';
import Nav from './components/Nav'
import 'tachyons';
import CardList from './components/CardList';
import React from 'react';
import superheroes from './superheroes.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      heros: [],
      score: 0,
      top_score: 0
    }
  }
  componentDidMount() {
    this.setState({ heros: superheroes.superheroes })
  }

  handleClick = (id) => {
    let { heros, score, top_score } = this.state;
    const hero = heros.find(item => {
      return item.id === id
    })
    if (hero.clicked === true) {
      //reset the game
      if (score > top_score) {
        this.setState({
          top_score: score
        })
      }
      this.setState({
        score: 0,
        heros: this.reset([...heros])
      })
    }
    else {
      hero.clicked = true;
      this.setState({
        score: ++score,
        heros: this.shuffle([...heros])
      })
    }
  }

  reset = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      array[i].clicked = false
    }
    return array
  }
  shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
  }

  render() {
    const { heros } = this.state
    console.log(heros);

    return (

      <div className='tc'>
        <Nav {...this.state} />
          <CardList heroes={heros} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
