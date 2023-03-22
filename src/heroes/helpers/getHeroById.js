import { heroes } from "../datos/heroes"

export const getHeroById = ( id ) => {
  return heroes.find( hero => hero.id === id );
}
