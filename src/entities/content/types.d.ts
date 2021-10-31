export type CharacterAge = {
  id: number,
  name: string,
  pointsPerLevel: number,
  startPoints: CalcValue,
  condition?: Condition,
}

export type SocialStatus = {
  id: number,
  name: string,
  initialCapital: CalcValue,
}