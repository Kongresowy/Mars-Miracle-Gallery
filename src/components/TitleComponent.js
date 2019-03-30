import React from 'react';

class TitleComponent extends React.Component {
  render() {
    return(
      <div>
        <h2>Checkout what's going on mars...</h2>
        <p>Curiosity to fajny lazik. Popyla sobie po marsie i cyka zdjęcia. Aktualnie lazik jest {this.props.roverIsActive}.</p>
      </div>
    );
  }
}

export default TitleComponent;