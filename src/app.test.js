import React from 'react';
import App from './app';
import { cleanup, fireEvent, render } from '@testing-library/react';


afterEach(cleanup);

// it('should take a snapshot', () => {
//     const { asFragment } = render(<App />);

//     expect(asFragment(<App />)).toMatchSnapshot;
// })

it('Full name should change input value', () => {
    const input = render(<App />).getByPlaceholderText('Obodo David');;
    fireEvent.change(input, { target: { value: 'rukky' } })
    expect(input.value).toBe('rukky')
})

it('Phone number should contain only letters', () => {
    const input = render(<App />).getByPlaceholderText('080XXXXXXXX');;
    fireEvent.change(input, { target: { value: '78ruk9ky' } })
    expect(input.value).toBe('789')
})

it('should display a button', () => {
    // const button = render(<App />).ge
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
