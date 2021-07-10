import React from 'react';
import {cleanup, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import TextError from "./TextError";

afterEach(cleanup);

test('TextError renders correctly', () => {
    render(<TextError>Some error</TextError>);
    expect(screen.getByTestId('error')).toHaveTextContent('Some error');
});
