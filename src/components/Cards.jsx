import React, { useState } from "react";
import Cart from "./Cart";

const Cards = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cart, setCart] = useState([]);

  const carddata = [
    {
      id: 1,
      img: "../images/01.png",
      title: "Samsung Galaxy S Ultra",
      description: "$50k",
    },
    {
      id: 2,
      img: "../images/02.png",
      title: "Samsung Galaxy S Series",
      description: "$75k",
    },
    {
      id: 3,
      img: "../images/03.png",
      title: "Samsung Galaxy Flip",
      description: "$95k",
    },
    {
      id: 4,
      img: "../images/04.png",
      title: "Samsung Galaxy Fold",
      description: "$120k",
    },
    {
      id: 5,
      img: "../images/05.png",
      title: "Samsung Galaxy Tab",
      description: "$30k",
    },
    {
      id: 6,
      img: "../images/06.png",
      title: "Samsung Galaxy Watch",
      description: "$20k",
    },
    {
      id: 7,
      img: "../images/07.png",
      title: "Samsung Book Series",
      description: "$110k",
    },
    {
      id: 8,
      img: "../images/08.png",
      title: "Samsung Accessories",
      description: "$10k-$25k",
    },
  ];
  const onAdd = (data) => {
    const exist = cart.find((x) => x.id === data.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === data.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...data, qty: 1 }]);
    }
  };
  const onRemove = (data) => {
    const exist = cart.find((x) => x.id === data.id);
    if (exist.qty == 1) {
      setCart(cart.filter((x) => x.id !== data.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === data.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const viewCart = () => {
    setIsCartVisible(true);
  };
  return (
    <>
      <div className="container">
        <h2 className="pb-2 border-bottom text-center">
          <a id="datas">datas</a>
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {carddata.map((data) => {
            return (
              <div className="col-lg-3 " key={data.id}>
                <div className="card card-img">
                  <img src={data.img} className="card-img-top " alt="..." />
                  <div className="card-body cart-text">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text text-center lead">
                      {data.description}
                    </p>
                  </div>
                  <div className="card-footer d-flex justify-content-center">
                    <button className="btn btn-success px-4 " onClick={onAdd}>
                      Add
                    </button>
                    <button className="btn btn-danger mx-3" onClick={onRemove}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        {isCartVisible ? (
          <div className="container">
            {cart.length > 0 ? (
              <Cart cart={cart} onAdd={onAdd} onRemove={onRemove} />
            ) : (
              <h2 className="text-center">Your Cart Is Empty</h2>
            )}
          </div>
        ) : (
          <button className="btnCart text-center" onClick={viewCart}>
            View Cart
          </button>
        )}
      </div>
    </>
  );
};

export default Cards;
