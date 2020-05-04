import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

// import Adapter from 'enzyme-adapter-react-16';
// import {configure } from 'enzyme';

test('render correctly inputs', () => {
    const component = renderer.create(<App/>).toJSON()
})
