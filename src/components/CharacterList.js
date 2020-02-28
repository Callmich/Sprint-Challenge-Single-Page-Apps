import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log("here is the response",response.data.results)
      })
      .catch(error => {
        console.log("No R&M data here", error)
      })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
