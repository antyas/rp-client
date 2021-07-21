export { };

declare global {
  type GameContent = {
    name: string,
    code: string,
    classes: CharacterClass[],
    races: CharacterRace[],
    ages: CharacterAge[],
    socialStatuses: CharacterSocialStatus[],
  } 

  type CalcValue = {
    base: number,
    dice: number,
    sign: 'plus' | 'minus' | 'both',
    count?: number,
  }

  type ContentSelectOption = {
    name: string,
    id: number,
  }

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
    health?: number,
    magicka?: number,
    fatigue?: number,
    cuteness?: number, 
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

  type CharacterAge = {
    id: number,
    name: string,
    pointsPerLevel: number,
    startPoints: CalcValue,
    condition?: CharacterCondition,
    feature?: string,
  }

  type CharacterSocialStatus = {
    id: number,
    name: string,
    glory: CalcValue,
    initialCapital: CalcValue,
  }

  type Character = {
    id: number,
    name?: string,
    class?: CharacterClass,
    race?: CharacterRace,
    age?: CharacterAge,
    socialStatus?: CharacterSocialStatus,
  };
}