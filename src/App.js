import React from "react";
import { Route } from 'react-router-dom';

import WelcomePage from './components/WelcomePage'
import SearchForm from './components/SearchForm'
import CharacterCard from './components/CharacterCard'
import CharacterList from './components/CharacterList'
import Header from "./components/Header.js";


export default function App() {
  return (
    <div>
      <WelcomePage exact path='/'/>
      
      <Route path= '/characters/'>
      <Header />
      <SearchForm />
      <CharacterList />
      </Route>

      <Route exact path='/characters'>
        <CharacterList />
      </Route>

      <Route path='/characters/:characterID'>
        <CharacterCard />
      </Route>

    </div>
  );
}
