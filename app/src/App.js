import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Admin from "./Admin";
import RecipeOne from "./RecipeOne";
import RecipeThree from "./RecipeThree";
import RecipeTwo from "./RecipeTwo";

import "./Recipes.css";
import "./RecipeOne.css";
import "./RecipeTwo.css";
import "./RecipeThree.css";

const App = () => (
  <>
    <nav className="sticky">
      <Link to="/">Home</Link>
      <Link to="recipeOne">Easy Tuna Casserole</Link>
      <Link to="recipeThree">Air Fryer Potatoes</Link>
      <Link to="recipeTwo">Ground Beef Curly Noodle</Link>
      <Link to="admin">Admin</Link>
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
    <div className="header-img">
      <h1 className="header-txt">Sweet Home Kitchen</h1>
    </div>
    <div className="body">
      <Recipe2 />
      <Recipe1 />
      <Recipe3 />
      <Admin />
    </div>
    {/* <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2> */}
    {/* <Tasks /> */}
  </>
);

const Recipe1 = () => {
  return (
    <>
      <div className="recipe3-card" id="section1">
        <a className="recipe-links" href="http://localhost:3000/recipeThree">
          <h1>Air Fried Potatoes</h1>
          <h4>
            These air-fried roasted one-bite potatoes are crispy on the outside
            and creamy on the inside. Quick and easy to make.
          </h4>
        </a>
        <img
          src="https://kitchendivas.com/wp-content/uploads/Air-fryer-baby-potatoes-7-1.jpg"
          alt="image of ground beef curry noodles"
          height="600px"
        />
      </div>
      <hr />
    </>
  );
};

const Recipe2 = () => {
  return (
    <>
      <div className="recipe1-card" id="section1">
        <a href="http://localhost:3000/recipeOne">
          <h1>Easy Tuna Casserole</h1>
          <h4>
            Tuna, macaroni, creamy soup, cheese and fried onions are all you
            need to make this super easy tuna casserole that I learned from my
            roommate.{" "}
          </h4>
        </a>
        <img
          src="https://www.thekitchenwhisperer.net/wp-content/uploads/2020/02/Hot-Tuna-Noodle-Casserole-1.jpg"
          alt="image of tuna casserole"
          height="500px"
        />
      </div>
      <hr />
    </>
  );
};

const Recipe3 = () => {
  return (
    <>
      <div className="recipe2-card" id="section1">
        <a href="http://localhost:3000/recipeTwo">
          <h1>Ground Beef Curry Noodle</h1>
          <h4>An easy, quick and economical recipe that kids really like!</h4>
        </a>
        <img
          src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Curly-Noodle-Dinner_exps5896_W1973175D05_03_3bC_RMS.jpg"
          alt="image of tuna casserole"
          height="500px"
        />
      </div>
      <hr />
    </>
  );
};
const Recipe = () => (
  <>
    <h1>Recipes</h1>
    <p>bdknihfwihfehfewio</p>
  </>
);

export default App;
