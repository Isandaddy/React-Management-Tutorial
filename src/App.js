import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '조승택',
  'birthday' : '870215',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '김희수',
  'birthday' : '901215',
  'gender' : '남자',
  'job' : '직장인'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '김선우',
  'birthday' : '911005',
  'gender' : '남자',
  'job' : '프로그래머'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c =>{
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            );
          })
        }
      </div>     
    );
  }
}

export default App;
