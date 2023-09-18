import { useState } from 'react'

interface Props {
  children: string
  wordCount: number
}
const ExText = ({ children, wordCount }: Props) => {
  const [buttonState, setButtonState] = useState(true)
  let btnValue: string
  buttonState ? (btnValue = 'More') : (btnValue = 'Less')

  if (children.length <= wordCount) {
    return <p>{children}</p>
  } else {
    let text: string
    buttonState
      ? (text = children.substring(0, wordCount) + ' ...')
      : (text = children)
    return (
      <>
        <p>
          {text}{' '}
          <button
            onClick={() => setButtonState(!buttonState)}
            className="btn btn-primary"
          >
            {btnValue}
          </button>{' '}
        </p>
      </>
    )
  }
}

export default ExText
