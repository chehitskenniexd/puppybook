import React from 'react';

export default ({allPuppies}) => {
  return (
    <div>
      <ul className="list-unstyled">
        {allPuppies && allPuppies.map((puppy) =>
          <li key={puppy.id}><a href="#">{puppy.name}</a></li>
        )}
      </ul>
    </div>
  )
}
