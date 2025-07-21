import { render, screen } from "@testing-library/react";
import TextMatch from "../components/TextMatch";


test("Text match with string", () => {
    render(<TextMatch />);

    // const div = screen.getByText('Hello world', {exact: false})  // doen't need exact same
    // const div = screen.getByText('Hello ', {exact: false})  // doen't need exact same
    const div = screen.getByText('HELLO ', { exact: false })  // doen't need exact same
    expect(div).toBeInTheDocument();
});


test("Text match with regex", () => {
    render(<TextMatch />);

    const div = screen.getByText(/hello w?orld/i);  
    // using ? it will ignore w in that   
    // if using i then it will pic it from anywhare and it will not case sensitive

    expect(div).toBeInTheDocument();
});
