import React from 'react'
import {Link} from 'react-router'

import css from './GoalCard.css'

import Card from '../Helpers/CardContainer.jsx'

export default class GoalCard extends React.Component {

  data() {
    return {
      // labels to use for the weekly tracker icons
      dayIndexes: ["M", "T", "W", "T", "F", "S", "S"]
    }
  }

  render() {

    var data = this.data();


    // measurement partial
    var measurementPartial = null;
    if(this.props.goal.tracker.measurement) {
      measurementPartial = <div>
                              <ul>
                                <li>{ this.props.goal.tracker.measurement.name }</li>
                                <li>{ this.props.goal.tracker.measurement.value + this.props.goal.tracker.measurement.unit }</li>
                                {
                                  (this.props.goal.tracker.measurement.date)
                                    ? <li>{ this.props.goal.tracker.measurement.date }</li>
                                    : ""
                                }
                              </ul>
                            </div>
    }

    // action partial
    var actionPartial = <ul className="actions">
                          {[...this.props.goal.tracker.actions].map((action, i) =>
                            <li key={i+1} className={"action index-"+i}>
                              <a>{action}</a>
                            </li>
                          )}
                        </ul>

    return <Card className="goal" type="Goal" title={this.props.goal.title}>

        <h1>Goal Card</h1>

        <ul>
          {[...this.props.goal.tasks].map((task, i) =>
            <li key={i+1}>{task}</li>
          )}
        </ul>

        <div className="tracker">
          <h3>
            Tracker
            <ul className="week">
              {[...this.props.goal.tracker.week].map((day, i) =>
                <li key={i+1} className={"day m-"+day}>{data.dayIndexes[i]}</li>
              )}
            </ul>
          </h3>

          { this.props.goal.tracker.title }

          {measurementPartial}

          {actionPartial}

        </div>

    </Card>
  }

}
