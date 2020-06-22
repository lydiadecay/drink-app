import React, { useState } from "react";
import drinks from "../Data/drinks.json";
import { Link } from "react-router-dom";
import Button from "./Button";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [clickedButton, setClickedButton] = useState(false);

  const drinksFromSearch = drinks.cocktails.filter(
    (drink) => drink.name.toLowerCase().indexOf(search) >= 0
  );

  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        type="text"
        placeholder="searchbar"
      />

      <Button text={"Search"} clickyFunction={setClickedButton} />

      {search === "" || clickedButton === false ? (
        <div>Search for something</div>
      ) : (
        <div>
          {drinksFromSearch.length > 0 ? (
            drinksFromSearch.map((drink) => {
              return (
                <div>
                  <Link to={`/drinks/${drink.name}`}>
                    <div>{drink.name}</div>
                    <img
                      style={{ width: 200 }}
                      src={drink.image}
                      alt={drink.name}
                    />
                  </Link>
                </div>
              );
            })
          ) : (
            <div>No drinks matched your search query</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
