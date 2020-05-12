import React from 'react';
import App from './app';
import Input from './components/Input';
import { cleanup, fireEvent, render } from '@testing-library/react';
import "@testing-library/jest-dom";


afterEach(cleanup);

it('should take a snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
})

it('Full name should change input value', () => {
    const input = render(<App />).getByLabelText('Obodo David');
    fireEvent.change(input, { target: { value: 'rukky' } })
    expect(input.value).toBe('rukky')
})

it('Phone number should contain only letters', () => {
    const input = render(<App />).getByLabelText('080XXXXXXXX');
    fireEvent.change(input, { target: { value: '78ruk9ky' } })
    expect(input.value).toBe('789')
})

it('should display a button with text submit', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('submit-button')).toHaveTextContent('Submit')
})

it('should be disabled initially', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('submit-button')).toBeDisabled();
})

it('label should change position when input is focused', () => {
    const { queryByText, getByLabelText } = render(<App />)
    const input = getByLabelText('Obodo David');
    input.focus();
    expect(queryByText('Full Name')).toHaveStyle('top: -11px; left: 12px;')
})

it('should render a snapshot of input field with a class of error', () => {
    const { container } = render(<Input hasError={true} />);
    expect(container).toMatchSnapshot();
})

it('Button should be enabled when all validations are met', () => {
    const { getByTestId, getByLabelText } = render(<App />);
    const fullname = getByLabelText('Obodo David');
    fireEvent.change(fullname, { target: { value: 'Obodo Geek' } })

    const email = getByLabelText('obododavid@gmail.com');
    fireEvent.change(email, { target: { value: 'phitgeek@gmail.com' } })

    const phone = getByLabelText('080XXXXXXXX');
    fireEvent.change(phone, { target: { value: '08105546642' } })

    const password = getByLabelText('Password');
    fireEvent.change(password, { target: { value: 'Aa1@aaa' } })

    const cPassword = getByLabelText('Confirm Password');
    fireEvent.change(cPassword, { target: { value: 'Aa1@aaa' } })

    const cNumber = getByLabelText('XXXX XXXX XXXX XXXX');
    fireEvent.change(cNumber, { target: { value: '5627463526372649' } })

    const eDate = getByLabelText('mm/yy');
    fireEvent.change(eDate, { target: { value: '2390' } })

    const pin = getByLabelText('****');
    fireEvent.change(pin, { target: { value: '0000' } })

    expect(getByTestId('submit-button')).toBeEnabled();

})


