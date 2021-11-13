const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = function (moves) {
  let position = [0, 0];

  for (direction of moves) {
    switch (direction) {
      case 'east':
        position[0] += 1;
        break;
      case 'west':
        position[0] -= 1;
        break;
      case 'north':
        position[1] += 1;
        break;
      case 'south':
        position[1] -= 1;
        break;
      default:
        console.log("Error. Input is not a direction. Please re-enter the directions");
        position[0] = 0;
        position[1] = 0;
        return position;
    }
  }
  return position;
}

console.log(finalPosition(moves));