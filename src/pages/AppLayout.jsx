import Map from "../components/Map";
import Sidebar from "../components/SideBar";
import Styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={Styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
