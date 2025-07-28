import { fireEvent, render, screen } from "@testing-library/react"
import CheckboxToggleMessage from "../components/CheckboxToggleMessage"


test("initially does not show the message", () => {
    render(<CheckboxToggleMessage />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();

    expect(screen.queryByText("Hello, World!")).toBeNull();
});

test("Conditional Rendering with Checkbox", async () => {
    render(<CheckboxToggleMessage />);

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(screen.getByText("Hello world!"));


    fireEvent.click(checkbox);

    expect(screen.queryByText("Hello, World!")).toBeNull();


})