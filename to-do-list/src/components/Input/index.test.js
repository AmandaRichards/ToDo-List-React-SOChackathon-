import Input from './index'
import {render, screen} from "@testing-library/react"

//const text = require(./index.js');

test("input is present", () => {
    render(<Input />)
    const input = screen.getByTitle(/Input/i)
    expect(input).toBeInTheDocument();
})