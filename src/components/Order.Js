import Link from "next/link";
import styles from "../styles/order.module.css";
Link;

const Order = ({ setCart, setOrder }) => {
    const handlerClose = ()=>{
      setOrder(false)
      setCart([])
    }
  return (
    <div className={`${styles.modal}`}>
      <div className={styles.cuadro}>
        <p> Order succesfully placed, 😎 thank you for buying! 😁</p>
        <div className={styles.buttons}>
          <Link href={"/shop"}>
            <button onClick={() => handlerClose()}>Close</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
