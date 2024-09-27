// Test away
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';
import Dashboard from '../dashboard/Dashboard';

describe('Display',()=>  {
  it('Defaults to Unlocked and Open', async ()=>{
    const wrapper = rtl.render(<Display/>);
    expect(await wrapper.findByText('Unlocked') && await wrapper.findByText('Open')).toBeTruthy();
    rtl.cleanup();
  })
  it('displays if gate is open/closed and if it is locked/unlocked', async ()=>{
    const wrapper = rtl.render(<Dashboard />);
    const closeOpenButton = await wrapper.findByText('Close Gate');
    const lockUnlockButton = await wrapper.findByText('Lock Gate');
    const closeOpenDiv = await wrapper.findByText('Open');
    const lockUnlockDiv = await wrapper.findByText('Unlocked');
    closeOpenButton.click();
    lockUnlockButton.click();
    expect(closeOpenDiv.textContent === "Closed" && lockUnlockDiv.textContent === "Locked")
    rtl.cleanup();
  })
  it('displays "Closed" if the `closed` prop is `true` and "Open" if otherwise', ()=>{
    let wrapper = rtl.render(<Display locked={false} closed={false} />);
    expect(wrapper.queryByText('Closed'));
    rtl.cleanup();
    wrapper = rtl.render(<Display locked={false} closed={true} />);
    expect(wrapper.queryByText('Open'));
    rtl.cleanup();
  })
  it('displays "Locked" if the `locked` prop is `true` and "Unlocked" if otherwise', ()=>{
    let wrapper = rtl.render(<Display locked={false} closed={true} />);
    expect(wrapper.queryByText('Unlocked'));
    rtl.cleanup();
    wrapper = rtl.render(<Display locked={true} closed={true} />);
    expect(wrapper.queryByText('Locked'));
    rtl.cleanup();
  })
  it('when `locked` or `closed` use the `red-led` class', ()=>{
    let wrapper = rtl.render(<Display locked={true} closed={true} />);
    expect(wrapper.queryByText('Locked').classList.contains('red-led'));
    expect(wrapper.queryByText('Closed').classList.contains('red-led'));
    rtl.cleanup();
  })
  it('when `unlocked` or `open` use the `green-led` class', ()=>{
    let wrapper = rtl.render(<Display locked={false} closed={false} />);
    expect(wrapper.queryByText('Unlocked').classList.contains('green-led'));
    expect(wrapper.queryByText('Open').classList.contains('green-led'));
    rtl.cleanup();
  })
})