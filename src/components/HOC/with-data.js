import React, { Component } from 'react';

import Loader from '../Loader';

const withData = (View) => {
  return class extends Component {

    state = {
      data: null
    };

    componentDidMount() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data
          });
        });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Loader />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
