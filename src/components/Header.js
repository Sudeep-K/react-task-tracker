import React from 'react'
import Button from './Button'

export const Header = ({ title, showTask, onAdd }) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={ showTask ? 'red' : 'green' } text={ showTask ? 'Close' : 'Add' } onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
