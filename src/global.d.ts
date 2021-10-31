export { };

declare global {
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
}