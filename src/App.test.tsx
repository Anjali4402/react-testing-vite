import { render, screen } from "@testing-library/react";
import App from "./App";

test('Test Fist component', ()=> {
  render(<App/>);
  const test = screen.getByText(/Hello world! My first test case./i);
  const title = screen.getByTitle("kasandbox Image");
  expect(test).toBeInTheDocument();
  expect(title).toBeInTheDocument()
});


test('Test the Input box', ()=> {
  render(<App/>);
  const checkInput = screen.getByRole('textbox');
  const checkInputPlaces = screen.getByPlaceholderText("Enter User Name");  // search by placeholder name
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaces).toBeInTheDocument();   
  expect(checkInput).toHaveAttribute('name','username');   // find by name attribute
  expect(checkInput).toHaveAttribute("placeholder", "Enter User Name")  // find by placeholder attribute
})