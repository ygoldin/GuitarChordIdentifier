import { Fret } from "./Fret"
import { GuitarString, allGuitarStrings } from "./GuitarString";

describe('Fret', () => {
    it('negative fret number', () => {
        expect(() => new Fret(-1, [])).toThrow();
    });

    it('out of order strings', () => {
        const guitarStrings = [GuitarString.lowE, GuitarString.highE];
        expect(() => new Fret(1, guitarStrings)).toThrow();
    })

    it('duplicate strings', () => {
        const guitarStrings = [GuitarString.A, GuitarString.A];
        expect(() => new Fret(1, guitarStrings)).toThrow();
    })

    it('all strings', () => {
        const guitarStrings = allGuitarStrings();
        const fret = new Fret(1, guitarStrings);
        expect(fret.isBarred()).toBeTruthy();
        expect(fret.isEmpty()).toBeFalsy();
    })

    it('no strings', () => {
        const fret = new Fret(1, []);
        expect(fret.isBarred()).toBeFalsy();
        expect(fret.isEmpty()).toBeTruthy();
    })
});