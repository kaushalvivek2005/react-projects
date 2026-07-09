import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostCard from "../components/PostCard";

const mockPost = {
  title: "React Testing",
  body: "This is a sample post body used for testing the PostCard component. It contains enough characters to test the Read More and Show Less functionality properly."
};

describe("PostCard Component", () => {

  test("renders post title", () => {
    render(<PostCard post={mockPost} />);

    expect(screen.getByText("React Testing")).toBeInTheDocument();
  });

  test("shows Read More button initially", () => {
    render(<PostCard post={mockPost} />);

    expect(
      screen.getByRole("button", { name: /read full post/i })
    ).toHaveTextContent("Read More");
  });

  test("changes button text after click", async () => {
    const user = userEvent.setup();

    render(<PostCard post={mockPost} />);

    const button = screen.getByRole("button", {
      name: /read full post/i,
    });

    await user.click(button);

    expect(button).toHaveTextContent("Show Less");
  });

  test("updates aria-expanded after click", async () => {
    const user = userEvent.setup();

    render(<PostCard post={mockPost} />);

    const button = screen.getByRole("button", {
      name: /read full post/i,
    });

    expect(button).toHaveAttribute("aria-expanded", "false");

    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  test("renders article landmark", () => {
    render(<PostCard post={mockPost} />);

    expect(screen.getByRole("article")).toBeInTheDocument();
  });

});