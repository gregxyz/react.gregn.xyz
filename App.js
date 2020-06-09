import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Components from './components/Core/Core';
import Loader from './components/Loader/Loader';

const query = gql`{
  PageItem(id: "home") {
    content {
      _uid
      component
      body
    }
  }
}`;

function App() {
  const { loading, data } = useQuery(query);
  if (loading) {
    return (
      <Loader />
    );
  }
  return (
    <div className="app">
      { Components(data.PageItem.content) }
    </div>
  );
}

export default App;
