import { fireEvent, render, screen } from "@testing-library/react"
import SubmitForm from "../components/SubmitForm"


test("Initially input field is empty and button is disabled", async () => {

    render(<SubmitForm />);

    // input box
    const inputBox = screen.getByRole("textbox");

    // button 
    const button = screen.getByRole("button");

    // input field is empty
    expect(inputBox).toHaveValue("");

    // button will be disabled
    expect(button).toBeDisabled();

});


test("Enable Submit Button When Input has value", async () => {

    render(<SubmitForm />);

    const button = screen.getByRole("button");

    const input = screen.getByRole("textbox"); // screen.getByTestId('test')
    fireEvent.change(input, { target: { value: 'a' } }) // if we fire any text

    expect(button).toBeEnabled();

    fireEvent.change(input, { target: { value: '' } }) // if we fire any text

    expect(button).toBeDisabled();

})