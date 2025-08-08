import { fireEvent, render, screen } from "@testing-library/react";
import TodoBox from "../components/TodoBox";

describe("Todo web app testing", () => {
  test("Test initial UI", () => {
    render(<TodoBox />);
    const addTaskButton = screen.getByTestId("add-task");
    expect(addTaskButton).toBeInTheDocument();
    expect(screen.getByText("No Task Found")).toBeInTheDocument();
  });

  test("Test adding with empty input", () => {
    render(<TodoBox />);
    const promptMock = vi.spyOn(window, "prompt").mockReturnValue("");
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.click(screen.getByTestId("add-task"));

    expect(promptMock).toHaveBeenCalledWith("Enter Task Name");
    expect(alertMock).toHaveBeenCalledWith("Empty Field is not Required");

    promptMock.mockRestore();
    alertMock.mockRestore();
  });

  test("Test adding a valid task", () => {
    const promptMock = vi.spyOn(window, "prompt").mockReturnValue("Task 1");
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<TodoBox />);
    fireEvent.click(screen.getByTestId("add-task"));

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();

    expect(alertMock).not.toHaveBeenCalled();

    promptMock.mockRestore();
    alertMock.mockRestore();
  });

  test("Test editing a task with empty input", () => {
    // First, add a task
    const promptAddMock = vi.spyOn(window, "prompt").mockReturnValue("Task 1");
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<TodoBox />);
    fireEvent.click(screen.getByTestId("add-task"));

    promptAddMock.mockRestore();

    // Now, edit with empty value
    const promptEditMock = vi.spyOn(window, "prompt").mockReturnValue("");
    fireEvent.click(screen.getByText("Edit"));
    expect(alertMock).toHaveBeenCalledWith("Empty Field is not Required");

    promptEditMock.mockRestore();
    alertMock.mockRestore();
  });

  test("Test editing a task with valid value", () => {
    // Add a task
    const promptAddMock = vi.spyOn(window, "prompt").mockReturnValue("Task 1");
    render(<TodoBox />);
    fireEvent.click(screen.getByTestId("add-task"));
    promptAddMock.mockRestore();

    // Edit the task
    const promptEditMock = vi.spyOn(window, "prompt").mockReturnValue("Updated Task");
    fireEvent.click(screen.getByText("Edit"));

    expect(screen.getByText("Updated Task")).toBeInTheDocument();
    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();

    promptEditMock.mockRestore();
  });

  test("Test deleting a task", () => {
    // Add task
    const promptMock = vi.spyOn(window, "prompt").mockReturnValue("Task 1");
    render(<TodoBox />);
    fireEvent.click(screen.getByTestId("add-task"));
    promptMock.mockRestore();

    // Delete task
    fireEvent.click(screen.getByText("Delete"));

    expect(screen.getByText("No Task Found")).toBeInTheDocument();
    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
  });

  test("Test adding multiple tasks and deleting one", () => {
    const promptMock = vi.spyOn(window, "prompt");

    render(<TodoBox />);

    // Add first task
    promptMock.mockReturnValue("Task 1");
    fireEvent.click(screen.getByTestId("add-task"));

    // Add second task
    promptMock.mockReturnValue("Task 2");
    fireEvent.click(screen.getByTestId("add-task"));

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();

    // Delete first task
    fireEvent.click(screen.getAllByText("Delete")[0]);

    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();

    promptMock.mockRestore();
  });
});
