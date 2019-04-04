import React from 'react';
import { Dimmer, Segment } from 'semantic-ui-react';

class InfoComponent extends React.Component {
  render() {
    return (
      <Dimmer active={this.props.activeInfoWindow} onClick={this.props.handleCloseInfo} page>
        <Segment className="info-segment" inverted>
          <h2>ABOUT</h2>
          <div>This web application was created to bring you closer to the knowledge of the red planet - Mars. It uses <span><a href="https://api.nasa.gov/api.html#MarsPhotos">NASA Mars Rover Photo API</a></span> designed to collect image data gathered by Curiosity, Opportunity and Spirit rovers on Mars and maintained by <span><a href="https://github.com/chrisccerami/mars-photo-api">Chris Cerami</a></span>.</div>
          <h3>How to use?</h3>
          <div>The application provides you a sheet form. Please set your date and select a camera type (Remember! Curiosity first day on Mars is August 6, 2012 and rover is still active). If everything is correct, click Get Images button and you should receive proper photos. Clicking on chosen image opens it in higher resolution. Clicking anywhere else closes this window.</div>
          <h3>About images</h3>
          <div>Curiosity practically uses 7 camera types. In this application, I do not allow usage of CHEMCAM (Chemistry and Camera Complex) and MARDI (Mars Descent Imager), because photos are mostly unavailable or not very attractive. If you want check them, please visit official <span><a href="https://mars.nasa.gov/msl/">NASA JPL (Jet Propulsion Laboratory) website</a></span>. Please, keep in mind that all images are a raw footage. Most of them are unavailable, duplicated in one day/camera type or hard to properly read. </div>
          <h3>About Me</h3>
          <div>My name is Pawel Sworobowicz. I'm a web developer specializing especially in front-end and UX/UI technologies. If you like my work or need my services, feel free to contact me by <span><a href="https://www.linkedin.com/in/pawel-sworobowicz/">LinkedIn</a></span> or email: sworobowicz.pawel@gmail.com</div>
        </Segment>
      </Dimmer>
    );
  }
}

export default InfoComponent;