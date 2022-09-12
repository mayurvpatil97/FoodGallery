import React from "react";

const CatMenu = ({ filterMenu, catItems }) => {
  return (
    <>
      <h1 className="mt-5 text-center main_heading">
        Order Your Favourite Dish
      </h1>
      <hr />
      {/* buttons */}
      <div className="menu-tabs container">
        <div className="menu-tabs d-flex justify-content-around">
          {catItems.map((curElem, index) => {
            return (
              <button
                className="btn btn-success"
                key={index}
                onClick={() => filterMenu(curElem)}
              >
                {curElem}
              </button>
            );
          })}

          {/* <button
            className="btn btn-success"
            onClick={() => filterMenu("Breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn btn-success"
            onClick={() => filterMenu("Lunch")}
          >
            Lunch
          </button>
          <button
            className="btn btn-success"
            onClick={() => filterMenu("Evening")}
          >
            Evening
          </button>
          <button
            className="btn btn-success"
            onClick={() => filterMenu("Dinner")}
          >
            Dinner
          </button> */}
          {/* <button className="btn btn-success" onClick={() => setItems(Menu)}>
            All
          </button> */}
        </div>
      </div>
    </>
  );
};

export default CatMenu;
