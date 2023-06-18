const { render, screen } = require("@testing-library/react");
import Header from "../Header";

describe("<Header/>", () => {
  it("should render same text passed into title prop", () => {
    render(<Header title={"My Heading"} />);

    const headingElement = screen.getByText(/My Heading/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render same text passed into title prop (By Role)", () => {
    render(<Header title={"My Heading"} />);

    const headingElement = screen.getByRole("heading", { name: "My Heading" });
    expect(headingElement).toBeInTheDocument();
  });

  // it("should render same text passed into title prop (By Sementic)", () => {
  //   render(<Header title={"My Heading"} />);

  //   const headingElement = screen.getByTitle("sub-header");
  //   expect(headingElement).toBeInTheDocument();
  // });

  it("should render same text passed into title prop (By ID)", () => {
    render(<Header title={"My Heading"} />);

    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
  });

  // FIND BY

  it("should render same text passed into title prop (FIND BY)", async () => {
    render(<Header title={"My Heading"} />);

    const headingElement = await screen.findByText(/My Heading/i);
    expect(headingElement).toBeInTheDocument();
  });

  // QUERY BY

  it("My dog should not be in document (QUERY BY)", () => {
    render(<Header title={"My Heading"} />);

    const headingElement = screen.queryByText(/My dog/i);
    expect(headingElement).not.toBeInTheDocument();
  });

  // GET ALL BY

  // it("Should contain 2 heading (GET ALL BY)", () => {
  //   render(<Header title={"My Heading"} />);

  //   const headingElements = screen.getAllByRole("heading");
  //   expect(headingElements.length).toBe(2);
  // });
});
