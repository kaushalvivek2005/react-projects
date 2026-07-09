import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import SearchBar from "../components/SearchBar";

describe("SearchBar Component", () => {

  test("renders the search input", () => {
    render(<SearchBar search="" setSearch={() => {}} />);

    expect(
      screen.getByRole("searchbox", { name: /search posts/i })
    ).toBeInTheDocument();
  });

  test("renders associated label", () => {
    render(<SearchBar search="" setSearch={() => {}} />);

    expect(
      screen.getByLabelText(/search posts/i)
    ).toBeInTheDocument();
  });

  test("calls setSearch when user types", async () => {
    const user = userEvent.setup();
    const setSearch = vi.fn();

    render(<SearchBar search="" setSearch={setSearch} />);

    const input = screen.getByRole("searchbox", {
      name: /search posts/i,
    });

    await user.type(input, "React");

    expect(setSearch).toHaveBeenCalled();
    expect(setSearch).toHaveBeenCalledTimes(5);
  });

  test("has autocomplete disabled", () => {
    render(<SearchBar search="" setSearch={() => {}} />);

    const input = screen.getByRole("searchbox", {
      name: /search posts/i,
    });

    expect(input).toHaveAttribute("autocomplete", "off");
  });

});