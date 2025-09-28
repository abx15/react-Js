import React, { useState, useEffect } from "react";
import "../css/Meals.css";
import axios from "axios";

const Meals = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((res) => {
                setItems(res.data.meals);
            })
            .catch((err) => {
                console.log("Error fetching meals:", err);
            });
    }, []);

    const itemsList = items.slice(0, 6).map(({ strMeal, strMealThumb, idMeal }) => {
        return (
            <section className="card" key={idMeal}>
                <img src={strMealThumb} alt={strMeal} />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        );
    });

    return <div className="items-container">{itemsList}</div>;
};

export default Meals;
