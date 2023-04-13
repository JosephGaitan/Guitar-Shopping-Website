import Link from "next/link";
import styles from "../../styles/modal.module.css";

const Modal = ({ setModal }) => {
  return (
    <div className={`${styles.modal}`}>
      <div className={styles.cuadro}>
        <button onClick={() => setModal(false)} className={styles.close}>
          X
        </button>
        <p> Item succesfully added to the cart ✔️</p>
        <div className={styles.buttons}>
          <Link href={"/shop"}>
            <button onClick={() => setModal(false)}>Continue shopping</button>
          </Link>
          <Link href={"/cart"}>
            <button onClick={() => setModal(false)}>Go to the Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
