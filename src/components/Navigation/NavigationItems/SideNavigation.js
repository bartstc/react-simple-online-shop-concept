import React from 'react';
import '../Navigation.scss';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import PropTypes from 'prop-types';

import NavigationItem from './NavigationItem';

const femaleCategories = [
  {
    category: 'female',
    content: 'Women',
    linkType: 'main'
  },
  {
    category: 'women-coats',
    content: 'Coats'
  },
  {
    category: 'women-jackets',
    content: 'Jackets',
  },
  {
    category: 'women-suits',
    content: 'Suits',
  },
  {
    category: 'women-shirts',
    content: 'Shirts',
  },
  {
    category: 'women-t-shirts',
    content: 'T-shirts',
  },
  {
    category: 'women-shoes',
    content: 'Shoes',
  },
  {
    category: 'women-hats',
    content: 'Hats',
  },
  {
    category: 'male',
    content: 'Men',
    linkType: 'main'
  },
  {
    category: 'men-coats',
    content: 'Coats',
  },
  {
    category: 'men-jackets',
    content: 'Jackets',
  },
  {
    category: 'men-suits',
    content: 'Suits',
  },
  {
    category: 'men-shirts',
    content: 'Shirts',
  },
  {
    category: 'men-t-shirts',
    content: 'T-shirts',
  },
  {
    category: 'men-shoes',
    content: 'Shoes',
  },
  {
    category: 'men-hats',
    content: 'Hats',
  },
];

const sideNavigation = (props) => (
  <nav className="side-navigation">
    <ul className="side-navigation-list">
      {femaleCategories.map(femaleCategory => {
        const { category, linkType, content } = femaleCategory;

        return (
          <NavigationItem
            key={category}
            clicked={() => props.filterProducts(category)}
            linkType={linkType}
            link={`/productlist/${category}`}>
            {content}
          </NavigationItem>
        )
      })}
      {props.children}
    </ul>
  </nav>
);

sideNavigation.propTypes = {
  filterProducts: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    filterProducts: (category) => dispatch(actions.filterProducts(category))
  }
};

export default connect(null, mapDispatchToProps)(sideNavigation);