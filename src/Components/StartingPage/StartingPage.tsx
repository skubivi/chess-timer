import * as React from 'react'
import './startingPage.scss'
import { LanguageType } from '../../Hooks/useLanguage'
import { Button } from '@mui/material'
import { useState } from 'react'
import ModalDialog from './ModalDialog'
import { TimeType } from '../../App'

type StartingPageProps = {
    language: LanguageType,
    setTime: (time: TimeType) => void
}

type ElementType = {
    seconds: number | null,
    minutes: number | null,
    label: string,
    onClick?: (e: React.MouseEvent) => void
}

const StartingPage: React.FC<StartingPageProps> = ({language, setTime}) => {
    const [showModal, setShowModal] = useState(false)
    const [selectedTime, setSelectedTime] = useState<TimeType | null>(null)
    const handleCloseModal = (value: TimeType | null): void => {
        setShowModal(false)
        setSelectedTime(value)
        if (value) {
            setTime({seconds: value.seconds, minutes: value.minutes})
        }
    }
    const makeTime = (seconds: number, minutes: number): void => {
        setTime(
            {
                seconds: seconds,
                 minutes: minutes
            }
        )
    }
    const data: Array<Array<ElementType>> = [
        [
            {
                minutes: 1,
                seconds: 0,
                label: language === 'ru' ? 'Пуля' : 'Bullet',
                onClick: (e) => {
                    makeTime(0, 1)
                }
            },
            {
                minutes: 2,
                seconds: 1,
                label: language === 'ru' ? 'Пуля' : 'Bullet',
                onClick: (e) => {
                    makeTime(1, 2)
                }
            },
            {
                minutes: 3,
                seconds: 0,
                label: language === 'ru' ? 'Пуля' : 'Bullet',
                onClick: (e) => {
                    makeTime(0, 3)
                }
            },
        ],
        [
            {
                minutes: 3,
                seconds: 2,
                label: language === 'ru' ? 'Блиц' : 'Blitz',
                onClick: (e) => {
                    makeTime(2, 3)
                }
            },
            {
                minutes: 5,
                seconds: 0,
                label: language === 'ru' ? 'Блиц' : 'Blitz',
                onClick: (e) => {
                    makeTime(0, 5)
                }
            },
            {
                minutes: 5,
                seconds: 3,
                label: language === 'ru' ? 'Блиц' : 'Blitz',
                onClick: (e) => {
                    makeTime(3, 5)
                }
            },
        ],
        [
            {
                minutes: 10,
                seconds: 0,
                label: language === 'ru' ? 'Рапид' : 'Rapid',
                onClick: (e) => {
                    makeTime(0, 10)
                }
            },
            {
                minutes: 10,
                seconds: 5,
                label: language === 'ru' ? 'Рапид' : 'Rapid',
                onClick: (e) => {
                    makeTime(5, 10)
                }
            },
            {
                minutes: 15,
                seconds: 10,
                label: language === 'ru' ? 'Рапид' : 'Rapid',
                onClick: (e) => {
                    makeTime(10, 15)
                }
            },
        ],
        [
            {
                minutes: 30,
                seconds: 0,
                label: language === 'ru' ? 'Классические' : 'Classical',
                onClick: (e) => {
                    makeTime(0, 30)
                }
            },
            {
                minutes: 30,
                seconds: 20,
                label: language === 'ru' ? 'Классические' : 'Classical',
                onClick: (e) => {
                    makeTime(20, 30)
                }
            },
            {
                minutes: null,
                seconds: null,
                label: language === 'ru' ? 'Своя игра' : 'Custom',
                onClick(e) {
                    setShowModal(true)
                },
            },
        ]
    ]
    const rows: Array<React.ReactNode> = []
    for (let i = 0; i < 4; i++) {
        const row: Array<React.ReactNode> = []
        for (let j = 0; j < 3; j++) {
            const element: any = 
                <Button 
                    key={i * 10 + j} 
                    variant='outlined' 
                    sx={
                        {
                            width: '30%',
                            marginRight: '1.5%',
                            marginLeft: '1.5%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }
                    }
                    onClick={data[i][j].onClick}
                >
                    {data[i][j].minutes && <p className='StartingPage-Rows-Row-label'>{data[i][j].minutes + ' + ' + data[i][j].seconds}</p>}
                    <p className='StartingPage-Rows-Row-label'>{data[i][j].label}</p>
                </Button>
            row.push(element)
        }
        rows.push(<div className='StartingPage-Rows-Row'>{row}</div>)
    }
    return (
        <div className='StartingPage'>
            <div className='StartingPage-Rows'>
                {rows}
            </div>
            <ModalDialog 
                open={showModal}
                onClose={handleCloseModal}
                selectedTime={selectedTime}
                language={language}
            />
        </div>
    )
}

export default StartingPage