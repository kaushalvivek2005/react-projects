import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../components/SearchBar";

describe("SearchBar Component", () => {
    test("renders the search input", () => {
        render(<SearchBar search="" setSearch={() => {}} />);

        const input = screen.getByPlaceholderText("Search posts...");

        expect(input).toBeInTheDocument();
    });

    test("calls setSearch when user types", async () => {
        const user = userEvent.setup();
        const setSearch = vi.fn();

        render(<SearchBar search="" setSearch={setSearch} />);

        const input = screen.getByPlaceholderText("Search posts...");

        await user.type(input, "React");

        expect(setSearch).toHaveBeenCalled();
    });
});