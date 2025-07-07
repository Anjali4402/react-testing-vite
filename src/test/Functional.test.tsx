import { fireEvent, render, screen } from "@testing-library/react"
import FunctionalComp from "../components/FunctionalComp"
import { handleOtherMethod } from "../helper";


test('Test onClick case', ()=>{
    render(<FunctionalComp />);
    const btn = screen.getByTestId('btn1');

    fireEvent.click(btn);
    expect(screen.getByText("Hello")).toBeInTheDocument();

});

test('Return method test',  ()=>{
    expect(handleOtherMethod()).toMatch('hi');
})