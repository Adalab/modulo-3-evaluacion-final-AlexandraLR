import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import getCharactersFromApi from "../services/RickAndMortyApi";
import CharacterList from "./CharacterList";
import CharacterItem from "./CharacterItem";
import CharacterDetails from "./CharacterDetails";
import Filters from "./Filters";
import "../stylesheets/main.scss";
import logo from "../images/LetrasRickYMortyConFirmaYPortal(másresplandor) (1) (2).gif";

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchStatus, setSearchStatus] = useState("all");
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    getCharactersFromApi().then((initialData) => {
      setData(initialData);
    });
  }, [searchName]);

  const handleChangeSearchName = (ev) => {
    ev.preventDefault();
    setSearchName(ev.currentTarget.value);
  };
  const handleChangeSearchStatus = (ev) => {
    ev.preventDefault();
    setSearchStatus(ev.currentTarget.value);
  };
  const handleChangeSearchType = (ev) => {
    ev.preventDefault();
    setSearchType(ev.currentTarget.value);
  };

  const routeData = useRouteMatch("/user/:id");

  const characterId = routeData !== null ? routeData.params.id : "";
  const selectedCharacter = data.find(
    (data) => data.id === parseInt(characterId)
  );

  const filteredData = data
    .filter((item) =>
      item.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
    )
    .filter((item) =>
      item.type.toLocaleLowerCase().includes(searchType.toLocaleLowerCase())
    )
    .filter((item) => searchStatus === "all" || item.status === searchStatus);
  console.log(filteredData);

  return (
    <div className="allpage">
      <img
        class="image_title"
        title="RickAndMortypedia"
        src={logo}
        alt="RickAndMortypedia"
      />
      <Switch>
        {/* RUTA DE LAS TARJETAS */}
        <Route path="/user/:id">
          <CharacterDetails data={filteredData} user={selectedCharacter} />
        </Route>
        {/* RUTA DE PÁGINA PRINCIPAL */}
        <Route exact path="/">
          <div className="col2">
            {/* BÚSQUEDAS */}
            <section>
              <Filters
                searchName={searchName}
                searchStatus={searchStatus}
                searchType={searchType}
                handleChangeSearchName={handleChangeSearchName}
                handleChangeSearchStatus={handleChangeSearchStatus}
                handleChangeSearchType={handleChangeSearchType}
              />
            </section>
            {/* TARJETAS */}
            <section>
              <CharacterList
                data={filteredData}
                CharacterItem={CharacterItem}
              />
            </section>
          </div>
        </Route>
        {/* RUTA DE PÁGINA ERRÓNEA */}
        <Route>
          <section>Ups, página errónea, paz entre los mundos!</section>
        </Route>
      </Switch>
      {/* Footer con leyenda de símbolos */}
      <footer className="footer">
        <h4>Leyenda de símbolos</h4>
        <p>
          Alive:
          <span
            className="iconify"
            data-icon="lucide:smile"
            id="icon-footer"
          ></span>
          Dead:
          <span
            className="iconify"
            data-icon="cil:face-dead"
            id="icon-footer"
          ></span>
          Human:
          <i class="fas fa-user-astronaut" id="icon-footer"></i>
          Alien:
          <span
            class="iconify"
            data-icon="ri:aliens-fill"
            id="icon-footer"
          ></span>
        </p>
      </footer>
    </div>
  );
}

export default App;
