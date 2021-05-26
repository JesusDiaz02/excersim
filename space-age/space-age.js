const EARTH_SECONDS = 31557600;
const ORBITAL_AGE = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
};

export const age = (planet, seconds) => {
    const SECOND_AGE = (EARTH_SECONDS * ORBITAL_AGE[planet]);
    return Number((seconds / SECOND_AGE).toFixed(2));

}