import { render, screen } from "@testing-library/react"
import APICall from "../components/APICall"



test("Testing api", ()=>{
    render(<APICall />);

    const el = screen.getByRole("heading")

    expect(el).toBeInTheDocument();
});

// test("Test for mock api", async()=>{
//     render(<APICall />);
//     const el = await screen.findAllByRole("listitem");
//     expect(el).toHaveLength(10)
// })