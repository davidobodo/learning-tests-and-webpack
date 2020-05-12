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

it('should be disabled', () => {
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

















// test('render correctly inputs', () => {
//     let component = renderer.create(<App />).toJSON();
//     expect(component).toMatchSnapshot();
// })


//enzyme
// it('should change state after change in input value', () => {
//     let component;
//     let newValue = 'hello';
//     const wrapper = mount(<Auth />);

//     expect(wrapper.find('input[name="fullName"]').prop('value')).toEqual('david');
//     wrapper.find('input[name="fullName"]').simulate('change', { target: { name: 'fullName', value: newValue } });
//     expect(wrapper.find('input[name="fullName"]').prop('value')).toEqual(newValue)
// })
