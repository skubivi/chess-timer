export type TimeType = {
    seconds: number
    minutes: number
}

export type TimeMethod = 'Fischer' | 'Bronstein'
export type OptionsType = {
    method: TimeMethod
    soundNotifications: boolean
    isUsingSpacebar: boolean
}