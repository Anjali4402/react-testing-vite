import { render, screen } from "@testing-library/react"
import MultiStepForm from "../components/MultiStepForm"
import userEvent from "@testing-library/user-event";


test("Multi Step form", async () => {

    const user = userEvent.setup();


    render(<MultiStepForm />);

    const nameInputBox = screen.getByLabelText("name");
    const emailInputBox = screen.getByLabelText("email");
    const nextButton = screen.getByText("Next");


    // initially both field are empty and next button will be disabled
    expect(nameInputBox).toHaveValue("");
    expect(emailInputBox).toHaveValue("");

    expect(nextButton).toBeDisabled();


    // we enter any value in name and email
    await user.type(nameInputBox, 'abc')
    await user.type(emailInputBox, 'Test123')

    // then the next button will be enabled
    expect(nextButton).toBeEnabled();


    // after the button enable click on the submit button
    await user.click(nextButton)



    // email is invalid so it will show error
    expect(screen.getByText(/Email is invalid/i)).toBeInTheDocument();


    // await user.clear(emailInputBox);
    await user.clear(emailInputBox);

    await user.type(emailInputBox, "Test123@gmail.com");

    await user.click(nextButton);


    // access all the field
    const passwordInputBox = screen.getByLabelText("password")
    const confirmPasswordInputBox = screen.getByLabelText("confirmPassword")
    const submitButton = screen.getByText("Submit");


    //  initially all the field are empty and submit button is disabled
    expect(passwordInputBox).toHaveValue("");
    expect(confirmPasswordInputBox).toHaveValue("");

    expect(submitButton).toBeDisabled();

    // enter incomplete password and not send same password .
    await user.type(passwordInputBox, 'Test')
    await user.type(confirmPasswordInputBox, '123')


    // enable enter button
    expect(submitButton).toBeEnabled();



    // click enter button 
    await user.click(submitButton);




    // show the error when password in currect
    expect(screen.getByText("Password must be at least 6 characters")).toBeInTheDocument();

    // write the passward valid 
    await user.type(passwordInputBox, 'Test123');
    await user.type(passwordInputBox, 'Test456');

    // click enter button
    await user.click(submitButton);

    // then show the mismatch confirm password error
    expect(screen.getByText("Passwords do not match")).toBeInTheDocument();

    // now clear the input box
    await user.clear(passwordInputBox);
    await user.clear(confirmPasswordInputBox);


    // enter currect and same password
    await user.type(passwordInputBox, "Test123");
    await user.type(confirmPasswordInputBox, "Test123");


    // now submit the form
    await user.click(submitButton);

    // now it is shows the success message 
    expect(screen.getByText('Signup Complete')).toBeInTheDocument();


})