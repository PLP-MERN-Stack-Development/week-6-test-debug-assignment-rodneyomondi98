import { render, fireEvent } from "@testing-library/react";
import BugForm from "../../components/BugForm";

test("calls onSubmit with title", () => {
  const mockSubmit = jest.fn();
  const { getByPlaceholderText, getByText } = render(<BugForm onSubmit={mockSubmit} />);

  fireEvent.change(getByPlaceholderText("Bug Title"), {
    target: { value: "Bug 1" },
  });
  fireEvent.click(getByText("Submit"));

  expect(mockSubmit).toHaveBeenCalledWith("Bug 1");
});
