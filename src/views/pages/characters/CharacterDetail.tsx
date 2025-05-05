import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <div>ola</div>
      <div>{id}</div>
    </div>
  );
};

export default CharacterDetail;
