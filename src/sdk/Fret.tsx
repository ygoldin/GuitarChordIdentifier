// Created by Yael Goldin

import { GuitarString } from "./GuitarString";

export type Fret = {
    fretNumber: number,
    heldStrings: GuitarString[], // which strings are held down
};
