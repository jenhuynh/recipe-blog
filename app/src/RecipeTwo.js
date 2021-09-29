import * as React from "react";

import * as apiClient from "./apiClient";

import "./RecipeTwo.css";

const Recipes = () => {
  const [post, setPost] = React.useState([]);

  // const [tasks, setTasks] = React.useState([]);

  const loadPost = async () => setPost(await apiClient.getPost2());

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
            date,
            description,
            steps,
            ingredients,
            // imageurl,
            credit,
          }) => (
            <li key={id}>
              <h2>{title}</h2>
              {/* {imageurl ? (
                <img
                  src={`/api/posts/1`}
                  alt="image of ground beef curly noodle"
                  style={{
                    width: 200,
                    objectFit: "contain",
                    marginLeft: "1rem",
                  }}
                />
              ) : null} */}
              <h6>{date}</h6>
              <p>{description}</p>
              <p>{steps}</p>
              <p>{ingredients}</p>
              <p>{credit}</p>
            </li>
          ),
        )}
      </div>
    </>
  );
};

export default Recipes;
