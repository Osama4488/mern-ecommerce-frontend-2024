import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
    const addToCartHandler = () => {};
    return (
        <div className="home">
            <section></section>

            <h1>
                Latest Products
                <Link to={"/search"} className="findmore">
                    More
                </Link>
            </h1>

            <main>
                <ProductCard
                    // key={i._id}
                    // productId={i._id}
                    // name={i.name}
                    // price={i.price}
                    // stock={i.stock}
                    // handler={addToCartHandler}
                    // photo={i.photo}
                    key={"123"}
                    productId={"123123"}
                    name={"Macbook"}
                    price={45}
                    stock={23}
                    handler={addToCartHandler}
                    photo={
                        "https://m.media-amazon.com/images/I/619L9jf3-rL._AC_SX679_.jpg"
                    }
                />
            </main>
        </div>
    );
};

export default Home;
