import { useCart } from "../context/CartContext";

function Cart() {

    const { cartItems, removeFromCart } = useCart();

    return (

        <div className="container mt-5">

            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (

                <h4>No Items in Cart</h4>

            ) : (

                cartItems.map(item => (

                    <div
                        key={item._id}
                        className="card p-3 mb-3"
                    >

                        <h5>{item.title}</h5>

                        <p>₹ {item.price}</p>

                        <p>Quantity : {item.quantity}</p>

                        <button
                            className="btn btn-danger"
                            onClick={() => removeFromCart(item._id)}
                        >

                            Remove

                        </button>

                    </div>

                ))

            )}

        </div>

    );

}

export default Cart;