import { characterService } from "@/shared/api/character";
import type { CharacterCreateFormData } from "./types";
import { contentModel } from "@/entities/content";
import { gameModel } from "@/entities/game";
import { characterModel } from "@/entities/character";

export const create = async (data: CharacterCreateFormData) => {
  const character = await characterService.create({
    name: data.name,
    age: contentModel.getAge(data.age.id),
    socialStatus: contentModel.getSocialStatus(data.socialStatus.id),
    gameCode: gameModel.store.code,
    atributes: [],
  });

  characterModel.store.list.push(character)
  characterModel.store.active = character;
}

export const getEmptyFormData = (): CharacterCreateFormData => ({
  name: '',
  age: contentModel.constants.defaultOption,
  socialStatus: contentModel.constants.defaultOption,
});