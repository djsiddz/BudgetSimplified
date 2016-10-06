module.exports = {
  //show all events
  showEvents: (req, res) => {
    //create dummy events
    const events = [
      {name: 'Basketball', slug:'basketball', description: 'Throwing into a basket'},
      {name: 'Swimming', slug:'swimming', description: 'fastest fish'},
      {name: 'Weightlifting', slug:'weightlifting', description: 'lift heavy things'}
    ];
    //return a view with data
    res.render('pages/events', { events: events });
  },

  showSingle: (req, res) => {
    const event = { name: 'Basketball', slug:'basketball', description: 'Throwing into a basket.' };
    //return a view with data
    res.render('pages/single', { event: event });
  }
};
