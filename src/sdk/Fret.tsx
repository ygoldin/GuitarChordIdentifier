// Created by Yael Goldin

import { GuitarString, NUM_STRINGS, checkStringOrder } from "./GuitarString";

export class Fret {
    public readonly fretNumber: number;
    public readonly heldStrings: GuitarString[]; // which strings are held down

    constructor(fretNumber : number, heldStrings : GuitarString[]) {
        if (fretNumber < 1) {
            throw new Error('fret numbers must be positive');
        }
        checkStringOrder(heldStrings);

        this.fretNumber = fretNumber;
        this.heldStrings = heldStrings;
    }

    isBarred(): boolean {
        return this.heldStrings.length === NUM_STRINGS;
    }

    isEmpty(): boolean {
        return this.heldStrings.length === 0;
    }
}
