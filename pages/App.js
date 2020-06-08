import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Components from '../components/Core/Core';
import Loader from '../components/Loader/Loader';

const query = gql`{
  PageItem(id: "home") {
    content {
      _uid
      component
      body
    }
  }
}`;

const App = () => (
  <div>
    <Query query={query}>
      { (result) => {
        if (result.loading) {
          return (
            <Loader />
          );
        }
        return (
          <div className="app">
            { Components(result.data.PageItem.content) }
          </div>
        );
      }}
    </Query>
  </div>
);

export default App;
