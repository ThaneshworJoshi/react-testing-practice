const { render, screen, fireEvent } = require("@testing-library/react");
import AddInput from "../AddInput";

const mockSetTodo = jest.fn();

describe("<AddInput/>", () => {
  it("should render Add input element", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into input", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    fireEvent.change(inputElement, {
      target: { value: "Learn react testing" },
    });
    expect(inputElement.value).toBe("Learn react testing");
  });

  it("should have empty input when add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    const addButtonElement = screen.getByRole("button", { name: "Add" });

    fireEvent.change(inputElement, {
      target: { value: "Learn react testing" },
    });
    expect(addButtonElement).toBeInTheDocument();
    expect(inputElement.value).toBe("Learn react testing");

    fireEvent.click(addButtonElement);
    expect(inputElement.value).toBe("");
  });
});
