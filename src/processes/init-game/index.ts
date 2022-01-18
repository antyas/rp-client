// import { characterModel } from "@/entities/character";
// import { contentModel } from "@/entities/content";
// import { gameModel } from "@/entities/game";
// import { characterService } from "@/shared/api/character";
// import { contentService } from "@/shared/api/content";

// export const initGame = async (code: string) => {
//   gameModel.store.code = code;

//   const charactersPromise = characterService.fetch();
//   const contentPromise = contentService.fetchOne(code);

//   characterModel.store.list = await charactersPromise;

//   const content = await contentPromise;

//   if (content) {
//     contentModel.store.$patch(content);
//   }
// }