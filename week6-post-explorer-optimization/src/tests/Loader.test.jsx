import { render, screen } from "@testing-library/react";
import Loader from "../components/Loader";

describe("Loader Component", () => {

    test("renders the loading message", () => {
        render(<Loader />);
        expect(screen.getByText("Loading Posts...")).toBeInTheDocument();
    });

    test("renders a heading with loading text", () => {
        render(<Loader />);

        const heading = screen.getByRole("heading", { level: 2 });

        expect(heading).toHaveTextContent("Loading Posts...");
    });

    test("renders loader with status role", () => {
        render(<Loader />);
        expect(screen.getByRole("status")).toBeInTheDocument();
    });

    test("loader has polite live region", () => {
        render(<Loader />);

        const loader = screen.getByRole("status");

        expect(loader).toHaveAttribute("aria-live", "polite");
    });

});