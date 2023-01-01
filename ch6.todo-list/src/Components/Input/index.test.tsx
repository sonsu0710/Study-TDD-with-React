import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import 'jest-styled-components';

import {Input} from "./index";

describe('<Input />', () => {
    it('renders component correctly ', function () {
        const {container} = render(<Input value='default value'/>);

        const input = screen.getByDisplayValue('default value');
        expect(input).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('renders placeholder correctly ', () => {
        render(<Input placeholder='할 일을 입력해 주세요'/>);

        const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
        expect(input).toBeInTheDocument();
    });

    it('changes the data', () => {
        render(<Input placeholder='할 일을 입력해 주세요'/>);

        const input = screen.getByPlaceholderText('할 일을 입력해 주세요') as HTMLInputElement;
        fireEvent.change(input, {target: {value: 'study react'}});
        expect(input.value).toBe('study react');
    });
})