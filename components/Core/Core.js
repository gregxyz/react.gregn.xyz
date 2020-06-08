import React from 'react';
import Page from '../Page/Page';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';

const Components = {
  Page,
  Hero,
  Projects,
};

export default (blok) => {
  if (typeof Components[blok.component] !== 'undefined') {
    return React.createElement(Components[blok.component], { key: blok._uid, content: blok });
  }
};
