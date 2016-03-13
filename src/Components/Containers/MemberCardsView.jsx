import React from 'react'
import {Link} from 'react-router'

import css from './MemberCardsView.css';

// get components
import CareTeamCard from '../Cards/CareTeamCard.jsx'
import GoalCard from '../Cards/GoalCard.jsx'
import AppointmentCard from '../Cards/AppointmentCard.jsx'

// grab data from json files
import memberData from '../../Data/members.json'
import careTeamData from '../../Data/care-team.json'
import providerData from '../../Data/providers.json'
import csrData from '../../Data/csrs.json'
import goalData from '../../Data/goal-cards.json'
import eventData from '../../Data/events.json'

export default class MemberCardsView extends React.Component {

  data(memberId) {
    return {

      members: memberData,
      memberId: memberId,

      // load goal data for member. If no goal data for member reference set to []
      goals: goalData[memberId] ? goalData[memberId]["goals"] : [],

      // load event/appointment data for member.
      // also use providerId ad csrID to pull in data from providerData and csrData json files
      events: eventData[memberId] ? eventData[memberId]["events"].map(function(obj){
        if (obj.careteam.type == "Provider")  {
          obj.careteam.provider = providerData[obj.careteam.providerId]
        }
        if (obj.careteam.type == "CSR" )  {
          obj.careteam.provider = csrData[obj.careteam.csrId]
        }
        return obj
      }) : [],

      // load care team data for member.
      // also use providerId ad csrID to pull in data from providerData and csrData json files
      careteam: careTeamData[memberId] ? careTeamData[memberId]["careteam-members"].map(function(obj){
        if (obj.type == "BillingProvider" || obj.type == "CommunityProvider")  {
          obj.provider = providerData[obj.providerId]
        }
        if (obj.type == "Caresync" )  {
          obj.provider = csrData[obj.csrId]
        }
        return obj
      }) : []
    }
  }

  render() {

    let { params } = this.props
    let memberId = (params && params['member'] && parseInt(params['member'])) || null;
    //
    var data = this.data(memberId);

    return <div>
              <nav>
                <ul>
                  <li><Link to='/'>Styleguide</Link></li>
                  {[...data.members].map((member, i) =>
                    <li key={i+1} ><Link to={"member/"+member.id} activeClassName="v-link-active">{member.name}</Link></li>
                  )}
                </ul>
              </nav>
              <main>

                <CareTeamCard careteam={data.careteam} />

                {[...data.events].map((appointment, i) =>
                  <AppointmentCard key={i+1} appointment={appointment}/>
                )}

                {[...data.goals].map((goal, i) =>
                  <GoalCard key={i+1} goal={goal}/>
                )}

              </main>
            </div>
  }

}
