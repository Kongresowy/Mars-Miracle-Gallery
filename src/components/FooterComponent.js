import React from 'react';
import { Icon } from 'semantic-ui-react';

class FooterComponent extends React.Component {
  render() {
    return (
      <footer>
        <p>Kongresowy 2019</p>
        <a href="https://www.linkedin.com/in/pawel-sworobowicz/" >
          <Icon name="linkedin" size="huge" />
        </a>
        <a href="https://github.com/Kongresowy" >
          <Icon name="github square" size="huge" />
        </a>
      </footer>
    );
  }
}

export default FooterComponent;