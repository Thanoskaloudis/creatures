import Position from "./Position";

class Creature {
  constructor(public species: string, public family: string, public position: Position) {}
}

export default Creature;