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

  type Item = {
    name: string,
    value: number,
  }

  type Atribute = {
    name: string,
    value: number,
    skills: Item[]
  }

  // type Atributes = {
  //   physique?: Atribute,
  //   control?: Atribute,
  //   mind?: Atribute,
  //   instincts?: Atribute,
  //   soul?: Atribute,
  // }

  // type Conditions = {
  //   health?: Item,
  //   magicka?: Item,
  //   stamina?: Item,
  //   fatigue?: Item,
  //   intelligence?: Item,
  //   cuteness?: Item,
  //   immunity?: Item,
  //   capacity?: Item,
  //   meleeDamage?: Item,
  // }

  type CharacterAge = {
    id: number,
    name: string,
    pointsPerLevel: number,
    startPoints: CalcValue,
    condition?: Condition,
  }

  type CharacterSocialStatus = {
    id: number,
    name: string,
    initialCapital: CalcValue,
  }

  type Character = {
    id: number,
    name?: string,
    atributes?: Atribute[],
    conditions?: Condition[]
    age?: CharacterAge,
    socialStatus?: CharacterSocialStatus,
  };
}