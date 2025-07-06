import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";


beforeAll(()=>{
  console.log('******** before all called ************')
});

beforeEach(()=>{
  console.log('---- before Each -----')
})


// afterAll

test('Test Fist component', ()=> {
  console.log('Test first component')
  render(<App/>);
  const test = screen.getByText(/Hello world! My first test case./i);
  const title = screen.getByTitle("kasandbox Image");
  expect(test).toBeInTheDocument();
  expect(title).toBeInTheDocument()
});


// skip for now
test.skip('Test the Input box', ()=> {
  render(<App/>);
  const checkInput = screen.getByRole('textbox');
  const checkInputPlaces = screen.getByPlaceholderText("Enter User Name");  // search by placeholder name
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaces).toBeInTheDocument();   
  expect(checkInput).toHaveAttribute('name','username');   // find by name attribute
  expect(checkInput).toHaveAttribute("placeholder", "Enter User Name")  // find by placeholder attribute
})



// Test case for onclick event
describe('Test case for onClick event', ()=>{
  console.log('onchange function run')
  test('Test case 1', ()=> {
    render(<App/>);
    const btn = screen.getByRole('button');  // get button
    fireEvent.click(btn);   // add fire event
    expect(screen.getByText('updated data')).toBeInTheDocument(); // is this 'updated data' is in the document or not
  })
})



afterEach(()=>{
  console.log("---- After Each ------")
});


afterAll(()=>{
  console.log('======== After All =======')
})