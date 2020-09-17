import React from 'react';
import renderer from 'react-test-renderer';
import { renderWithTheme } from '../../../tests/testUtils';
import RestaurantCard from '..';

const props = {
  name: 'Kitchen',
  thumb: 'https://www.zomato.com/img',
  address: 'Ponsonby, Auckland',
  url: 'https://www.zomato.com/',
};

it('Matches the snapshots', () => {
  const component = renderer.create(<RestaurantCard {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly', () => {
  const { getByText } = renderWithTheme(<RestaurantCard {...props} />);

  expect(getByText(props.name)).toBeInTheDocument();
});
