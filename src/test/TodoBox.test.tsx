import { fireEvent, render, screen } from "@testing-library/react"
import TodoBox from "../components/TodoBox"



describe("Todo web app testing", () => {

    test("Test initial ui", async () => {

        render(<TodoBox />);

        const addTaskButton = screen.getByTestId("add-task");

        expect(addTaskButton).toBeInTheDocument();

    });


    test('Test normally when enter empty input field', async () => {

        render(<TodoBox />);

        const promptMock = vi.spyOn(window, 'prompt').mockReturnValue('');
        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => { });

        const addTaskButton = screen.getByTestId("add-task");


        fireEvent.click(addTaskButton);


        expect(promptMock).toHaveBeenCalledWith('Enter Task Name');
        expect(alertMock).toHaveBeenCalledWith('Empty Field is not Required');

        promptMock.mockRestore();
        alertMock.mockRestore();


    });


    it('should proceed normally if valid task name is entered', () => {
        const promptMock = vi.spyOn(window, 'prompt').mockReturnValue('Buy Milk');
        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => { });

        render(<TodoBox />);

        const addTaskButton = screen.getByTestId("add-task");
        fireEvent.click(addTaskButton);

        expect(promptMock).toHaveBeenCalledWith('Enter Task Name');
        expect(alertMock).not.toHaveBeenCalled();

        promptMock.mockRestore();
        alertMock.mockRestore();
    });



})