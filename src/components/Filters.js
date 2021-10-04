function Filters(props) {
  return (
    <form>
      {/* BUSCADOR */}
      <input
        className="search__character"
        type="text"
        name="search"
        id="search"
        placeholder="Encuentra a tu personaje"
        value={props.searchName}
        onChange={props.handleChangeSearchName}
      />
      {/* FILTRO STATUS*/}
      <label className="filter__status" htmlFor="status"></label>
      <select
        className="select__filter"
        value={props.searchStatus}
        onChange={props.handleChangeSearchStatus}
      >
        <option className="option__select" value="all">
          Todos
        </option>
        <option className="option__select" value="Alive">
          Vivo
        </option>
        <option className="option__select" value="Dead">
          Muerto
        </option>
        <option className="option__select" value="Unknown">
          Desconocido
        </option>
      </select>
    </form>
  );
}
export default Filters;
