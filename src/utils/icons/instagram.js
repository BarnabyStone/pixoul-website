import React from "react"

export default ({
  title = 'Instagram Icon',
  color = 'inherit'
}) => (
  <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <g fill={color} fillRule="nonzero">
      <path d="M17.522 0H7.435C3.335 0 0 3.335 0 7.435v10.087c0 4.1 3.335 7.434 7.435 7.434h10.087c4.1 0 7.434-3.335 7.434-7.434V7.435c0-4.1-3.335-7.435-7.434-7.435zm4.924 17.522a4.924 4.924 0 0 1-4.924 4.924H7.435a4.924 4.924 0 0 1-4.924-4.924V7.435A4.924 4.924 0 0 1 7.435 2.51h10.087a4.924 4.924 0 0 1 4.924 4.924v10.087z"/><path d="M12.478 6.024a6.462 6.462 0 0 0-6.454 6.454 6.462 6.462 0 0 0 6.454 6.455 6.462 6.462 0 0 0 6.455-6.455 6.462 6.462 0 0 0-6.455-6.454zm0 10.398a3.944 3.944 0 1 1 0-7.888 3.944 3.944 0 0 1 0 7.888z"/>
      <circle cx="18.945" cy="6.072" r="1.547"/>
    </g>
  </svg>
)