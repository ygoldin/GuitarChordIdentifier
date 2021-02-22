import { Fret } from "./Fret"
import { GuitarChord } from "./GuitarChord";
import { GuitarString, allGuitarStrings } from "./GuitarString";

describe('GuitarChord', () => {
    const fret1 = new Fret(1, []);
    const fret2 = new Fret(2, [GuitarString.A]);
    const fret1Barred = new Fret(1, allGuitarStrings());

    it ('no name', () => {
        expect(() => new GuitarChord('', [fret1], [])).toThrow();
    });

    it ('no fret', () => {
        expect(() => new GuitarChord('A', [], [])).toThrow();
    });

    it ('wrong order frets', () => {
        expect(() => new GuitarChord('A', [fret2, fret1], [])).toThrow();
    });

    it('wrong order unplayed strings', () => {
        expect(() => new GuitarChord('A', [fret1, fret2], [GuitarString.A, GuitarString.highE])).toThrow();
    });

    it('no played string', () => {
        expect(() => new GuitarChord('A', [fret1, fret2], allGuitarStrings())).toThrow();
    });

    it('normal chord', () => {
        expect(() => new GuitarChord('A', [fret1Barred, fret2], [GuitarString.lowE])).not.toThrow();
    })
});