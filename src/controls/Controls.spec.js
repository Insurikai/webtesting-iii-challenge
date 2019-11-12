// Test away
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from '../dashboard/Dashboard';

describe('Dashboard',()=>  {
  it('cannot be closed or opened if it is locked', async ()=>{
    const wrapper = rtl.render(<Dashboard />);
    const closeOpenButton = await wrapper.findByText('Close Gate');
    const lockUnlockButton = await wrapper.findByText('Lock Gate');
    closeOpenButton.click();
    lockUnlockButton.click();
    expect(closeOpenButton.hasAttribute('disabled'))
    rtl.cleanup();
  })
  it('provide buttons to toggle the `closed` and `locked` states.', ()=>{
    const wrapper = rtl.render(<Dashboard />);
    
    rtl.cleanup();
  })
  it('buttons text changes to reflect the state the door will be in if clicked', ()=>{
    const wrapper = rtl.render(<Dashboard />);
    rtl.cleanup();
  })
  it('the closed toggle button is disabled if the gate is locked', ()=>{
    const wrapper = rtl.render(<Dashboard />);
    rtl.cleanup();
  })
  it('the locked toggle button is disabled if the gate is open', ()=>{
    const wrapper = rtl.render(<Dashboard />);
    rtl.cleanup();
  })
})

/*
- provide buttons to toggle the `closed` and `locked` states.
- buttons' text changes to reflect the state the door will be in if clicked
- the closed toggle button is disabled if the gate is locked
- the locked toggle button is disabled if the gate is open  
*/