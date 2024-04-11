// Write your code here
import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {random: 0, total: 0, heads: 0, tails: 0}

  headTailChange = () => {
    const randomNumber = Math.ceil(Math.random() * 2)

    if (randomNumber % 2 === 0) {
      this.setState(prevState => ({
        random: randomNumber,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        random: randomNumber,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {random, total, heads, tails} = this.state
    console.log(random)
    const head = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tail = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const headOrTail = random % 2 === 0 ? head : tail
    return (
      <div className="container">
        <div className="container-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={headOrTail} alt="toss result" />
          <button type="button" onClick={this.headTailChange}>
            Toss Coin
          </button>
          <div className="count-card">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
