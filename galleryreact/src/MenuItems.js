import React from "react";

const MenuItems = (props) => {
  return (
    <>
      {/* my main item section */}
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {props.items.map((elem, ind) => {
                
                //const [id, image, foodname, category, price, description] = elem;
                return (
                  <div
                    className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5"
                    key={ind}
                  >
                    <div className="row Item-inside">
                      {/* for images */}
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img
                          src={elem.image}
                          alt="nature"
                          className="img-fluid"
                        />
                      </div>

                      {/* Menu description */}
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h2>{elem.foodname}</h2>
                          <p>{elem.description}</p>
                        </div>
                        {/* Menu Price */}
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between ">
                            <h3>{elem.price}</h3>
                            <a href="https://www.zomato.com/pune/order-fast-food-online">
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </a>
                          </div>
                          <p>*Prices may vary on selected Data</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
