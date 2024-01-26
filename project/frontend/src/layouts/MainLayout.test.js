// /frontend/src/layouts/MainLayout.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import MainLayout from "./MainLayout";

describe("MainLayout", () => {
  test("renders MainLayout component", () => {
    render(<MainLayout />);
    const headerElement = screen.getByText(/Header/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("renders children prop", () => {
    render(<MainLayout><div data-testid="child-element">Child Element</div></MainLayout>);
    const childElement = screen.getByTestId("child-element");
    expect(childElement).toBeInTheDocument();
  });
});
