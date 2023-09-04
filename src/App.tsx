import * as React from 'react';
import './App.scss';
import { Paper } from '@mui/material';
import { Theme, ThemeProvider, createTheme } from "@mui/material/styles"
import Header from './Components/Header/Header';
import StartingPage from './Components/StartingPage/StartingPage';
import { useDarkMode } from './Hooks/useDarkMode';
import { useLanguage } from './Hooks/useLanguage';
import { useState } from 'react';

const App: React.FC = () => {
  const [darkMode, changeDarkMode] = useDarkMode()
  const [language, setLanguage] = useLanguage()
  const [time, setTime] = useState<{seconds: number, minutes: number} | null>(null)
  const handleSetTime = (seconds: number, minutes: number): void => {
    setTime({seconds, minutes})
  }
  let darkTheme: Theme = createTheme({
    palette: {
      mode: darkMode === 'dark' ? 'dark' : 'light'
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ height: '100%', borderRadius: '0'}}>
        <div className="App">
            <Header darkMode={darkMode === 'dark'} changeDarkMode={changeDarkMode} language={language} setLanguage={setLanguage}/>
            <div className='App-Wrapper'>
              {!time && <StartingPage language={language} setTime={handleSetTime}/>}
            </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
