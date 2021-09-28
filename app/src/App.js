import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Admin from "./Admin";
import RecipeOne from "./RecipeOne";
import RecipeThree from "./RecipeThree";
import RecipeTwo from "./RecipeTwo";

// import Tasks from "./Tasks";

const App = () => (
  <>
    <nav>
      <Link to="/">Home</Link> | <Link to="recipeOne">Recipe One</Link> |
      <Link to="recipeTwo">Recipe Two</Link> |{" "}
      <Link to="recipeThree">Recipe Three</Link> | <Link to="admin">Admin</Link>
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipeOne" element={<RecipeOne />} />
        <Route path="/recipeTwo" element={<RecipeTwo />} />
        <Route path="/recipeThree" element={<RecipeThree />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </main>
  </>
);

const Home = () => (
  <>
    <h1>Sweet Home Kitchen</h1>
    <RecipeOne />
    <RecipeTwo />
    <RecipeThree />
    <Admin />
    {/* <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2> */}
    {/* <Tasks /> */}
  </>
);

const Recipe = () => (
  <>
    <h1>Recipes</h1>
    <p>bdknihfwihfehfewio</p>
  </>
);

// const Admin = () => (
//   <>
//     <h1>Admin</h1>
//     <p>bdknihfwihfehfewio</p>
//   </>
// );

export default App;
