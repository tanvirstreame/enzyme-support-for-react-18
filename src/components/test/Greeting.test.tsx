import React from 'react';
import { shallow } from 'enzyme';
import Greeting from '../Greeting';

describe('<Greeting />', () => {
  it('renders the greeting message', () => {
    const wrapper = shallow(<Greeting name="John" />);
    expect(wrapper.find('h1').text()).toBe('Hello, John!');
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<Greeting name="John" />);
    expect(wrapper).toMatchSnapshot();
  });
});