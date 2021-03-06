import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import axios from "axios";

import SearchForm from './SearchForm'
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([])
  const [query, setQuery] = useState('');
  // const searchPiece = "?name="
  // const [search, setSearch] = useState('');

  useEffect(()=> {
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const rickMort = response.data.results.filter(character =>character.name.toLowerCase().includes(query.toLowerCase())
      )
      setCharList(rickMort)
    })

  },[query])

  const handleInputChange = e => {
    setQuery(e.target.value);
  }
  

  return (
    <section className="character-list">
      <Container>
        <SearchForm query={query} handleInputChange={handleInputChange}/>
        {charList.map(function(RMC, index){
          return <CharacterCard RMC={RMC} key={index}/>
        })}
      </Container>
    </section>
  )




    // const findChar = async () => {
  //   await axios
  //     .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name=${query}`)
  //     .then(response => {
  //       console.log("search is trying", response)
  //       setCharList(response.data.results)
  //     })
  // }

  // const updateSearch = e => {
  //   setSearch(e.target.value);
  //   console.log(search)
  // }

  // const getSearch = e => {
  //   e.preventDefualt();
  //   setQuery(search);
  //   setSearch('')
  // }


  // useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // findChar()
    // axios
    //   .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    //   .then(response => {
    //     console.log("response",response.data.results)
    //     setCharList(response.data.results)
    //   })
    //   .catch(error => {
    //     console.log("No R&M data here", error)
    //   })
  // }, [query]);
}
