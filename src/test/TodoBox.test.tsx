import { render, screen } from "@testing-library/react"
import TodoBox from "../components/TodoBox"



describe("Todo web app testing", ()=>{

    test("Test initial ui", async()=>{

        render(<TodoBox />);

        const addTaskButton = screen.getByTestId("add-task");

        expect(addTaskButton).toBeInTheDocument();

    })



})