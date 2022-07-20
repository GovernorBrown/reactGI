import { Component } from 'react';  
import BasicInfo from './components/info';


let people = [
  {
    name: 'Cam',
    phone: '123456789',
    age: 20,
    favoriteFood: 'Pizza'
  },
  {
    name: 'John',
    phone: '987654321',
    age: 30,
    favoriteFood: 'Steak'
  },
  {
    name: 'Jane',
    phone: '123456789',
    age: 40,
    favoriteFood: 'Chicken'
  },
  {
    name: 'Bob',
    phone: '123456789',
    age: 50,
    favoriteFood: 'Brisket'
  },
  {
    name: 'Sally',
    phone: '123456789',
    age: 60,
    favoriteFood: 'cake'
  }
]

function iteratePeople(arr) {
  return arr.map((person) => {
    return <BasicInfo person={person} />
  }
  )
}

export default class App extends Component {  
  // easy
  constructor(props){  
    super(props);  
    this.state = {
        person: {
        }
    }
  }  
  // very easy/ medium
    render() {
      return (iteratePeople(people))
  }
}
