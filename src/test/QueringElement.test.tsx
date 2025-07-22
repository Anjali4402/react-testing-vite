import { render, screen, within } from "@testing-library/react"
import QueringElement from "../components/QueringElement"


test('Testing Quering within Element', ()=>{
    render(<QueringElement />);

    const el = screen.getByText("Parent Element");
    const subEl1 = within(el).getByText("Child Element 1");
    const subEl2 = within(el).getByText("Child Element 2");

    expect(el).toBeInTheDocument();
    expect(subEl1).toBeInTheDocument();
    expect(subEl2).toBeInTheDocument();

})