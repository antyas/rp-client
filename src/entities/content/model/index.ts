import { randomElement } from "@/shared/lib/random";
import { pinia } from "@/shared/lib/store";
import { useStore } from "./store";

export * as constants from "./constants";

export const store = useStore(pinia);

export function getAge(id: number) {
  return store.ages.find(age => age.id === id) ?? randomElement(store.ages);
}

export function getSocialStatus(id: number) {
  return store.statuses.find(status => status.id === id) ?? randomElement(store.statuses);
}