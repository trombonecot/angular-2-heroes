import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';

import { Hero } from './hero';


@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 20) // 2 seconds
        );
    }

    getHero(id: number) {
        return this.getHeroes()
                .then(heroes => heroes.find(hero => hero.id === id));
    }
}
