import ListGroup from './Components/ListGroup'
import Button from './Components/Button'
import Alert from './Components/Alert'
import { useState } from 'react'

function App() {
  const items = ['Tehran', 'New York', 'Helsinki', 'Arak', 'Istanbul']
  const [alertVisibility, setAlertVisibility] = useState(false)
  const handleSelectItem = (items: string) => {
    console.log(items)
  }
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <Button
        children="My Button"
        color="primary"
        onClick={() => setAlertVisibility(true)}
      ></Button>
      {alertVisibility && (
        <Alert
          children="My Alert"
          onClick={() => setAlertVisibility(false)}
        ></Alert>
      )}
    </>
  )
}
export default App
