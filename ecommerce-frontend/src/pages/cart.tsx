import axios from "axios";
import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/cart-item";
// import CartItemCard from "../components/cart-item";
// import {
//   addToCart,
//   calculatePrice,
//   discountApplied,
//   removeCartItem,
// } from "../redux/reducer/cartReducer";
// import { RootState, server } from "../redux/store";
// import { CartItem } from "../types/types";

const cartItems = [
    {
        productId: "asdas",
        photo: "https://m.media-amazon.com/images/I/619L9jf3-rL._AC_SX679_.jpg",
        name: "Macbook",
        price: 3000,
        quantity: 30,
        stock: 10,
    },
];

const Cart = () => {
    //   const { cartItems, subtotal, tax, total, shippingCharges, discount } =
    //     useSelector((state: RootState) => state.cartReducer);
    //   const dispatch = useDispatch();

    const [couponCode, setCouponCode] = useState<string>("");
    const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

    //   const incrementHandler = (cartItem: CartItem) => {
    //     if (cartItem.quantity >= cartItem.stock) return;

    //     dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
    //   };
    //   const decrementHandler = (cartItem: CartItem) => {
    //     if (cartItem.quantity <= 1) return;

    //     dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
    //   };
    //   const removeHandler = (productId: string) => {
    //     dispatch(removeCartItem(productId));
    //   };
    //   useEffect(() => {
    //     const { token: cancelToken, cancel } = axios.CancelToken.source();

    //     const timeOutID = setTimeout(() => {
    //       axios
    //         .get(`${server}/api/v1/payment/discount?coupon=${couponCode}`, {
    //           cancelToken,
    //         })
    //         .then((res) => {
    //           dispatch(discountApplied(res.data.discount));
    //           setIsValidCouponCode(true);
    //           dispatch(calculatePrice());
    //         })
    //         .catch(() => {
    //           dispatch(discountApplied(0));
    //           setIsValidCouponCode(false);
    //           dispatch(calculatePrice());
    //         });
    //     }, 1000);

    //     return () => {
    //       clearTimeout(timeOutID);
    //       cancel();
    //       setIsValidCouponCode(false);
    //     };
    //   }, [couponCode]);

    //   useEffect(() => {
    //     dispatch(calculatePrice());
    //   }, [cartItems]);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if (Math.random() > 0.5) {
                setIsValidCouponCode(true);
            } else {
                setIsValidCouponCode(false);
            }
        }, 1000);

        return () => {
            clearTimeout(timeOutId);
            setIsValidCouponCode(false);
        };
    }, [couponCode]);

    return (
        <div className="cart">
            {/* <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => (
            <CartItemCard
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              removeHandler={removeHandler}
              key={idx}
              cartItem={i}
            />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main> */}

            <main>
                {cartItems.length > 0 ? (
                    cartItems.map((i, idx) => (
                        <CartItem key={idx} cartItem={i} />
                    ))
                ) : (
                    <h1>No items Added</h1>
                )}
            </main>
            <aside>
                <p>Subtotal: ₹{123}</p>
                <p>Shipping Charges: ₹{123}</p>
                <p>Tax: ₹{123123}</p>
                <p>
                    Discount: <em className="red"> - ₹{123123123123}</em>
                </p>
                <p>
                    <b>Total: ₹{55555}</b>
                </p>

                <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                />

                {couponCode &&
                    (isValidCouponCode ? (
                        <span className="green">
                            ₹{50} off using the <code>{couponCode}</code>
                        </span>
                    ) : (
                        <span className="red">
                            Invalid Coupon <VscError />
                        </span>
                    ))}

                {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
            </aside>
        </div>
    );
};

export default Cart;
