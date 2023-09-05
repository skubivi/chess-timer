import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import * as React from 'react'

type SelectComponentProps = {
    label: string
    onChange: (e: SelectChangeEvent) => void
    values: Array<[string, string]>
    currentValue: string
}

const SelectComponent: React.FC<SelectComponentProps> = ({label, onChange, values, currentValue}) => {
    const items = values.map((value, index) => (
        <MenuItem value={value[0]} key={index}>{value[1]}</MenuItem>
    ))
    return (
        <FormControl fullWidth={true}>
            <InputLabel>{label}</InputLabel>
            <Select
                value={currentValue}
                label={label}
                onChange={onChange}
            >
                {items}
            </Select>
        </FormControl>
    )
}

export default SelectComponent