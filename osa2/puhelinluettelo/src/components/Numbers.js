import React from 'react'

const Numbers = (props) => (
  <>
    {props.persons.map(person =>
      person.name.toLowerCase().includes(props.filter.toLowerCase()) && <p key={person.name}>{person.name} {person.number}</p>
    )}
  </>
)


export default Numbers
