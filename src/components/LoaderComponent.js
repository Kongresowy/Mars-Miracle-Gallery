import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

class LoaderComponent extends React.Component {
  render() {
    return (
      <Dimmer active={this.props.activeLoader}>
        <Loader size='massive'>Loading ...</Loader>
      </Dimmer>
    );
  }
}

export default LoaderComponent;