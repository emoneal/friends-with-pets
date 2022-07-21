import React from 'react'
import Pet from './Pet'

export default function Friend(props) {
    const mapPets = props.pets.map(pet => {
        return(
          <Pet 
            {...pet}
          />
        )
      })
        return(
            <section>
                <nav className="Friend">
                  <h1>{props.name}, Age {props.age}</h1>
                    {mapPets}
                </nav>
            </section>
        )
    }