import "./App.css";
import Cards from "../Cards/Cards.jsx";
import Nav from "../Nav/Nav";
import { React, useState, useEffect } from "react";
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

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`)
    .then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    })
    .catch((error) => {
      window.alert("Invalid Username or Password!"); 
    });
  }


  const onSearch = async (id) => {
    // console.log(`Buscando personaje con ID: ${id}`);
    const existingCharacter = characters.find(
      (character) => character.id === id
    );

    // console.log(`existingCharacter: `, existingCharacter);
    if (existingCharacter) {
      window.alert("¡Este personaje ya está en la lista!");
      return;
    }
    try {
      const response = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const data = response.data;
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (err) {
      console.error("Error al buscar el personaje:", err);
      window.alert("Ha ocurrido un error al buscar el personaje.");
    }
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
            element={<Favorites characters={characters} />}
          />
          <Route path={PATHROUTES.DETAIL} element={<Detail />} />
        </Routes>
      </div>
    );
    }


export default App;
