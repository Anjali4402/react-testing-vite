import { fireEvent, render, screen } from "@testing-library/react"
import ButtonClickCounter from "../components/ButtonClickCounter"
import userEvent from "@testing-library/user-event";



test("Test are component present", () => {
  render(<ButtonClickCounter />);

  // get heading
  const headingCounter = screen.getByRole("heading");

  // click me button 
  const counterButton = screen.getByRole("button");


  // check this counter header
  expect(headingCounter).toBeInTheDocument();

  // check button
  expect(counterButton).toBeInTheDocument();

})



test("Test Button click counter", async () => {

  render(<ButtonClickCounter />);
  const button = screen.getByText("Click me");

  fireEvent.click(button);
  expect(screen.getByText(/Clicked 1 times/i)).toBeInTheDocument();

  fireEvent.click(button);
  expect(screen.getByText(/Clicked 2 times/i)).toBeInTheDocument();

})