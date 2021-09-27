import * as React from "react";

import * as apiClient from "./apiClient";

import "./RecipeOne.css";

const Recipes = () => {
  const [post, setPost] = React.useState([]);

  // const [tasks, setTasks] = React.useState([]);

  const loadPostOne = async () => setPost(await apiClient.getPostOne());

  // const addTask = (task) => apiClient.addTask(task).then(loadTasks);

  React.useEffect(() => {
    loadPostOne();
  }, []);

  return (
    <>
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

// const AddTask = ({ addTask }) => {
//   const [task, setTask] = React.useState("");

//   const canAdd = task !== "";

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (canAdd) {
//       addTask(task);
//       setTask("");
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <label>
//         New task:{" "}
//         <input onChange={(e) => setTask(e.currentTarget.value)} value={task} />
//       </label>
//       <button disabled={!canAdd}>Add</button>
//     </form>
//   );
// };

export default Recipes;
