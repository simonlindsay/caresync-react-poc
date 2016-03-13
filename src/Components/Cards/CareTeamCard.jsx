import React from 'react'
import {Link} from 'react-router'

import css from './CareTeamCard.css';

import Card from '../Helpers/CardContainer.jsx'
import CareTeamMember from './Modules/CareTeamMember.jsx';

export default class CareTeamCard extends React.Component {

  render() {

    return <Card className="careteam" type="Care team">

        <ul className="people">
          {[...this.props.careteam].map((member, i) =>
            <li className="person" key={i+1}>
              <CareTeamMember details={member} compact={true} />
            </li>
          )}
        </ul>

    </Card>
  }

}
