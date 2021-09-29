import * as React from "react";

import ReactMarkdown from "react-markdown";

import * as apiClient from "./apiClient";
import "./RecipeOne.css";
const RecipeOne = () => {
  const [post, setPost] = React.useState([]);

  // const [tasks, setTasks] = React.useState([]);

  const loadPost = async () => setPost(await apiClient.getPost1());

  // const addPost = (post) => apiClient.addPost(post).then(loadPost);

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
                    style={{
                      width: 700,
                      objectFit: "contain",
                      marginLeft: "1rem",
                    }}
                  />
                ) : null}
                <h6>{date}</h6>
                <ReactMarkdown>{description}</ReactMarkdown>
                <ReactMarkdown>{steps}</ReactMarkdown>
                <p>{ingredients}</p>
                <a href={credit} target="_blank">
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
