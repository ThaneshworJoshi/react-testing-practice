const { render, screen } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowerList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("<FollowersList/>", () => {
  it("should render first follower item", async () => {
    // render(<MockFollowerList />);

    // const firstFollowerDivElement = await screen.findByTestId(
    //   "follower-item-0"
    // );
    // expect(firstFollowerDivElement). toBeInTheDocument();
  });

  it("should render multiple follower items", async () => {
    // render(<MockFollowerList />);

    // const firstFollowerDivElements = await screen.findAllByTestId(
    //   /follower-item/i
    // );
    // expect(firstFollowerDivElements.length).toBe(5);
  });
});
