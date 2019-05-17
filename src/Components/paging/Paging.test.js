import React from 'react';
import { shallow } from 'enzyme';
import Paging from './Paging';

describe('Paging component', () => {
  it('renders Paging', () => {
    const wrapper = shallow(
      <Paging currentPage={1} totalPages={10} nextPage={jest.fn()}>
        <h1>hi</h1>
      </Paging>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('increments page on next button click', () => {
    const next = jest.fn();
    const wrapper = shallow(
      <Paging currentPage={2} totalPages={10} nextPage={next}>
        <h1>heyy</h1>
      </Paging>
    );

    wrapper.find('button').at(1).simulate('click');

    expect(next).toHaveBeenCalledWith(3);
  });

  it('decrements page on previous button click', () => {
    const next = jest.fn();
    const wrapper = shallow(
      <Paging currentPage={2} totalPages={10} nextPage={next}>
        <h1>hi</h1>
      </Paging>
    );
    wrapper.find('button').at(0).simulate('click');
    expect(next).toHaveBeenCalledWith(1);
  });

  it('does not display previous button on page 1', () => {
    const next = jest.fn();
    const wrapper = shallow(
      <Paging currentPage={1} totalPages={10} nextPage={next}>
        <h1>hi</h1>
      </Paging>
    );

    const buttons = wrapper.find('button');

    expect(buttons).toHaveLength(1);
    expect(buttons.at(0).text()).toEqual('Next Page');
  });

  it('does not display the next button when on last page', () => {
    const next = jest.fn();
    const wrapper = shallow(
      <Paging currentPage={10} totalPages={10} nextPage={next}>
        <h1>hi</h1>
      </Paging>
    );

    const buttons = wrapper.find('button');

    expect(buttons).toHaveLength(1);
    expect(buttons.at(0).text()).toEqual('Previous Page');
  });

    
})
;
