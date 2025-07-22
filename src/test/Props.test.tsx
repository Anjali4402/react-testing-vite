import { render, screen } from "@testing-library/react"
import PropsTest from "../components/PropsTest"
import userEvent from "@testing-library/user-event";



test("Props Testing", ()=>{

    const name = 'Kavita'
    
    render(<PropsTest userName={name} />);

    const userName = screen.getByText(`User name is : ${name}`)

    expect(userName).toBeInTheDocument();


});

test("Functional Props Testing", async ()=>{

    const testFunction = vitest.fn();  //jest.fn();
    userEvent.setup();
    render(<PropsTest testFunction={testFunction} />);

    const btn = screen.getByRole('button');
    await userEvent.click(btn);
    expect(testFunction).toBeCalled();
} )