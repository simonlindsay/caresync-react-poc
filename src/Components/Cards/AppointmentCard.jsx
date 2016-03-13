import React from 'react'
import {Link} from 'react-router'

import css from './AppointmentCard.css'

import Card from '../Helpers/CardContainer.jsx'
import CareTeamMember from './Modules/CareTeamMember.jsx'
import GoogleMap from '../Helpers/GoogleMap.jsx'

export default class AppointmentCard extends React.Component {

  data() {
    return {
      person: this.props.appointment.careteam,
      title: this.props.appointment.details.date + " " + this.props.appointment.details.time
    }
  }

  render() {

    var careteamPartial = null;
    if(this.props.appointment.careteam.provider) {
      careteamPartial = <CareTeamMember details={this.props.appointment.careteam} />
    }

    var purposePartial = null;
    if(this.props.appointment.purpose) {
      purposePartial = <dl className="purpose">
                          <dt className="bold">Purpose</dt>
                          <dd>{ this.props.appointment.purpose }</dd>
                        </dl>
    }

    var locationPartial = null;
    if(this.props.appointment.details.address) {
      locationPartial = <dl className="address" >
                          <dt className="bold">Location</dt>
                          <dd>{this.props.appointment.details.address}</dd>

                          <GoogleMap address={this.props.appointment.details.address} />
                        </dl>
    }

    var ctaPartial = null;
    if(this.props.appointment.form==='Office Visit') {
      ctaPartial = <button>Call Practice</button>;
    }

    return <Card className="appointment" type="Upcoming Appointment" title={this.props.title}>

              {careteamPartial}

              {purposePartial}

              {locationPartial}

              {ctaPartial}

          </Card>
  }

}
