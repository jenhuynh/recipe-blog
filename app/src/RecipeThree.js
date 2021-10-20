import * as React from "react";

import * as apiClient from "./apiClient";

import "./RecipeThree.css";

const Recipes = () => {
  const [post, setPost] = React.useState([]);

  const loadPost = async () => setPost(await apiClient.getPost3());

  React.useEffect(() => {
    loadPost();
  }, []);

  return (
    <>
      <div className="recipe-one" id="sectionOne">
        {post.map(
          ({
            id,
            title,
            imageurl,
            date,
            description,
            steps,
            ingredients,
            credit,
          }) => (
            <li key={id}>
              <h2>{title}</h2>
              {imageurl ? (
                <img
                  src={imageurl}
                  alt="image of air fried roasted potatoes"
                  className="potatoesImg"
                />
              ) : null}
              <h5>Date: {date}</h5>
              <p>{description}</p>
              <h6>Steps</h6>
              <p>{steps}</p>
              <h6>Ingredients</h6>
              <p>{ingredients}</p>
              <a href={credit} target="_blank">
                Recipe by All Recipes
              </a>
            </li>
          ),
        )}
      </div>
    </>
  );
};

export default Recipes;
