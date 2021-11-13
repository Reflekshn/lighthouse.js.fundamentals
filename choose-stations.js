// Array of stations to analyze
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Pizza Hill Building', 18, 'school']
];

// Final array of valid Voting Stations
let votingStations = [];

// Function that will iterate through the list of stations
// and return and array of valid voting stations
const chooseStations = function(stations) {
  let validStations = [];

  // Iterate through the list of stations
  for (let station of stations) {
    // Check to see if they meet the proper requirements
    if (station[1] >= 20) {
      if (station[2] === 'school' || station[2] === 'community centre') {
        // If requirements are met, add location to validStations list
        validStations.push(station[0]);
      }
    }
  }
  return validStations;
}

votingStations = chooseStations(stations);
console.log(votingStations);
