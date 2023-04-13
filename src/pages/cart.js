import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Order from "@/components/modals/order";
import styles from "../styles/cart.module.css";

const Cart = ({ setCart, cart, updatedAmount, deleteItem }) => {
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState(false);

  const handlerClick = () => {
    if (cart.length > 0) {
      setOrder(true);
    }
  };

  if (order) {
    document.body.classList.add("modal");
  } else if (!order) {
    document.body.classList.remove("modal");
  }

  useEffect(() => {
    const calculated = cart.reduce(
      (total, item) => total + item.amount * item.price,
      0
    );
    setTotal(calculated);
  }, [cart]);
  return (
    <Layout cart={cart} title="Shopping Cart">
      {order ? <Order setCart={setCart} setOrder={setOrder}/> : <></>}
      <main className="contenedor">
        <h1 className="heading">Shopping Cart</h1>
        <div className={styles.contenido}>
          <div className={styles.cart}>
            <h2>Items</h2>
            {cart.length === 0
              ? "Cart is empty"
              : cart.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <div>
                      <Image
                        src={item.image}
                        width={250}
                        height={450}
                        alt="item img"
                      />
                    </div>
                    <div>
                      <p className={styles.name}>{item.name}</p>
                      <div className={styles.amount}>
                        <p>Amount: {item.amount}</p>
                        <select
                          onChange={(e) =>
                            updatedAmount({
                              id: item.id,
                              amount: e.target.value,
                            })
                          }
                          className={styles.select}
                          value={item.amount}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <p className={styles.price}>
                        $<span>{item.price}</span>
                      </p>
                      <p className={styles.subTotal}>
                        SubTotal: $<span>{item.amount * item.price}</span>
                      </p>
                    </div>
                    <button
                      className={styles.eliminar}
                      type="button"
                      onClick={() => deleteItem(item.id)}
                    >
                      x
                    </button>
                  </div>
                ))}
          </div>
          <aside id="aside" className={styles.summary}>
            <h3>Order summary</h3>
            <p>Total price: ${total}</p>
            {cart.length > 0 ? (
              <button
                onClick={() => {
                  handlerClick();
                }}
              >
                Place Order
              </button>
            ) : (
              <></>
            )}
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
