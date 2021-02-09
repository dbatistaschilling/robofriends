import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  const CardComponentList = robots.map(robot => {
    return <Card key={robot.id} {...robot} />
  })

  return (
    <div>
      {CardComponentList}
    </div>
  )
}

export default CardList;