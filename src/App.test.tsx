import * as React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe("App", () => {
  it('should render something', () => {
    const wrapper : any = shallow(<App test={1}/>);
    expect(wrapper.find(App)).toHaveLength(1);
  })

  it('should render a title saying hello', () => {
    const wrapper: any = shallow(<App test={1}/>)
    expect(wrapper.find('h1').text()).toEqual("Hello, world....1")
  })
})