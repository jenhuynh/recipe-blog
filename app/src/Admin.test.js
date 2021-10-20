import {
  getByPlaceholderText,
  prettyDOM,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";

//tests for input and placeholders for them exists
describe("<App />", () => {
  test("renders the form correctly", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const titleInput = getByPlaceholderText("Add title");
    const dateInput = getByPlaceholderText("Add date");
    const descriptionInput = getByPlaceholderText("Add description");
    const stepsInput = getByPlaceholderText("List the steps");
    const ingredientsInput = getByPlaceholderText("List ingredients");
    const imageInput = getByPlaceholderText(
      "Insert an image url to go with your recipe",
    );
    const creditInput = getByPlaceholderText(
      "Include url or name to where recipe came from",
    );
    expect(titleInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(stepsInput).toBeInTheDocument();
    expect(ingredientsInput).toBeInTheDocument();
    expect(imageInput).toBeInTheDocument();
    expect(creditInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
  });
});
