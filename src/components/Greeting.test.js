
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event'

describe ('Greeting component', () => {
    test('is "hello world" on the screen', () => {
        //Arrange
        render(<Greeting/>);
    
        //Act
        //now nothing...
    
        //Assert
        const helloWorldText = screen.getByText('Hello world!');
        expect(helloWorldText).toBeInTheDocument();
    });

    test('renders NOT CLICKED text', () => {
        render(<Greeting/>)
        const NOT_CLICKED = screen.getByText('NOT CLICKED', {exact: false});
        expect(NOT_CLICKED).toBeInTheDocument();
    })
    test('renders CLICKED text', () => {
        //Arrange
        render(<Greeting/>)

        //Act
        const btn = screen.getByRole('button');
        userEvent.click(btn)

        const CLICKED = screen.getByText('CLICKED');
        expect(CLICKED).toBeInTheDocument();
    })

    test('NOT CLICKED text is not visible after btn click', () => {
        //Arrange
        render(<Greeting/>)

        //Act
        const btn = screen.getByRole('button');
        userEvent.click(btn)

        //Assert
        const NOT_CLICKED = screen.queryByText('NOT CLICKED', {exact: false});
        expect(NOT_CLICKED).toBeNull();
    })
})