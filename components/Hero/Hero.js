import React from 'react';
import PropTypes from 'prop-types';

const Hero = (blok) => (
  <div>
    <p>{ blok.content.component } component</p>
  </div>
);

Hero.propTypes = {
  blok: PropTypes.shape({
    component: PropTypes.string,
  }),
};

export default Hero;
