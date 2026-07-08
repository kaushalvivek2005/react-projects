import { render, screen } from "@testing-library/react";
import Error from "../components/Error";

describe("Error Component", () => {
    test("renders the error heading", () => {
        render(<Error message="Failed to load posts" />);

        expect(screen.getByText("⚠️ Error")).toBeInTheDocument();
    });

    test("renders the error message", () => {
        render(<Error message="Failed to load posts" />);

        expect(screen.getByText("Failed to load posts")).toBeInTheDocument();
    });
});