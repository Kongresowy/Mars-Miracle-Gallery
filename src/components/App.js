import React from 'react';
import moment from 'moment';
import { Pagination, Icon } from 'semantic-ui-react';

import TitleComponent from './TitleComponent';
import FormComponent from './FormComponent';
import ImagesComponent from './ImagesComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LoaderComponent from './LoaderComponent';
import InfoComponent from './InfoComponent';

const API_KEY = "7bXJyxKXWViccqKcFIgR2kcjHwbKTTzb7EUyNIrK";

class App extends React.Component {
  state = {
    dateInput: '',
    cameraInput: '',
    images: [],
    correctDate: false,
    correctCamera: false,
    moreThanZeroImages: true,
    activePage: 1,
    activeLoader: false,
    activeInfoWindow: false
  }

  myRef = React.createRef();

  handleChangeDate = (e) => {
    let dateInput = (e.target.value);
    let currentDate = moment(new Date()).format('YYYY-MM-DD');
    if (dateInput.length === 0 || dateInput > currentDate || dateInput < moment(new Date(2012, 7, 6)).format('YYYY-MM-DD')) {
      this.setState({ correctDate: false });
    } else {
      this.setState({ dateInput, correctDate: true });
    }
  }

  handleChangeCamera = (e, { value }) => {
    value ? this.setState({ cameraInput: value, correctCamera: true }) : this.setState({ correctCamera: false });
  }

  getImages = async (e) => {
    window.scrollTo(0, this.myRef.current.offsetTop);
    const { dateInput, cameraInput } = this.state;
    try {
      this.setState({ activeLoader: true });
      document.body.style.overflow = "hidden";
      const data = await fetch(`https://cors-anywhere.herokuapp.com/https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${dateInput}&camera=${cameraInput}&api_key=${API_KEY}`).then(data => data.json());
      this.setState({ images: data.photos, activePage: 1, activeLoader: false });
      data.photos.length < 1 ? this.setState({ moreThanZeroImages: false }) : this.setState({ moreThanZeroImages: true });
      document.body.style.overflow = "auto";
    } catch (error) {
      console.error(error);
    };
  }

  handlePaginationChange = (e, { activePage }) => {
    this.setState({
      activePage
    });
  };

  handleOpenInfo = () => this.setState({ activeInfoWindow: true });

  handleCloseInfo = () => this.setState({ activeInfoWindow: false });

  render() {
    const { correctCamera, correctDate, images, moreThanZeroImages, activePage, activeLoader, activeInfoWindow } = this.state;
    const maxNum = 9;
    const imagesForPagination = images.slice((activePage - 1) * maxNum, activePage * maxNum);

    return (
      <div className="main-div">

        <HeaderComponent ref={this.myRef} />
        <div className="main-content">
          <div className="title-form-div">
            <TitleComponent />
            <FormComponent correctCamera={correctCamera} correctDate={correctDate} getImages={this.getImages} handleChangeDate={this.handleChangeDate} handleChangeCamera={this.handleChangeCamera} />
          </div>
          <ImagesComponent images={imagesForPagination} moreThanZeroImages={moreThanZeroImages} />
          <Pagination ellipsisItem={null} firstItem={null} lastItem={null}
            prevItem={images.length < 10 ? null : { content: <Icon name="angle left" />, icon: true }}
            nextItem={images.length < 10 ? null : { content: <Icon name="angle right" />, icon: true }}
            activePage={activePage}
            onPageChange={this.handlePaginationChange}
            totalPages={Math.ceil(images.length / 9)}
          />
        </div>
        <FooterComponent />
        <Icon className="info-icon" name="info circle" size="huge" onClick={this.handleOpenInfo} />
        <InfoComponent activeInfoWindow={activeInfoWindow} handleCloseInfo={this.handleCloseInfo} />
        <LoaderComponent activeLoader={activeLoader} />

      </div>
    );
  }
}

export default App;