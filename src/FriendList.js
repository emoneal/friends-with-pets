import React from 'react'
import Friend from './Friend'
import data from './data'

export default function FriendList() {
    const mapFriends = data.map(item => {
        return (
          <div>
            <Friend
              {...item}
            />
          </div>
        )
      })
    return (
        <section>
            <nav className="Friend">
                {mapFriends}
            </nav>
        </section>
    )
}