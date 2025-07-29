import { render, screen } from "@testing-library/react"
import TestInputMirror from "../components/TestInputMirror"
import userEvent from "@testing-library/user-event";



test("Test initial input box and paragraph present", () => {

    render(<TestInputMirror />);

    const inputBox = screen.getByPlaceholderText('Type something...')
    expect(inputBox).toBeInTheDocument();

    const para = screen.getByRole("paragraph");

    expect(para).toBeInTheDocument();

});

test("Validate Entered data display", async () => {

    const user = userEvent.setup();

    render(<TestInputMirror />);

    const inputBox = screen.getByPlaceholderText('Type something...');

     expect(screen.getByText("You Typed:")).toBeInTheDocument();


     const enteredText = "Display Text here"
     
     await user.type(inputBox, enteredText);

     expect(screen.getByText("You Typed: " +enteredText)).toBeInTheDocument();




})


// test("Validate Entered data display", async()=>{

//      const user = userEvent.setup();

//     render(<TestInputMirror />);

//     const display = 'Show for testing';

//     const inputVal = screen.getByRole("textbox");

//     user.type(inputVal, display)
//     expect(screen.getByText("You Typed:"+ display)).toBeInTheDocument();
// })