// Created by Yael Goldin

import { Fret } from "./Fret";
import { GuitarString, checkStringOrder } from "./GuitarString";

export class GuitarChord {
    public readonly name: string;
    public readonly frets: Fret[];
    public readonly unplayedStrings: GuitarString[];

    constructor(name: string, frets: Fret[], unplayedStrings: GuitarString[]) {
        for (let i = 0; i < frets.length - 1; i++) {
            if (frets[i].fretNumber >= frets[i+1].fretNumber) {
                throw new Error('frets must be provided in increasing order');
            }
        }
        checkStringOrder(unplayedStrings);

        this.name = name;
        this.frets = frets;
        this.unplayedStrings = unplayedStrings;
    }

    toString(): string {
        let result = `${this.name} chord\n\n`;
        const heldStrings = 'Held Strings:\n';
        if (this.unplayedStrings.length > 0) {
            result += `Unplayed Strings: ${this.unplayedStrings}\n${heldStrings}`;
        } else {
            result += heldStrings;
        }
        this.frets.forEach(fret => {
            if (fret.isBarred()) {
                result += `Fret ${fret.fretNumber} barred\n`;
            } else {
                fret.heldStrings.forEach(heldString => {
                    result += `Fret ${fret.fretNumber}, string ${heldString}\n`
                })
            }
        })
        
        return result;
    }
};
