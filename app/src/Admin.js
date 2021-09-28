import * as React from "react";

import * as apiClient from "./apiClient";

import "./Recipes.css";

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
      image: { value: imageurl },
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
    <form onSubmit={onSubmit}>
      <h3>Add new recipe:</h3>
      <div>
        <div>
          <label>
            Date (required*):{" "}
            <input name="date" type="date" placeholder="Add date" required />
          </label>
          <label>
            Title (required*):{" "}
            <input name="title" type="text" placeholder="Add title" required />
          </label>
          <label>
            Description:{" "}
            <input
              name="description"
              type="text"
              placeholder="Add description"
            />
          </label>
          <label>
            Steps (required*):{" "}
            <input
              name="steps"
              type="text"
              placeholder="List the steps"
              required
            />
          </label>
        </div>
        <div>
          Ingredients (required*):{" "}
          <label>
            <input
              name="ingredients"
              type="text"
              placeholder="List ingredients"
              required
            />
          </label>
          Recipe Image:{" "}
          <label>
            <input
              name="imageurl"
              type="text"
              placeholder="Insert an image url to go with your recipe"
            />
          </label>{" "}
          <label>
            Credit (name or url):
            <input
              name="credit"
              type="text"
              placeholder="Include url or name to where recipe came from"
            />
          </label>
          {/* <label>
            <input
              name="imageurl"
              onChange={(e) => setPost(e.currentTarget.value)}
              value={imageurl}
            />
          </label>
          <input name="image" type="file" /> */}
          <button>Add Recipe</button>
        </div>
      </div>
    </form>
  );
};

export default Admin;
