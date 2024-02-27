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
      <Title className="title" titleName={"Welcome "+name}></Title>
      <NameLength className="name-length" nameLength={"Did you know that "+ name + " is" + name.length + "characters long?!"}></NameLength>
      <NameReversed className="name-reversed" nameReverse={"Also "+ name +" backwards is " + reverse(name)}></NameReversed>

    </div>
    </>
  )
}

export default App
