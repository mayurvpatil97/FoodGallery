import React, { useState } from "react";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import CatMenu from "./CatMenu";

const allCatValues = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(allCatValues);

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(allCatValues);

  // all category values for butons like dinner ,evening,lunch
  const filterMenu = (categItem) => {
    if (categItem === "All") {
      setItems(Menu);
      return;
    }

    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <CatMenu filterMenu={filterMenu} catItems={catItems} />

      <MenuItems items={items} />
    </>
  );
};

export default GalleryReact;
