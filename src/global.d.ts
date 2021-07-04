export { };

declare global {
  type CharacterAtributes = {
    strength: number,
    perception: number,
    endurance: number,
    charisma: number,
    intelligence: number,
    agility: number,
    luck: number
  };

  type CharacterCondition = {
    health: number,
    magicka: number,
    fatigue: number,
  }

  type CharacterClass = {
    id: number,
    name: string,
    attributes: CharacterAtributes,
    feature: string,
  };

  type CharacterRace = {
    id: number,
    name: string,
    attributes: CharacterAtributes,
    condition: CharacterCondition,
    feature: string,
  }

  type Character = {
    id: number,
    name: string,
    class: CharacterClass,
    race: CharacterRace,
  };
}