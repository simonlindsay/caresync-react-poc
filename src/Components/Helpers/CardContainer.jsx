import React from 'react'
import css from './CardContainer.css'

export default class CardContainer extends React.Component {

  render() {
    return <section className="card">
              <h2>{ this.props.type }</h2>
              <h1>{ this.props.title }</h1>
              <div className={this.props.className}>{ this.props.children }</div>
            </section>
  }

}

CardContainer.propTypes = {
	type: React.PropTypes.string,
  title: React.PropTypes.string
};

CardContainer.defaultProps = {
  type: "Card Type"
};
