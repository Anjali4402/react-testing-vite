import { act, render, screen } from '@testing-library/react';
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

    userEvent.setup()
    render(<UserEventTest />);

    const el = screen.getByRole('textbox');
    await userEvent.type(el, 'john')
    expect(screen.getByText("john")).toBeInTheDocument();

});


// sometimes we have to update state using event clicks, 
///   const [value, setValue] = usestate('');
// sometimes it gives error like state change will take some times and before the change assert function will call and it will give us some warning/error
// so to sovle this issue we use act function
// now after adding this first it will change the state then execute the assert

test("Testing onchange with act function", async()=>{

    userEvent.setup();
    render(<UserEventTest />);

    const input = screen.getByRole('textbox');

    await act(async ()=>{
        await userEvent.type(input, 'john');
    })

    expect(screen.getByText('john')).toBeInTheDocument();

})



