import React from "react";
import renderer from "react-test-renderer";
import NotFoundPage from "./404";

xdescribe("NotFoundPage", () => {
    it("renders", () => {
        const page = renderer.create(<NotFoundPage />);
        expect(page).toBeDefined();
    });
});
