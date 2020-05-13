import * as React from "react";
import EventList from '../events/EventList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import {compose} from 'redux'

class Dashboard extends React.Component {
   
  render() {
   const { events } = this.props;
    return (
      <div>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <EventList events={events} />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    events: state.event.events
  }
}

export default compose(connect(mapStateToProps),
//  firestoreConnect([
//   { collection: 'events'}
// ])
)(Dashboard)