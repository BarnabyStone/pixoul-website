import React from "react"

export default ({
  title = 'Search Icon',
  color = 'inherit'
}) => (
  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <path fill={color} d="M29.038 23.985l-6.867-6.866a11.652 11.652 0 0 0 1.315-5.376C23.486 5.268 18.218 0 11.742 0 5.267 0 0 5.268 0 11.743c0 6.475 5.267 11.743 11.742 11.743 1.94 0 3.764-.48 5.377-1.316l6.866 6.867a3.316 3.316 0 0 0 2.36.963c.92 0 1.857-.363 2.575-1.08 1.393-1.393 1.445-3.606.118-4.935zm-17.197-2.67c-5.223 0-9.473-4.249-9.473-9.473 0-5.224 4.25-9.474 9.473-9.474 5.225 0 9.475 4.25 9.475 9.474s-4.25 9.474-9.475 9.474zm15.387 5.913c-.488.488-1.227.54-1.649.12l-6.632-6.633a12.098 12.098 0 0 0 1.768-1.768l6.631 6.632c.423.422.37 1.162-.118 1.65zM11.477 6.316a1.155 1.155 0 1 1 0 2.31 2.855 2.855 0 0 0-2.852 2.85 1.154 1.154 0 1 1-2.31 0 5.167 5.167 0 0 1 5.162-5.16z"/>
  </svg>
)
