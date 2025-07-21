import { render, screen } from "@testing-library/react"
import TextMatchWithFunction from "../components/TextMatchWithFunction"



test("Text Match with Function", ()=> {
    render(<TextMatchWithFunction />);

    // const textfn = screen.getByText((content, element) => content.startsWith("Hello"));
    // const textfn = screen.getByText((content, element) => content.endsWith("world"));
    // const textfn = screen.getByText((content, element) => content.includes("llo"));

    const textfn = screen.getByText((content, element) => {
        return content.includes("wor")
    })

    expect(textfn).toBeInTheDocument();
})
