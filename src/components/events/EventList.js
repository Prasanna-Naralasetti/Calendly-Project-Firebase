import React from 'react'
import EventSummary from './EventSummary'

function EventList ({events}) {
  return (
  
    <div className='event-list section'>
        {events && events.map(event => {
          return (
            <EventSummary event={event} key={event.id}/>
          )
        })}
       
      </div>
   
  )
}
export default EventList