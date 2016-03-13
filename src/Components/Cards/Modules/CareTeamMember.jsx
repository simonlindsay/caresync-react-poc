import React from 'react'
import css from './CareTeamMember.css'

export default class CareTeamMember extends React.Component {

  render() {

    var photoPartial = (this.props.details.provider.photoURL)
                          ? <img src={this.props.details.provider.photoURL} className="photo"  />
                          : <div className="photo" >{ this.props.details.provider.firstName.substring(0,1) + this.props.details.provider.lastName.substring(0,1)}</div>;

    var cx = (this.props.compact) ? "provider compact" : "provider";


    return <div className={cx}>

      <div className="avatar">
        {photoPartial}
      </div>

      <div className="details">
        <p className="name">
          { this.props.details.provider.firstName }
          { this.props.details.provider.lastName }
          { this.props.details.provider.credentials }
        </p>
        <p className="role">
          { this.props.details.provider.role }
        </p>
      </div>

    </div>
  }

}
