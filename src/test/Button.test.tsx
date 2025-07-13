import { render, screen } from "@testing-library/react"
import Button from "../components/Button"


test('Test getAllByRole in Button', () => {
    render(<Button />);

    const buttons = screen.getAllByRole('button');   // getAllByRole will return the array of those.
    for (let btn = 0; btn < buttons.length; btn++) {
        expect(buttons[btn]).toBeInTheDocument();
    }

})