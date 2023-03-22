import { HeroCard } from './';
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from 'react';

export const HeroList = ({publisher}) => {

  const heroeDC = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {
        heroeDC.map( hero => (
            <HeroCard
              key={hero.id}
                {...hero}
            />
      ))}
    </div>
  );
}
