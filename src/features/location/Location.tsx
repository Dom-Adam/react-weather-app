import { useParams } from "react-router-dom";

const Location = () => {
  const params = useParams();
  return <h1>{params.location}</h1>;
};

export default Location;
