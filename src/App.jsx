import { useEffect, useMemo, useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen.jsx'
import SignInScreen from './components/SignInScreen.jsx'
import CreateAccountScreen from './components/CreateAccountScreen.jsx'
import AccountSettingsScreen from './components/AccountSettingsScreen.jsx'
import './App.css'

const App = () => {
  const screens = useMemo(
    () => [WelcomeScreen, SignInScreen, CreateAccountScreen, AccountSettingsScreen],
    [],
  )
  const [activeScreen, setActiveScreen] = useState(0)

  const goNext = () => {
    setActiveScreen((current) => Math.min(current + 1, screens.length - 1))
  }

  const goBack = () => {
    setActiveScreen((current) => Math.max(current - 1, 0))
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable
      ) {
        return
      }

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault()
        goNext()
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault()
        goBack()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [screens.length])

  useEffect(() => {
    const primaryFocus = document.querySelector('[data-focus-primary]')
    if (primaryFocus instanceof HTMLElement) {
      primaryFocus.focus()
    }
  }, [activeScreen])

  const ActiveScreen = screens[activeScreen]

  return (
    <main className="app-shell">
      <div className="phone-stack">
        <ActiveScreen
          onNext={goNext}
          onBack={goBack}
          onShowSignIn={() => setActiveScreen(1)}
          onShowCreateAccount={() => setActiveScreen(2)}
          onShowAccountSettings={() => setActiveScreen(3)}
        />
      </div>
    </main>
  )
}

export default App