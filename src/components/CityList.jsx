import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";

export default function CityList({ cities, loading }) {
  if (loading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities?.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
