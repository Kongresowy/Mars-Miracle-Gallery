import React from 'react';
import moment from 'moment';

import TitleComponent from './TitleComponent';
import FormComponent from './FormComponent';
import ImagesComponent from './ImagesComponent';

const API_KEY = "7bXJyxKXWViccqKcFIgR2kcjHwbKTTzb7EUyNIrK";

class App extends React.Component {
  state = {
    // paragraph quick info
    roverIsActive: '',
    // default inputs
    dateInput: '',
    cameraInput: '',
    // images array
    images: [],
    // form button disable
    correctDate: false,
    correctCamera: false,
    // paragraph about no photos
    moreThanZeroImages: true
  }

  componentDidMount = async () => {
    try {
      const data = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${API_KEY}`).then(data => data.json());
      let roverIsActive = data.photos[0].rover.status;
      this.setState({ roverIsActive });
    } catch (error) {
      console.error(error);
    };
  }

  handleChangeDate = (e) => {
    let dateInput = (e.target.value);
    let currentDate = moment(new Date()).format('YYYY-MM-DD');
    if (dateInput.length === 0 || dateInput > currentDate || dateInput < moment(new Date(2012, 7, 6)).format('YYYY-MM-DD') ) {
      this.setState({ correctDate: false });
    } else {
      this.setState({ dateInput, correctDate: true });
    }
  }

  handleChangeCamera = (e, { value }) => {
    value ? this.setState({cameraInput: value, correctCamera: true}) : this.setState({correctCamera: false});
  }

  getImages = async (e) => {
    const { dateInput, cameraInput } = this.state;
    try {
      const data = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${dateInput}&camera=${cameraInput}&api_key=${API_KEY}`).then(data => data.json());
      console.log(data); // Później do wywalenia
      this.setState({ images: data.photos });
      data.photos.length < 1 ? this.setState({moreThanZeroImages: false}) : this.setState({moreThanZeroImages: true})
    } catch (error) {
      console.error(error);
    };
  }

  render() {
    return (
      <div>
        <h1>NASA Miracle Gallery</h1>
        <TitleComponent roverIsActive={this.state.roverIsActive} />
        <FormComponent correctCamera={this.state.correctCamera} correctDate={this.state.correctDate} getImages={this.getImages} handleChangeDate={this.handleChangeDate} handleChangeCamera={this.handleChangeCamera} />
        <ImagesComponent images={this.state.images} moreThanZeroImages={this.state.moreThanZeroImages} />
      </div>
    );
  }
}

export default App;