import React, { FC } from 'react';
import { Dropdown } from 'reactjs-dropdown-component';
import {getChordNames, getChordInfo} from '../sdk';

const chordNames = getChordNames();
const dropdownList = chordNames.map(chordName => ({label: chordName, value: getChordInfo(chordName)}));

export const ChordDropdown: FC = () => {
    
    const onChange = (item, name) => {
        console.log(item);
        console.log(name);
    }

    return <Dropdown
        name="chord"
        title="Select chord"
        searchable={["Search for chord", "No matching chord"]}
        list={dropdownList}
        onChange={onChange}
    />;
}
