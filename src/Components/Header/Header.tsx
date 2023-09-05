import * as React from 'react'
import './header.scss'
import { FormGroup, FormControlLabel, Switch, FormControl, InputLabel, MenuItem, Typography } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { LanguageType } from '../../Hooks/useLanguage';

type HeaderProps = {
    darkMode: boolean
    changeDarkMode: () => void
    language: LanguageType
    setLanguage: (language: LanguageType) => void
    clearTime: () => void
}

const Header: React.FC<HeaderProps> = ({darkMode, changeDarkMode, language, setLanguage, clearTime}) => {
    const labelTheme = language === 'ru' ? 'Тема': 'Theme'
    const labelLanguage = language === 'ru' ? 'Язык': 'Language'
    const handleChange = (e: SelectChangeEvent) => {
        setLanguage(e.target.value as LanguageType)
    }

    return (
        <div className='Header'>
            <div className='Header-Wrapper'>
                <Typography variant='h5' className='Header-Wrapper-Typography'><p onClick={e => clearTime()}>Chess Timer</p></Typography>
                <div className='Header-Wrapper-Block'>
                    <div className="Header-Wrapper-Block-FormControl">
                        <FormControl fullWidth={true}>
                            <InputLabel id="select-language-label">{labelLanguage}</InputLabel>
                            <Select
                                labelId='select-language-label'
                                value={language}
                                label={labelLanguage}
                                onChange={handleChange}
                            >
                                <MenuItem value='ru'>Русский</MenuItem>
                                <MenuItem value='en'>English</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='Header-Wrapper-Block-FormGroup'>
                        <FormGroup>
                            <FormControlLabel 
                                label={labelTheme}
                                labelPlacement='start'
                                control={
                                    <Switch 
                                        checked={darkMode} 
                                        onChange={changeDarkMode}
                                        checkedIcon={
                                            <NightsStayIcon
                                                sx={{
                                                    transform: 'translateX(6px) translateY(-3px)'
                                                }}
                                            />
                                        }
                                    />
                                }
                            />
                        </FormGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header