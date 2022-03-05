import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import RandomNumber from './components/RandomNumber';
import BoxColor from './components/BoxColor';
import './App.css';

function App() {
  return (
    <div className="App">



      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={`${new Date("1992-07-14").toDateString()}`}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings language="es" name="Doe" />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={`${new Date("1988-05-11").toDateString()}`}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings language="en" name="Delores" />
      <hr />
      <h1>Random numbers</h1>
      <RandomNumber max={10} min={1} />
      <RandomNumber max={2000} min={1} />
      <hr />
      <h1>Box Color</h1>
      <BoxColor r={250} g={250} b={100} />
      <BoxColor r={39} g={20} b={140} />
      


    </div>
  );
}

export default App;
