import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";


describe("Navbar Component", () => {
    test("renders navigation element", () => {
        render(<Navbar />);

        const nav = screen.getByRole("navigation");

        expect(nav).toBeInTheDocument();
    });

    test("renders heading as h1", () => {
        render(<Navbar />);

        const heading = screen.getByRole("heading", { level: 1 });

        expect(heading).toHaveTextContent("Post Explorer");
    });

    test("renders the heading 'Post Explorer'", () => {
        render(<Navbar />);

        const heading = screen.getByText("Post Explorer");

        expect(heading).toBeInTheDocument();
    });
});