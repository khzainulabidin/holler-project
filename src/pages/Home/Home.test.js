import React from 'react';
import {cleanup, render} from "@testing-library/react";
import Home from "./Home";

afterEach(cleanup);

test('Home renders without crashing', () => {
    render(<Home/>);
});
