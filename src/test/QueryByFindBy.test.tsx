import { render, screen } from "@testing-library/react"
import QueryByFindBy from "../components/QueryByFindBy"



test("Testing queryByText and queryByAllText " , ()=>{
    render(<QueryByFindBy />);

    // const query = screen.getByText('Login');  // in this case it don't no is Login is there in the code or not.
    const query = screen.queryByText("Login")  // and in the it knows Login is in the code but not in the ui ,
    expect(query).not.toBeInTheDocument();  // so in this case it will run only withe  "queryByTest" command

} );


test("Testing findByText and findAllByText", async()=>{
    render(<QueryByFindBy />);

    const findqry = await screen.findByText("data found", {}, {timeout: 2000});
    expect(findqry).toBeInTheDocument();
});



test("Testing with Custom query", ()=>{
    render(<QueryByFindBy />);

    const customqry = document.querySelector("#testId");

    expect(customqry).toBeInTheDocument();
    expect(customqry).toHaveTextContent('Custom query');
    expect(customqry).toHaveAttribute("id")
})