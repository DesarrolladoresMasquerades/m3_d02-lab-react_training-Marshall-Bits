import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import RandomNumber from './components/RandomNumber';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
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
      <hr />
      <h1>Credit cards</h1>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />

    </div>
  );
}

export default App;
