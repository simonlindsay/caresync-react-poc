import React from 'react'
import css from './GoogleMap.css'

// you can get your own key at https://developers.google.com/maps/documentation/embed/
var browserKey = 'AIzaSyCqJHFVQI304o7geq7hfNigWd4XCapJl94'

export default class GoogleMap extends React.Component {

  getUrl() {
    var placeQueryString = this.props.address.replace(/\s/g, '+')
    return "https://www.google.com/maps/embed/v1/place?key="+browserKey+"&q="+placeQueryString
  }

  render() {
    return  <iframe
              frameBorder="0"
              src={this.getUrl()}
              allowFullScreen></iframe>
  }
}


// a slightly more advanced example of how to use props that includes type validation (you'll get an error if you try to pass in something that isn't a String), and also provides a default value if you forget to supply a value.
GoogleMap.propTypes = {
	address: React.PropTypes.string.isRequired
};

GoogleMap.defaultProps = {
  address: "26 Broadway, New York, NY"
};
