import CartWidget from "../CartWidget/CartWidget";
//import styles from "./Navbar.css";
import styles from "./Navbar.module.css";

export const Navbar = ({ color }) => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://th.bing.com/th?id=OIP.oWUwuKnjggmoQT_X6CUljgHaKX&w=211&h=295&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2n"
        alt="Este es el logo de la empresa"
      />
      <ul style={{ display: "flex", gap: "30px" }}>
        <li>Electro</li>
        <li>Celulares</li>
        <li>Notebook</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
