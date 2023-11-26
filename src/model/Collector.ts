import Position from "./Position";
import Creature from "./Creature";

class Collector {
  private collection: Creature[] = [];

  constructor(public name: string, public position: Position) {}

  catchCreature(creatures: Creature[], catchRange: number): void {
    const nearbyCreatures = this.findNearbyCreatures(creatures, catchRange);

    if (nearbyCreatures.length > 0) {
      const randomIndex = Math.floor(Math.random() * nearbyCreatures.length);
      const caughtCreature = nearbyCreatures[randomIndex];
      this.addToCollection(caughtCreature);
      console.log(`${this.name} caught a ${caughtCreature.species} nearby!`);
    } else {
      console.log(`${this.name} couldn't find any nearby Creatures.`);
    }
  }

  private findNearbyCreatures(creatures: Creature[], catchRange: number): Creature[] {
    return creatures.filter(creature => (this.calculateDistance(creature.position) <= catchRange));
  }

  private calculateDistance(creaturePosition: Position): number {
    const deltaX = this.position.x - creaturePosition.x;
    const deltaY = this.position.y - creaturePosition.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }

  private addToCollection(creature: Creature): void {
    this.collection.push(creature);
  }

  getCollection(): Creature[] {
    return this.collection;
  }
}

export default Collector;
