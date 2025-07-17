import { render, screen, waitFor } from "@testing-library/react";
import BugList from "../../components/BugList";
import axios from "axios";

jest.mock("axios");

test("renders bug list", async () => {
  axios.get.mockResolvedValue({
    data: [{ _id: "1", title: "Bug A", status: "open" }],
  });

  render(<BugList />);

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  await waitFor(() => expect(screen.getByText("Bug A")).toBeInTheDocument());
});

{bugs.map((bug) => (
  <li>
    <strong>{bug.title}</strong> - <em>{bug.status}</em>
  </li>
))}

throw new Error("BugList crashed!");