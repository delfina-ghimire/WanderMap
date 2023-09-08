import { useNavigate, useSearchParams } from "react-router-dom";
import Styles from "./Map.module.css";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const navigate = useNavigate();

  return (
    <div className={Styles.mapContainer} onClick={() => navigate("form")}>
      Map position: {lat} and {lng}
    </div>
  );
}
