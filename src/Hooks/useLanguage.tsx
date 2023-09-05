import { useEffect, useState } from 'react'

export type LanguageType = 'ru' | 'en'
export type UseLanguageType = () => [LanguageType, (language: LanguageType) => void]

export const useLanguage: UseLanguageType = () => {
    const [language, setLanguage] = useState<LanguageType>('ru')

    const setMode = (mode: LanguageType) => {
        window.localStorage.setItem('language', mode)
        setLanguage(mode)
    }

    useEffect(() => {
        const localLanguage: LanguageType | null = (window.localStorage.getItem('language') as LanguageType | null)
        localLanguage ? setLanguage(localLanguage) : setMode('ru')
    }, [])

    return [language, setMode]
}