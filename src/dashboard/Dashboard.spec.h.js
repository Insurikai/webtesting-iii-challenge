// Test away
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('Dashboard',()=>  {
  it('renders controls and display', async()=>{
    const wrapper = rtl.render(<Dashboard/>);
    const controls = wrapper.getByTestId('controls');
    const display = wrapper.getByTestId('display');
    expect(controls && display)
    rtl.cleanup();
  })
})