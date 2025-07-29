import { render, screen } from "@testing-library/react"
import SubmitDisabled from "../components/SubmitDisabled"
import userEvent from "@testing-library/user-event";



describe("This Test Case will test Disable Button When Input Is Empty", () => {

    test("Check is there is input box and button", () => {
        render(<SubmitDisabled />);


        const inputbox = screen.getByRole('textbox');

        expect(inputbox).toBeInTheDocument();

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });


    test("Check is button disabled", async() => {

        const user = userEvent.setup();

        render(<SubmitDisabled />);

        const inputbox = screen.getByRole('textbox');

        const button = screen.getByRole('button');

        expect(button).toBeDisabled();

        await user.type(inputbox, 'Hello')

        // expect(button).not.toBeDisabled();
        expect(button).toBeEnabled();

        await user.clear(inputbox);

        expect(button).toBeDisabled();

    })



})