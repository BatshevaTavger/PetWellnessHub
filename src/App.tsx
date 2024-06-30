import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { MeetingProvider } from './context/meet.context'
// import { Meeting } from './components/meeting.component'
// import { Common } from './components/common.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <MeetingProvider>
          <Meeting></Meeting>
          <Common></Common>
        </MeetingProvider> */}
      </div>

    </>
  )
}

export default App
