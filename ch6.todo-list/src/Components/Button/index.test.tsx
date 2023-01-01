import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import 'jest-styled-components';

import {Button} from "./index";

describe('<Button />', () => {
    it('renders component correctly', () => {
        const {container} = render(<Button label={'Button Test'}/>)
        const label = screen.getByText('Button Test');
        expect(label).toBeInTheDocument();
        const parent = label.parentElement;
        expect(parent).toHaveStyleRule('background-color', '#304FFE');
        expect(parent).toHaveStyleRule('background-color', '#1E40FF', {
            modifier: ':hover',
        })
        expect(container).toMatchSnapshot();
    })

    it('changes backgroundColor and hoverColor Props', () => {
        const backgroundColor = '#304FFE';
        const hoverColor = '#1E40FF';
        render(<Button label={'Button Test'} backgroundColor={backgroundColor} hoverColor={hoverColor}/>)

        const parent = screen.getByText('Button Test').parentElement;
        expect(parent).toHaveStyleRule('background-color', backgroundColor);
        expect(parent).toHaveStyleRule('background-color', hoverColor, {
            modifier: ':hover',
        });
    });

    it('clicks the button', () => {
        const handleClick = jest.fn(); // 임시 함수 생성
        render(<Button label='Button Test' onClick={handleClick}/>);

        const label = screen.getByText('Button Test');
        expect(handleClick).toHaveBeenCalledTimes(0); // 함수가 실행되지 않았음을 테스트
        fireEvent.click(label); // 한번 실행
        expect(handleClick).toHaveBeenCalledTimes(1); // 함수가 한 번 실행되었음을 테스트
    });
})