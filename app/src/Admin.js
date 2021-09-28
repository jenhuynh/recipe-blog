import * as React from "react";

import * as apiClient from "./apiClient";

import "./Recipes.css";

const Admin = () => {
  const [post, setPost] = React.useState([]);

  // const [tasks, setTasks] = React.useState([]);

  const loadPost = async () => setPost(await apiClient.getPost1());

  const addPost = (post) => apiClient.addPost(post).then(loadPost);

  React.useEffect(() => {
    loadPost();
  }, []);
  return (
    <>
      {" "}
      <h1>Add Recipe</h1>
      <AddRecipeForm addPost={addPost} />{" "}
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
      title: { value: title },
      description: { value: description },
      steps: { value: steps },
      ingredients: { value: ingredients },
    } = form.elements;

    console.log(title, date, description, steps, ingredients);
    form.reset();

    addPost({
      date,
      title,
      description,
      steps,
      ingredients,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new recipe:</h3>
      <div>
        <div>
          <label>
            <input name="date" type="date" placeholder="Add date" />
          </label>
          <label>
            <input name="title" type="text" placeholder="Add title" />
          </label>
          <label>
            <input
              name="description"
              type="text"
              placeholder="Add description"
            />
          </label>
          <label>
            <input
              name="steps"
              type="text"
              placeholder="Let us know how to make the dish"
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input
              name="ingredients"
              type="text"
              placeholder="List ingredients"
              required
            />
          </label>
          <button>Add Recipe</button>
        </div>
      </div>
    </form>
  );
};

export default Admin;
