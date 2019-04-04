import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <Header as='h1'>Mars Miracle Gallery</Header>
        <Icon className="info-icon" name="info circle" size="huge" onClick={this.props.handleOpenInfo} />
      </header>
    );
  }
}

export default HeaderComponent;