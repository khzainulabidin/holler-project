import React from 'react';
import LoadingSpinner from "./LoadingSpinner";
import {cleanup, render} from "@testing-library/react";

afterEach(cleanup);

test('LoadingSpinner renders without crashing', () => {
    render(<LoadingSpinner isLoading={true}/>);
});
