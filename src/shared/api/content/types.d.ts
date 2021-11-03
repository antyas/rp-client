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

export type GameContent = {
  ages: CharacterAge[],
  statuses: SocialStatus[],
}

export type GameContentMap = {
  [ket: string]: GameContent
}