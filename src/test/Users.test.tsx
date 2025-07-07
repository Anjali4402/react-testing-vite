import { render, screen } from "@testing-library/react";
import Users from "../components/Users";



test("Testing for the getUsersList function", () => {
    // const componentData = renderer.create('')
    const usersInstance = new Users({});
    const result = usersInstance.getUsersList("Hello");
    expect(result).toBe("Hello extra Test");
});


test('Render Users with name', () => {
    //   render(<Greeting name="Anjali" />);
    render(<Users name="suhani" />);
    const greetingElement = screen.getByText('Username : suhani');
    expect(greetingElement).toBeInTheDocument();
});