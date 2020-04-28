import React, { Component } from 'react'
import Table from './Table'
import Form from './Form';

class App extends Component {

  state = {
    characters: [],
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form />
      </div>
    )
  }

  removeCharacter = index => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
}

export default App
