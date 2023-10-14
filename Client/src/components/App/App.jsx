import React from "react";
import "./App.css";
import Cards from "../Cards/Cards.jsx";
import Nav from "../Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "../../views/About";
import Detail from "../../views/Detail";
import Favorites from "../Favorites/favorites";
import Form from "../Form/Form";
import PATHROUTES from "../Helpers/Helpers";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  //!FAKE
  const email = "";//colocar mail aceptado
  const password = ""; // colocar clave correcta

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  const onSearch = (id) => {
    // console.log(`Buscando personaje con ID: ${id}`);
    const existingCharacter = characters.find(
      (character) => character.id === id
    );

    // console.log(`existingCharacter: `, existingCharacter);
    if (existingCharacter) {
      window.alert("¡Este personaje ya está en la lista!");
      return;
    }

    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    const filter = characters.filter((char) => {
      return char.id !== Number(id);
    });
    setCharacters(filter);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path={PATHROUTES.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={PATHROUTES.ABOUT} element={<About />} />
        <Route
          path={PATHROUTES.FAVORITES}
          element={<Favorites favorites={Favorites} />}
        />
        <Route path={PATHROUTES.DETAIL} element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
