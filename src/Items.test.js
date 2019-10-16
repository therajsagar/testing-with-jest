import React from 'react';
import { create } from 'react-test-renderer';
import Items from './Component/Items';

describe(`ItemList Test Suite`, () => {
  it('renders correctly when there are no items', () => {
    const tree = create(<Items />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when there is one item', () => {
    const items = ['one'];
    const tree = create(<Items items={items} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when there are multiple items', () => {
    const items = ['one', 'two', 'three'];
    const tree = create(<Items items={items} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
