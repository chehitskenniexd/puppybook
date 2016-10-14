import React from 'react';
import { Link } from 'react-router';

export default ({allPuppies}) => {
  return (
    <div>
      <ul className="list-unstyled">
        {allPuppies && allPuppies.map((puppy) =>
          <li key={puppy.id}><Link to={`/puppies/${puppy.id}`}>{puppy.name}</Link></li>
        )}
      </ul>
    </div>
  )
}
