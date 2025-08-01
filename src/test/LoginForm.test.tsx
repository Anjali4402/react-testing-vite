import { fireEvent, render, screen } from "@testing-library/react"
import LoginForm from "../components/LoginForm"
import userEvent from "@testing-library/user-event";



describe("Login Form Testing", () => {

    // test("Test initial empty input fields and disabled button")
    test("Test initial empty input fields and disabled button", async () => {

        render(<LoginForm />);

        const inputEmail = screen.getByPlaceholderText('Enter you Email');
        const inputPassword = screen.getByPlaceholderText('Enter Your Password')
        const buttonBox = screen.getByText("Submit");

        // is input field and buttons are present
        expect(inputEmail).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
        expect(buttonBox).toBeInTheDocument();

        // test initiall input filed has no value and button is disabled
        expect(inputEmail).toHaveValue("");
        expect(inputPassword).toHaveValue("");
        expect(buttonBox).toBeDisabled();
    });


    // test if there any value in email and password then button will be enable
    test("Test is any value in input fields then only button will be enable", async () => {
        render(<LoginForm />);


        const inputEmail = screen.getByPlaceholderText('Enter you Email');
        const inputPassword = screen.getByPlaceholderText('Enter Your Password')
        const buttonBox = screen.getByText("Submit");

        fireEvent.change(inputEmail, { target: { value: "a" } });
        fireEvent.change(inputPassword, { target: { value: "a" } });

        expect(buttonBox).toBeEnabled();

    });



    // show error message if-
    // email text include @
    test("Shows error for invalid email ", async () => {

        const user = userEvent.setup();
        render(<LoginForm />);

        const inputEmail = screen.getByPlaceholderText('Enter you Email');
        const inputPassword = screen.getByPlaceholderText('Enter Your Password')
        const buttonBox = screen.getByText("Submit");


        await user.type(inputEmail, "invalidemail");
        await user.type(inputPassword, 'abcdefg');
        await user.click(buttonBox);

        expect(screen.getByText("Your email is not including @"))

    });

        // password have less then 6 character
    test("Shows error for invalid Passoword ", async () => {

        const user = userEvent.setup();
        render(<LoginForm />);

        const inputEmail = screen.getByPlaceholderText('Enter you Email');
        const inputPassword = screen.getByPlaceholderText('Enter Your Password')
        const buttonBox = screen.getByText("Submit");


        await user.type(inputEmail, "valid@gmail.com");
        await user.type(inputPassword, 'abc');
        await user.click(buttonBox);

        expect(screen.getByText("Password must contain 6 character"));

    });




    test("Shows success message on valid data ", async () => {

        const user = userEvent.setup();
        render(<LoginForm />);

        const inputEmail = screen.getByPlaceholderText('Enter you Email');
        const inputPassword = screen.getByPlaceholderText('Enter Your Password')
        const buttonBox = screen.getByText("Submit");


        await user.type(inputEmail, "valid@gmail.com");
        await user.type(inputPassword, 'abc1234');
        await user.click(buttonBox);

        expect(screen.getByText("Form submtted successfully!"));

    });



})