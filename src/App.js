import React from "react";
import { Route } from 'react-router-dom';

import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import Header from "./components/Header.js";


export default function App() {

  return (
    <div>
      <Route exact path="/">
        <WelcomePage />
      </Route>
      
      <Route exact path='/characters/'>
        <Header />
        <CharacterList />
      </Route>
    </div>
  );
}
