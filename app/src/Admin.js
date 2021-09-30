import * as React from "react";

import * as apiClient from "./apiClient";

import "./Recipes.css";

import "./Admin.css";
const Admin = () => {
  const [post, setPost] = React.useState([]);

  // const [tasks, setTasks] = React.useState([]);

  const loadPost = async () => setPost(await apiClient.getPost4());

  const addPost = (posts) => apiClient.addPost(posts).then(loadPost);

  React.useEffect(() => {
    loadPost();
  }, []);

  return (
    <>
      {" "}
      <h1>Add Recipe</h1>
      <AddRecipeForm addPost={addPost} />{" "}
      <>
        {/* <AddRecipeForm /> */}
        <div className="recipe-one" id="sectionOne">
          {post.map(
            ({
              id,
              title,
              // imageurl,
              date,
              description,
              steps,
              ingredients,
              credit,
            }) => (
              <li key={id}>
                <h2>{title}</h2>
                {/* {imageurl ? (
                <img
                  src={`/api/posts/1/image`}
                  alt="image of air fried roasted potatoes"
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
    </>
  );
};
const AddRecipeForm = ({ addPost }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    //grabbing info into form out of form
    const {
      date: { value: date },
      // imageurl: { value: imageurl },
      title: { value: title },
      description: { value: description },
      steps: { value: steps },
      ingredients: { value: ingredients },
      imageurl: { value: imageurl },
      credit: { value: credit },
    } = form.elements;

    console.log(title, date, description, steps, ingredients);
    form.reset();

    addPost({
      date,
      title,
      description,
      steps,
      ingredients,
      imageurl,
      credit,
    });
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <p>
            <h3>Add new recipe:</h3>
          </p>
          <p>
            <label>
              Date (required*):{" "}
              <input name="date" type="date" placeholder="Add date" required />
            </label>
          </p>
          <p>
            <label>
              Title (required*):{" "}
              <input
                name="title"
                type="text"
                placeholder="Add title"
                required
              />
            </label>
          </p>
          <p>
            <label>
              Description:{" "}
              <input
                name="description"
                type="text"
                placeholder="Add description"
              />
            </label>
          </p>
          <p>
            <label>
              Steps (required*):{" "}
              <input
                name="steps"
                type="text"
                placeholder="List the steps"
                required
              />
            </label>
          </p>
          <p>
            <label>
              Ingredients (required*):{" "}
              <input
                name="ingredients"
                type="text"
                placeholder="List ingredients"
                required
              />
            </label>
          </p>
          <p>
            Recipe Image:{" "}
            <label>
              <input
                name="imageurl"
                type="text"
                placeholder="Insert an image url to go with your recipe"
              />
            </label>{" "}
          </p>
          <p>
            <label>
              Credit (name or url):
              <input
                name="credit"
                type="text"
                placeholder="Include url or name to where recipe came from"
              />
            </label>
          </p>
          {/* <label>
            <input
              name="imageurl"
              onChange={(e) => setPost(e.currentTarget.value)}
              value={imageurl}
            />
          </label>
          <input name="image" type="file" /> */}
          <div className="formBtn">
            <button>Add Recipe</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Admin;
