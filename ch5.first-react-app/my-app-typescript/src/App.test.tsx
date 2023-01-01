import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders component correctly', function () {
    const {container} = render(<App/>);

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    expect(container.getElementsByClassName('App-logo')).toHaveLength(1);
    expect(container.getElementsByClassName('App-logo')[0]).toHaveAttribute(
        'src',
        'logo.svg',
    );
    expect(container.getElementsByTagName('p')).toHaveLength(1);
    // 문자열 테스트의 경우에는 테스트하는 문자열이 부족한 경우, 테스트 성공으로 뜬다.
    // 하지만 다음 해당해야하는 문자가 틀릴 경우에는 실패
    expect(container.getElementsByTagName('p')[0]).toHaveTextContent(
        'Edit src/App.tsx and save to reload.'
    );
    expect(container).toMatchSnapshot();
  });
});
