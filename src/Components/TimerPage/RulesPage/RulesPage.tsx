import * as React from 'react'
import './rulesPage.scss'

import { LanguageType } from '../../../Hooks/useLanguage'

type RulesPageProps = {
    language: LanguageType
}

const RulesPage: React.FC<RulesPageProps> = ({language}) => {
    return (
        <div className='RulesPage'>

        </div>
    )
}

export default RulesPage