export {};

declare global {
  type CharacterClass = {
    id: number,
    name: string,
    attributes: { 
      strength: number, 
      perception: number, 
      endurance: number, 
      charisma: number, 
      intelligence: number, 
      agility: number, 
      luck: number
    },
    feature: string,
  };  

  type CharacterRace = {
    id: number,
    name: string,
    attributes: { 
      strength: number, 
      perception: number, 
      endurance: number, 
      charisma: number, 
      intelligence: number, 
      agility: number, 
      luck: number
    },
    condition: { 
      health: number, 
      magicka: number, 
      fatigue: number, 
    },
    feature: string,
  }

  type Character = {
    id: number,
    name: string,
    class: CharacterClass,
    race: CharacterRace,
  };
}