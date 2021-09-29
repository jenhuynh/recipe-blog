import * as React from "react";

import * as apiClient from "./apiClient";

import "./RecipeThree.css";

const Recipes = () => {
  const [post, setPost] = React.useState([]);

  // const [tasks, setTasks] = React.useState([]);

  const loadPost = async () => setPost(await apiClient.getPost3());

  // const addPost = (post) => apiClient.addPost(post).then(loadPost);

  React.useEffect(() => {
    loadPost();
  }, []);

  return (
    <>
      {/* <AddRecipeForm /> */}
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
                  style={{
                    width: 500,
                    objectFit: "contain",
                    marginLeft: "1rem",
                  }}
                />
              ) : null}
              <h6>{date}</h6>
              <p>{description}</p>
              <p>{steps}</p>
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
