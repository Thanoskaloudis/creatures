import Creature from "./Creature";
import Collector from "./Collector";

class World {
  private creatures: Creature[] = [];
  private collectors: Collector[] = [];

  addCreature(creature: Creature): void {
    this.creatures.push(creature);
  }

  addCollector(collector: Collector): void {
    this.collectors.push(collector);
  }

  getCreatures(): Creature[] {
    return this.creatures;
  }

  getCollectors(): Collector[] {
    return this.collectors;
  }
}

export default World;