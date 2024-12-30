import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h2>404 Not Found</h2>
        <p>
            <Link to={'/'}>Go to Home</Link>
        </p>
    </div>
  )
}

export default NotFound