import React from "react"
import renderer from "react-test-renderer"
import Tag from "./Tag"

describe("Tag", () => {
    it("renders", () => {
        const tag = renderer.create(<Tag tag={"tag"} />)
        expect(tag).toBeDefined()
    })
})
