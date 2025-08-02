import { render, screen } from "@testing-library/react"
import SignupForm from "../components/SignupForm"
import userEvent from "@testing-library/user-event";


describe("Sign up form testing", () => {

    test("Initial test input filed should be empty button disabled", () => {
        render(<SignupForm />);

        const emailBox = screen.getByLabelText("Email");
        const passwordBox = screen.getByLabelText("Password");
        const buttonBox = screen.getByText('Submit');

        expect(emailBox).toBeInTheDocument();
        expect(passwordBox).toBeInTheDocument();
        expect(buttonBox).toBeDisabled();
    });


    test("Check Functionality", async () => {


        render(<SignupForm />);

        const user = userEvent.setup();


        // seleect input box and button
        const emailBox = screen.getByLabelText("Email");
        const passwordBox = screen.getByLabelText("Password");
        const buttonBox = screen.getByText('Submit');


        // first we enter any value in the email and password
        await user.type(emailBox, 'test123');
        await user.type(passwordBox, '123');

        // after entering the button will be enabled
        expect(buttonBox).toBeEnabled();

        // when button is enable then click the button
        await user.click(buttonBox)

        // after button click if the values are incurrect then show the error message.
        expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
        expect(screen.getByText(/Password too short/i)).toBeInTheDocument();

        // clear all the input values
        await user.clear(emailBox);
        await user.clear(passwordBox);
        
        // now write currect email and passowrd
        await user.type(emailBox, 'test@123');
        await user.type(passwordBox, '123456');

        // after entered currect value click on the button
        await user.click(buttonBox);

        // if there is not any error then show the success message.
        expect(screen.getByText(/Signup Successful!/i)).toBeInTheDocument();
        
    })


})