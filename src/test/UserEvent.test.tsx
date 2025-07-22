import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserEventTest from '../components/UserEventTest';


test("Testing User Event on onClick Event", async()=>{
    
    userEvent.setup();
    render(<UserEventTest/>);

    const el = screen.getByRole('button');
    await userEvent.click(el);

    expect(screen.getByText("change it")).toBeInTheDocument();
})


test("Tesing User Event on onchange event", async()=>{

    userEvent.setup();
    render(<UserEventTest />);

    const el = screen.getByRole('textbox');
    await userEvent.type(el, 'john')
    expect(screen.getByText("john")).toBeInTheDocument();

})