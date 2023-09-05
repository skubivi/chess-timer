import * as React from 'react'
import './timerPage.scss'

import { LanguageType } from '../../Hooks/useLanguage'
import { useState } from 'react'
import RulesPage from './RulesPage/RulesPage'
import OptionsPage from './OptionsPage/OptionsPage'
import { OptionsType, TimeType } from '../../types'

type TimerPageProps = {
    time: TimeType
    language: LanguageType
    options: OptionsType
    setOptions: (value: React.SetStateAction<OptionsType>) => void
    clearOptions: () => void
}

const TimerPage: React.FC<TimerPageProps> = ({time, language, options, setOptions, clearOptions}) => {
    const [isOptionsPage, setIsOptionPage] = useState(true)
    const [isRulesPage, setIsRulesPage] = useState(false)

    const handleGoToRulesPage = (): void => {
        setIsOptionPage(false)
        setIsRulesPage(true)
    }

    return (
        <div className='TimerPage'>
            {isOptionsPage && <OptionsPage language={language} options={options} setOptions={setOptions} clearOptions={clearOptions} nextPage={handleGoToRulesPage}/>}
            {isRulesPage && <RulesPage language={language}/>}
        </div>
    )
}

export default TimerPage