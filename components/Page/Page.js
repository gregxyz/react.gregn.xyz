import React from 'react';
import Components from '../Core/Core';

const Page = (props) => {
  const component = props;
  return (
    <div>
      { component.content.body.map((blok) => Components(blok)) }
    </div>
  );
};

export default Page;
