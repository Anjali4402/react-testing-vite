import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChecboxChecked from "../components/ChecboxChecked";

test("initially does not show the message", () => {
  render(<ChecboxChecked />);
  
  // The paragraph should not be in the document initially
  expect(screen.queryByText(/hello, world!/i)).not.toBeInTheDocument();
});

test("shows the message when checkbox is checked", async () => {
  const user = userEvent.setup();
  render(<ChecboxChecked />);

  const checkbox = screen.getByRole("checkbox", { name: /show message/i });

  await user.click(checkbox);

  expect(screen.getByText(/hello, world!/i)).toBeInTheDocument();
});

test("hides the message when checkbox is unchecked again", async () => {
  const user = userEvent.setup();
  render(<ChecboxChecked />);

  const checkbox = screen.getByRole("checkbox", { name: /show message/i });

  await user.click(checkbox); // Check
  expect(screen.getByText(/hello, world!/i)).toBeInTheDocument();

  await user.click(checkbox); // Uncheck
  expect(screen.queryByText(/hello, world!/i)).not.toBeInTheDocument();
});
