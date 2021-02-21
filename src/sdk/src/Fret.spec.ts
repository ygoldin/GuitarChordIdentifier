import { Fret } from "./Fret"

describe('Fret', () => {
    it('negative fret number', () => {
        expect(() => new Fret(-1, [])).toThrow();
    })
})