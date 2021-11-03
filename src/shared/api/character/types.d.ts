import type { CharacterAge, SocialStatus } from "../content";

type Character = {
  id: number,
  name?: string,
  atributes?: Atribute[],
  conditions?: Condition[]
  age?: CharacterAge,
  socialStatus?: SocialStatus,
};