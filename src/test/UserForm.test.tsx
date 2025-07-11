import { fireEvent, render , screen } from "@testing-library/react"
import UserForm from "../components/UserForm"



describe("User form", ()=>{

    test("Should be render input fields", ()=> {
        render(<UserForm />);
        expect(screen.getByPlaceholderText("Enter Name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter Password')).toBeInTheDocument();
    });


    test("Should update value on change", ()=>{
        render(<UserForm />);

        // select the fields by there unique test id
        const nameInput = screen.getByTestId("name-input");
        const emailInput = screen.getByTestId("email-input");
        const passwordInput = screen.getByTestId("password-input");


        // when we do fireEvent 
        fireEvent.change(nameInput, { target : {value : "John Doe"}});
        fireEvent.change(emailInput, { target : {value : "john.doe@example.com"}})
        fireEvent.change(passwordInput, { target : {value : "123456"}})


        // then this value will be the value of the respective inbput box
        expect(nameInput).toHaveValue("John Doe");
        expect(emailInput).toHaveValue('john.doe@example.com');
        expect(passwordInput).toHaveValue("123456")
    })



})