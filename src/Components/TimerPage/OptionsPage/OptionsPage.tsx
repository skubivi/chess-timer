import * as React from 'react'
import './optionsPage.scss'
import { LanguageType } from '../../../Hooks/useLanguage'
import { OptionsType, TimeMethod } from '../../../types'
import { Button, SelectChangeEvent, Switch, Typography } from '@mui/material'
import SelectComponent from '../../../Comon/SelectComponent'

type OptionsPageProps = {
    language: LanguageType
    options: OptionsType
    setOptions: (value: React.SetStateAction<OptionsType>) => void
    clearOptions: () => void
    nextPage: () => void
}

const OptionsPage: React.FC<OptionsPageProps> = ({language, options, setOptions, clearOptions, nextPage}) => {
    const methodLabel = language === 'ru' ? 'Временной метод' : 'Time method'
    const soundNotificationsLabel = language === 'ru' ? 'Звуковые оповещения' : 'Notifications sonores'
    const isUsingSpacebarLabel = language === 'ru' ? 'Использовать пробел для передачи хода' : 'Use spacebar for clock switches'
    const buttonLabel = language === 'ru' ? "Начать!" : "Go!"

    const englishBronsteinMethodText = "Bronstein timing method: if a player moves faster than in n seconds, then his playing time does not change."
    const englishFischerMethodText = "Fischer timing method: n seconds are added after every move."
    const russianBronsteinMethodText = "Метод Бронштейна: если игрок сделал ход быстрее, чем за n секунд, то его игровое время не тратится."
    const russianFischerMethodText = "Метод Фишера: n секунд добавляются после каждого хода"
    const getMethodText = (): string => {
        if (language === 'ru') {
            if (options.method === 'Bronstein') return russianBronsteinMethodText
            return russianFischerMethodText
        }
        if (options.method === 'Bronstein') return englishBronsteinMethodText
        return englishFischerMethodText
    }
    const methodText = getMethodText()

    const englishSoundNotificationText = "A sound notification will be emitted when clock is switched from a player to another one, when there is 30 or 10 seconds left and also when game is over."
    const russianSoundNotificationText = "Звук будет воспроизводиться, когда один из игроков заканчивает ход, когда его время составляет 30 или 10 секунд, а также когда его время закончится."
    const soundNotificationsText = language === 'ru' ? russianSoundNotificationText : englishSoundNotificationText

    const handleMethodChange = (e: SelectChangeEvent): void => {
        setOptions({...options, method: e.target.value as TimeMethod})
    }

    const handleSoundNotificationsChange = (): void => {
        setOptions(prev => ({...prev, soundNotifications: !prev.soundNotifications}))
    }

    const handleIsUsingSpacebarChange = (): void => {
        setOptions(prev => ({...prev, isUsingSpacebar: !prev.isUsingSpacebar}))
    }
    const handleButtonClick = (e: React.MouseEvent): void => {
        nextPage()
    }

    return (
        <div className='OptionsPage'>
            <div className='OptionsPage-SelectMethod'>
                <SelectComponent 
                    label={methodLabel} 
                    onChange={handleMethodChange} 
                    values={
                        [
                            ['Fischer', 'Fischer'],
                            ['Bronstein', 'Bronstein']
                        ]
                    } 
                    currentValue={options.method}
                />
            </div>
            <div className='OptionsPage-SelectText'>
                <Typography color="text.disabled">{methodText}</Typography>
            </div>
            <div className='OptionsPage-SoundLabel'>
                <Typography>{soundNotificationsLabel}</Typography>
            </div>
            <div className='OptionsPage-SoundSwitch'>
                <Switch 
                    checked={options.soundNotifications} 
                    onChange={handleSoundNotificationsChange}
                />
            </div>
            <div className='OptionsPage-SoundText'>
                <Typography color="text.disabled">{soundNotificationsText}</Typography>
            </div>
            <div className='OptionsPage-SpacebarLabel'>
                <Typography>{isUsingSpacebarLabel}</Typography>
            </div>
            <div className='OptionsPage-SpacebarSwitch'>
                <Switch 
                    checked={options.isUsingSpacebar} 
                    onChange={handleIsUsingSpacebarChange}
                />
            </div>
            <div className='OptionsPage-Button'>
                <Button variant='outlined' fullWidth={true} onClick={handleButtonClick}>{buttonLabel}</Button>
            </div>
        </div>
    )
}

export default OptionsPage