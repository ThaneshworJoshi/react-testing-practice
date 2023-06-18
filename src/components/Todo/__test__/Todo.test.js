const { render, screen, fireEvent } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
  const buttonElement = screen.getByRole("button", { name: "Add" });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("<Todo/>", () => {
  it("should render Add input element", async () => {
    render(<MockTodo />);
    addTask(["Learn React Testing"]);
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    const buttonElement = screen.getByRole("button", { name: "Add" });

    fireEvent.change(inputElement, {
      target: { value: "Learn React Testing" },
    });
    fireEvent.click(buttonElement);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe("");
    const divElement = await screen.findAllByText(/Learn React Testing/i);
    expect(buttonElement).toBeInTheDocument();
    expect(divElement.length).toBe(2);
  });

  it("should render all added tasks", () => {
    render(<MockTodo />);

    addTask(["Learn react testing", "Get a job"]);

    const divElement = screen.getAllByTestId("task-container");

    expect(divElement.length).toBe(2);
  });

  it("task should not have completed class when initially rendered", () => {
    render(<MockTodo />);
    addTask(["Learn react testing"]);
    const divElement = screen.getByText(/Learn react testing/i);

    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should have completed class when initially rendered", () => {
    render(<MockTodo />);
    addTask(["Learn react testing"]);
    const divElement = screen.getByText(/Learn react testing/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
