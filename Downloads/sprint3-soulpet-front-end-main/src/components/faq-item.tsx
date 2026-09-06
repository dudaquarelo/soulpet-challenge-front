import { useState } from 'react'

interface FaqItemProps {
  question: string
  answer: string
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setOpen(!open)
          }
        }}
      >
        <span>{question}</span>
        <span>{open ? '−' : '+'}</span>
      </div>
      {open && (
        <div role="region">
          <div>{answer}</div>
        </div>
      )}
    </div>
  )
}

export default FaqItem