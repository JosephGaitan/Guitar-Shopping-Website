import styles from "../../styles/order.module.css"
import Link from "next/link";

const Order = ({setCart, setOrder}) => {
  const handlerClose = () => {
    setOrder(false);
    setCart([]);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.cuadro}>
        <p> Order succesfully placed, thank you for buying</p>
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
