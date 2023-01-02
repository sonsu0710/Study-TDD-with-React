import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import 'jest-styled-components';

import {ToDoItem} from "./index";

describe('<ToDoItem />', () => {
    it('renders component correctly', () => {
        const {container} = render(<ToDoItem label='default value'/>);

        const todoItem = screen.getByText('default value');
        expect(todoItem).toBeInTheDocument();

        const deleteBtn = screen.getByText('삭제');
        expect(deleteBtn).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('clicks the delete button', () => {
        const handleClick = jest.fn();
        render(<ToDoItem label='default value' onDelete={handleClick}/>);

        const deleteBtn = screen.getByText('삭제');
        expect(handleClick).toHaveBeenCalledTimes(0);
        fireEvent.click(deleteBtn);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
})