import { characterModel } from "@/entities/character";
import { characterService } from "@/shared/api/character";

export const remove = async () => {
  if (characterModel.store.active) {
    const id = characterModel.store.active.id;
    await characterService.remove(id);
    characterModel.store.removeById(id);
    characterModel.store.active = null;
  }
};