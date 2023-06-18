const { render, screen } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("<TodoFooter/>", () => {
  describe("First Function", () => {
    it("should render correct amount of incomplete tasks", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);

      const paragraphElement = screen.getByText(/5 tasks left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  it("should render 'task' when the number of incomplete tasks is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
    //   expect(paragraphElement).not.toBeInTheDocument();
  });

  it("should render 'task' when the number of incomplete tasks is one (toBeVisible)", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible();
    //   expect(paragraphElement).not.toBeVisible();
  });

  it("should render 'task' when the number of incomplete tasks is one (toContainHTML)", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toContainHTML("p");
  });

  it("should render 'task' when the number of incomplete tasks is one (haveTextContent)", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toHaveTextContent("1 task left");
  });

  it("should render 'task' when the number of incomplete tasks is one (haveTextContent)", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).not.toBeFalsy();
  });

  it("should render 'task' when the number of incomplete tasks is one (haveTextContent)", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement.textContent).toBe("1 task left");
  });
});
