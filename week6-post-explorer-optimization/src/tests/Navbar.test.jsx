import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar Component", () => {

    test("renders banner landmark", () => {
        render(<Navbar />);

        expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    test("renders heading as h1", () => {
        render(<Navbar />);

        const heading = screen.getByRole("heading", { level: 1 });

        expect(heading).toHaveTextContent("Post Explorer");
    });

    test("renders the heading 'Post Explorer'", () => {
        render(<Navbar />);

        expect(screen.getByText("Post Explorer")).toBeInTheDocument();
    });

});