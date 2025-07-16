import { configure, fireEvent, render, screen } from "@testing-library/react"
import UserForm from "../components/UserForm";


// add this if instead fo data-testid we have any other attribute (in this case custom-testid)
// configure({testIdAttribute : "custom-testid"});



describe("User form", () => {

    test("Should be render input fields", () => {
        render(<UserForm />);
        expect(screen.getByPlaceholderText("Enter Name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter Password')).toBeInTheDocument();
    });


    test("Should update value on change", () => {
        render(<UserForm />);

        // select the fields by there unique test id
        const nameInput = screen.getByTestId("name-input");
        const emailInput = screen.getByTestId("email-input");
        const passwordInput = screen.getByTestId("password-input");


        // when we do fireEvent 
        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } })
        fireEvent.change(passwordInput, { target: { value: "123456" } })


        // then this value will be the value of the respective inbput box
        expect(nameInput).toHaveValue("John Doe");
        expect(emailInput).toHaveValue('john.doe@example.com');
        expect(passwordInput).toHaveValue("123456")
    });


    test("Testing component by test id ", () => {
        render(<UserForm />);

        const testIdComp = screen.getByTestId("name-input");
        // same one more getAllByTestId
        expect(testIdComp).toBeInTheDocument();
    });


    // add this test case if we have another test component by the value user-age
    // test("Test custom component", ()=>{
    //     render(<UserForm />)
    //     const userAge = screen.getByTestId("user-age");
    //     expect(userAge).toBeInTheDocument();
    // })


})