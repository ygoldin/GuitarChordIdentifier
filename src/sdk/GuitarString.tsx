// Created by Yael Goldin

export const NUM_STRINGS = 6;

export enum GuitarString {
    highE = 1,
    B,
    G,
    D,
    A,
    lowE
}

export const allGuitarStrings = () => [GuitarString.highE, GuitarString.B, GuitarString.G, GuitarString.D, GuitarString.A, GuitarString.lowE];

export const checkStringOrder = (guitarStrings: GuitarString[]): void => {
    for (let i = 0; i < guitarStrings.length - 1; i++) {
        if (guitarStrings[i] >= guitarStrings[i+1]) {
            throw new Error('guitar strings must be provided in order from highest string (1) to lowest (6)');
        }
    }
}
