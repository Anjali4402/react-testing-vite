import { render,screen } from "@testing-library/react"
import GetByRoleQuery from "../components/GetByRoleQuery"


test("Test Input role", ()=>{
    render(<GetByRoleQuery />);
    const inputBox = screen.getByRole('textbox');
    expect(inputBox).toBeInTheDocument(); // do we have test box in that file
    expect(inputBox).toHaveValue("hello")  // do we have value is hello
})