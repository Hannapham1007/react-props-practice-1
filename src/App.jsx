import { useState } from 'react'
import { reverse } from './helpers'
import Title from './Title'
import NameLength from './NameLength'
import NameReversed from './NameReversed'

function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <>
    <div className="app">
      <Title titleName={name}></Title>
      <NameLength nameLength={name}></NameLength>
      <NameReversed  nameReverse={name}></NameReversed>

    </div>
    </>
  )
}

export default App
