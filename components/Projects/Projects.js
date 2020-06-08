import React from 'react';
import PropTypes from 'prop-types';

const Projects = (blok) => (
  <p>{ blok.content.component } component</p>
);

Projects.propTypes = {
  blok: PropTypes.shape({
    component: PropTypes.string,
  }),
};

export default Projects;
