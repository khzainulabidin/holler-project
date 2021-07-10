import React from 'react';
import App from './App';
import {cleanup, render} from "@testing-library/react";

afterEach(cleanup);

test('App renders without crashing', () => {
    render(<App/>);
});
