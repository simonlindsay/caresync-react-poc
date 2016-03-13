import React from 'react'
import {Link} from 'react-router'
import css from './StyleGuideView.css'
import members from '../../Data/members.json'
import GoalCard from '../Cards/GoalCard.jsx'
import CareTeamCard from '../Cards/CareTeamCard.jsx'
import AppointmentCard from '../Cards/AppointmentCard.jsx'

export default class StyleGuideView extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        members: members,
        goal: { "id": 14, "title": "Keep your blood pressure and cholesterol under control.", "conditions": [ "Non-Insulin Dependent Diabetes" ], "tasks": [ "Check your feet daily for any possible sores or problem areas", "Take care of your teeth" ], "tracker": { "measurement": { "name": "Blood Pressure", "value": "139/95", "unit": "mm Hg", "date": "12/13/2015 15:45" }, "actions": [ "Add blood pressure measurement" ], "week": [ 1, 1, 1, 1, 1, 0, 0 ] } },
        careteam: [ { "type": "CommunityProvider", "providerId": 1, "provider": { "firstName": "Cristina", "lastName": "Balsera", "credentials": "M.D.", "role": "Specialist", "photoURL": "http://www.brandonkidneyclinic.com/Portals/777/web_content/content_images/DrBalsera.jpg", "practice": { "phone": "(813) 571-3777", "name": "Kidney Diseases & High Blood Pressure Clinic", "address": "510 Vonderburg Drive, Suite 208 Brandon, FL 33511" } } }, { "type": "BillingProvider", "providerId": 2, "provider": { "firstName": "Michael Paul", "lastName": "Gimness", "credentials": "M.D.", "role": "Family Medicine", "practice": { "phone": "(813) 567-5679", "address": "1703 Thonotosassa Rd Ste A Family Medical Specialists Of Florida, Plc Plant City, FL 33563" } } }, { "type": "CommunityProvider", "providerId": 3, "provider": { "firstName": "Angelo", "lastName": "Paola", "credentials": "M.D., F.A.C.S.", "role": "Specialist", "practice": { "phone": "(813) 685-0827", "address": "1601 W Timberlane Dr Ste 500 Plant City, FL 33566" } } }, { "type": "Caresync", "csrId": 1, "provider": { "firstName": "Amanda", "lastName": "Carangelo", "role": "Case Manager", "contact": { "phone": "(813) 658-3729" } } } ],
        appointment: { "id": 1, "type": "Appointment", "form": "Office Visit", "state": "Completed", "details": { "date": "8/07/2015", "time": "11:30 am", "address": "26 Broadway, New York, NY 10004" }, "purpose": "Recheck of hypertension, recheck of hyperlipidemia, recheck of new onset diabetes type II, follow up for laboratory tests, and transition into care.", "related": { "conditions": [ "Diabetes Mellitus", "Diabetic Nephropathy", "Elevated Homocysteine", "Hyperlipidemia" ], "medication": [] }, "careteam": { "type": "Provider", "providerId": 2, "notes": "", "provider": { "firstName": "Michael Paul", "lastName": "Gimness", "credentials": "M.D.", "role": "Family Medicine", "practice": { "phone": "(813) 567-5679", "address": "1703 Thonotosassa Rd Ste A Family Medical Specialists Of Florida, Plc Plant City, FL 33563" } } } },
        place: { address: "2818 Cypress Ridge Blvd, Wesley Chapel" }
      }
  }

  onInputsChange = (stateName, e) => {
    this.setState({
      [stateName] : JSON.parse(e.target.value)
    })
  }

  render() {

    var {member, goal, careteam, appointment} = this.state;

    return <div>

            <h1>Scenarios</h1>

            <ul>
              {[...members].map((member, i) =>
                <li key={i+1}>
                  <Link to={"member/"+member.id}>{ member.name }</Link>
                </li>
              )}
            </ul>

            <h1>Components</h1>

            <section>
              <div className="details">
                <h1>Goal Card</h1>
                <p>The goal card&hellip;</p>
                <textarea defaultValue={ JSON.stringify(goal, null, 2)} onChange={this.onInputsChange.bind(this, "goal")}></textarea>
              </div>
              <div className="component">
                <GoalCard goal={goal} />
              </div>
            </section>

            <section>
              <div className="details">
                <h1>Care Team Card</h1>
                <p>The care team card&hellip;</p>
                <textarea defaultValue={ JSON.stringify(careteam, null, 2)} onChange={this.onInputsChange.bind(this, "careteam")}></textarea>
              </div>
              <div className="component">
                <CareTeamCard careteam={careteam} />
              </div>
            </section>

            <section>
              <div className="details">
                <h1>Appointment Card</h1>
                <p>The appointment card&hellip;</p>
                <textarea defaultValue={ JSON.stringify(appointment, null, 2)} onChange={this.onInputsChange.bind(this, "appointment")}></textarea>
              </div>
              <div className="component">
                <AppointmentCard appointment={appointment} />
              </div>
            </section>


          </div>
  }

}
