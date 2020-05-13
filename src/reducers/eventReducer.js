const initState = {
  events: [
    { id: '1', title: 'help me', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'vey tough project', content: 'blah blah blah' }
  ]
}

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      console.log('create event', action.event);
      return state;
    case 'CREATE_EVENT_ERROR':
      console.log('create project error', action.err)
      return state
    default:
      return state;
  }
};

export default eventReducer;