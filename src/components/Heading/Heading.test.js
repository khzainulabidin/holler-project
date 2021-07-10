import React from 'react';
import {cleanup, render, screen} from "@testing-library/react";
import Heading from "./Heading";
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

test('Heading renders correctly', () => {
    render(<Heading heading={'Some heading'} desc={'Some desc'}/>);
    expect(screen.getByTestId('heading')).toHaveTextContent('Some heading');
    expect(screen.getByTestId('desc')).toHaveTextContent('Some desc');
});
