import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { vi } from "vitest";

// Mock the API
vi.mock("../services/api", () => ({
  fetchPosts: vi.fn(),
}));

import { fetchPosts } from "../services/api";

describe("App Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("shows loader while fetching posts", () => {
    fetchPosts.mockReturnValue(new Promise(() => {}));

    render(<App />);

    expect(screen.getByText("Loading Posts...")).toBeInTheDocument();
  });

  test("renders posts after successful API call", async () => {
    fetchPosts.mockResolvedValue([
      {
        id: 1,
        title: "React Testing",
        body: "Learning React Testing Library and Vitest.",
      },
    ]);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("React Testing")).toBeInTheDocument();
    });
  });

  test("shows error message when API fails", async () => {
    fetchPosts.mockRejectedValue(new Error("API Failed"));

    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByText("Failed to fetch posts. Please try again.")
      ).toBeInTheDocument();
    });
  });

  test("renders search input", async () => {
    fetchPosts.mockResolvedValue([]);

    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByRole("searchbox", {
          name: /search posts/i,
        })
      ).toBeInTheDocument();
    });
  });

  test("shows total post count", async () => {
    fetchPosts.mockResolvedValue([
      {
        id: 1,
        title: "Post One",
        body: "Body One",
      },
    ]);

    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByText(/Showing 1 of 1 Posts/i)
      ).toBeInTheDocument();
    });
  });

  test("renders main landmark", async () => {
    fetchPosts.mockResolvedValue([]);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole("main")).toBeInTheDocument();
    });
  });
});