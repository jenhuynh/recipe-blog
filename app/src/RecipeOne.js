import * as React from "react";

import * as apiClient from "./apiClient";

import "./RecipeOne.css";
const RecipeOne = () => {
  const [post, setPost] = React.useState([]);

  const loadPost = async () => setPost(await apiClient.getPost1());

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
            date,
            description,
            steps,
            ingredients,
            imageurl,
            credit,
          }) => (
            <li key={id}>
              <div>
                <h2>{title}</h2>
                {imageurl ? (
                  <img
                    className="tuna-img"
                    src={imageurl}
                    alt="image of tuna casserole"
                  />
                ) : null}
                <h5>Date: {date}</h5>
                <p>{description}</p>
                <h6>Steps</h6>
                <p>{steps}</p>
                <h6>Ingredients</h6>
                <p>{ingredients}</p>
                <a href={credit} target="_blank" className="creditLink">
                  Recipe by All Recipes
                </a>
              </div>
            </li>
          ),
        )}
      </div>
    </>
  );
};
export default RecipeOne;
