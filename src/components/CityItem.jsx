import styles from "./CityItem.module.css";

export default function CityItem(city) {
  const { cityName, emoji, date } = city.city;
  console.log(city);
  return (
    <li className={styles.CityItem}>
      {/* <span className={styles.emoji}>{emoji}</span> */}
      {/* <h3 className={styles.name}>{cityName}</h3> */}
      {cityName}
    </li>
  );
}
