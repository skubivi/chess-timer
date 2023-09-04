import * as React from 'react'
import { Box, Button, Dialog, DialogTitle, List, ListItem, ListItemText, Slider } from '@mui/material'
import { LanguageType } from '../../Hooks/useLanguage'
import { useState } from 'react'

export type TimeType = {
    seconds: number,
    minutes: number
}
export type ModalDialogProps = {
    open: boolean
    selectedTime: TimeType | null
    onClose: (value: TimeType | null) => void
    language: LanguageType
}

const ModalDialog: React.FC<ModalDialogProps> = ({open, selectedTime, onClose, language}) => {
    const handleClose = () => {
        onClose(selectedTime)
    }
    const handleButtonClick = (seconds: number, minutes: number) => {
        onClose({seconds, minutes})
    }
    
    const [minutes, setMinutes] = useState(10)
    const [seconds, setSeconds] = useState(5)

    const title = language === 'ru' ? 'Создать игру' : 'Create a game'
    const minutesLabel = (language === 'ru' ? 'Минут на партию: ' : 'Minutes per side: ') + minutes
    const secondsLabel = (language === 'ru' ? 'Добавление секунд на ход: ' : 'Increment in seconds: ') + seconds
    const buttonLabel = language === 'ru' ? 'Начать игру' : 'Start game'
    return (
        <Dialog open={open} onClose={handleClose}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '300px', height: '450px'}}>
                <DialogTitle sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', padding: '0'}}>{title}</DialogTitle>
                <List sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '250px', padding: '0'}}>
                    <ListItem sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <ListItemText>{minutesLabel}</ListItemText>
                        <Slider 
                            sx={{width: '90%'}}
                            value={minutes}
                            onChange={(e, newValue, activeThumb) => {
                                setMinutes(newValue as number)
                            }}
                            step={1}
                            min={1}
                            max={60}
                        />
                    </ListItem>
                    <ListItem sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <ListItemText>{secondsLabel}</ListItemText>
                        <Slider
                            sx={{width: '90%'}}
                            value={seconds}
                            onChange={(e, newValue, activeThumb) => {
                                setSeconds(newValue as number)
                            }}
                            step={1}
                            min={1}
                            max={30}
                        />
                    </ListItem>
                </List>
                <Button sx={{height: '100px', padding: '0'}} onClick={() => handleButtonClick(seconds, minutes)}>{buttonLabel}</Button>
            </Box>
        </Dialog>
    )
}

export default ModalDialog