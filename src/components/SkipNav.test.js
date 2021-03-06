import React from "react";
import renderer from "react-test-renderer";
import SkipNav from "./SkipNav";

describe("SkipNav", () => {
    it("renders", () => {
        const skipNav = renderer.create(<SkipNav href="main" text={"skip content"} />);
        expect(skipNav).toBeDefined();
    });
});
