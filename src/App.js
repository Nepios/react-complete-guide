import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id: 1001, name: 'Michael', age: 28 },
      {id: 1002, name: 'Manu', age: 29 },
      {id: 1003, name: 'Stephanie', age: 26 }
    ]
  }

  // switchNameHandler = (newName) => {
  //   // console.log('was clicked');
  //   // this.state.persons[0].name = 'Maximillian';
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 28 },
  //       {name: 'Manu', age: 29 },
  //       {name: 'Stephanie', age: 27 }
  //   ]})
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this stae.persons[personIndex]);

    person.name = event.targe.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return    <Person
            click={ () => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classes = [];

    if (this.state.persons.length <= 2){
      classes.push('red');
    }

    if (this.state.persons.length <= 1){
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
        className='button'
          show={this.state.showPersons}
          onClick={() => this.togglePersonHandler('Maximillian!!')}>Toggle Persons</button>
        {persons}
      </div>

    );

  }
}

export default App;

