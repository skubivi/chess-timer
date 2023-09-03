import { useEffect, useState } from 'react'

export type ThemeType = 'dark' | 'light'
export type UseDarkModeType = () => [ThemeType, () => void]

export const useDarkMode: UseDarkModeType = () => {
    const [theme, setTheme] = useState<ThemeType>('dark')

    const setMode = (mode: ThemeType) => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const toggleTheme = () => {
        theme === 'dark' ? setMode('light') : setMode('dark')
    }

    useEffect(() => {
        const localTheme: ThemeType | null = (window.localStorage.getItem('theme') as ThemeType | null)
        localTheme ? setTheme(localTheme) : setMode('dark')
    }, [])

    return [theme, toggleTheme]
}