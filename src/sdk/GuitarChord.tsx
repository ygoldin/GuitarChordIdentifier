// Created by Yael Goldin

import { Fret } from "./Fret";
import { GuitarString } from "./GuitarString";

export type GuitarChord = {
    frets: Fret[],
    unplayedStrings: GuitarString[],
};
