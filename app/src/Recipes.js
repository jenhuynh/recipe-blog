import * as React from "react";

import * as apiClient from "./apiClient";

import "./RecipeOne.css";

const Recipes = () => {
  const [post, setPost] = React.useState([]);

  // const [tasks, setTasks] = React.useState([]);

  const loadPost = async () => setPost(await apiClient.getPost1());

  // const addPost = (post) => apiClient.addPost(post).then(loadPost);

  React.useEffect(() => {
    loadPost();
  }, []);

  return (
    <>
      <AddRecipeForm />
      <div className="recipe-one" id="sectionOne">
        {post.map(({ id, title, date, description, steps, ingredients }) => (
          <li key={id}>
            <h2>{title}</h2>
            <h6>{date}</h6>
            <p>{description}</p>
            <p>{steps}</p>
            <p>{ingredients}</p>
          </li>
        ))}
      </div>
    </>
  );
};

// const TaskList = ({ tasks }) => (
//   <ul>
//     {tasks.map(({ id, name }) => (
//       <li key={id}>{name}</li>
//     ))}
//   </ul>
// );

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

// const Recipes = () => {
//   const [post, setPost] = React.useState([]);

//   // const [tasks, setTasks] = React.useState([]);

//   const loadPost = async () => setPost(await apiClient.getPost());

//   const addPost = (post) => apiClient.addPost(post).then(loadPost);

//   React.useEffect(() => {
//     loadPost();
//   }, []);

//   return (
//     <>
//       <AddRecipeForm addPost={addPost} />
//       <div className="recipe-one" id="sectionOne">
//         {post.map(({ id, title, date, description, steps, ingredients }) => (
//           <li key={id}>
//             <h2>{title}</h2>
//             <h6>{date}</h6>
//             <p>{description}</p>
//             <p>{steps}</p>
//             <p>{ingredients}</p>
//           </li>
//         ))}
//       </div>
//     </>
//   );
// };

// // const TaskList = ({ tasks }) => (
// //   <ul>
// //     {tasks.map(({ id, name }) => (
// //       <li key={id}>{name}</li>
// //     ))}
// //   </ul>
// // );

// const AddRecipeForm = ({ addPost }) => {
//   const onSubmit = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     //grabbing info into form out of form
//     const {
//       date: { value: date },
//       title: { value: title },
//       description: { value: description },
//       steps: { value: steps },
//       ingredients: { value: ingredients },
//     } = form.elements;

//     console.log(title, date, description, steps, ingredients);
//     form.reset();

//     addPost({
//       date,
//       title,
//       description,
//       steps,
//       ingredients,
//     });
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <h3>Add new recipe:</h3>
//       <div>
//         <div>
//           <label>
//             <input name="date" type="date" placeholder="Add date" />
//           </label>
//           <label>
//             <input name="title" type="text" placeholder="Add title" />
//           </label>
//           <label>
//             <input
//               name="description"
//               type="text"
//               placeholder="Add description"
//             />
//           </label>
//           <label>
//             <input
//               name="steps"
//               type="text"
//               placeholder="Let us know how to make the dish"
//               required
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             <input
//               name="ingredients"
//               type="text"
//               placeholder="List ingredients"
//               required
//             />
//           </label>
//           <button>Add Recipe</button>
//         </div>
//       </div>
//     </form>
//   );
// };

export default Recipes;
