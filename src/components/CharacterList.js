import CharacterItem from "./CharacterItem";

function CharacterList(props) {
  if (props.data.length === 0) {
    return <p>"No existe ese personaje"</p>;
  }
  const html = props.data.map((data, index) => (
    <li className="card">
      <CharacterItem data={data} />
    </li>
  ));

  return <ul className="cards">{html}</ul>;
}

export default CharacterList;
