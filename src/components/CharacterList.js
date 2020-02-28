import React, { useEffect, useState } from "react";
import { Container, Row, Pagination, PaginationItem, PaginationLink  } from "reactstrap";
import axios from "axios";

import SearchForm from './SearchForm'
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([])
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(``);
  const searchPiece = "?name="

  const findChar = async () => {
    const response = await axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${searchPiece}${query}`)
      .then(response => {
        setCharList(response.data.results)
      })
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefualt();
    setQuery(search);
    setSearch('')
  }

  useEffect(()=>{
    findChar();
    },[query]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log("response",response.data.results)
        setCharList(response.data.results)
      })
      .catch(error => {
        console.log("No R&M data here", error)
      })
  }, []);

  return (
    <section className="character-list">
      <Container>
        <SearchForm getSearch={getSearch} updateSearch={updateSearch} search={search} findChar={findChar}/>
        {charList.map(function(RMC, index){
          return <CharacterCard RMC={RMC} key={index}/>
        })}
      </Container>
    </section>
  )
}
