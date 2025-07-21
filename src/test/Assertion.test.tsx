import { render, screen } from "@testing-library/react"
import AssertionMethod from "../components/AssertionMethod"


test("Testing using Assertion Methods", ()=>{
    
    render(<AssertionMethod />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();  // if the document is in the ui or not
    expect(input).toHaveValue();   // if the document have value
    expect(input).toHaveValue("John Doe")  // is the document have this value 

    // expect(input).toBeEnabled(); // check is document is enabled ?
    // expect(input).toBeDisabled();  // check is document is disabled ?

    expect(input).toHaveAttribute("id")  // if the document have this attribute ("id")

    expect(input).toHaveClass('test-style')  // if the document have this class ("test-style")
});


test("Test negative test cases", ()=>{
    render(<AssertionMethod />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    expect(button).not.toHaveClass("btn")  // the document should not have this class
    expect(button).not.toHaveAttribute("id")  // the document should not have the id attribute
})