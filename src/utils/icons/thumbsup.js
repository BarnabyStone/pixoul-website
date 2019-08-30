import React from "react"

export default ({
  title = 'Thumbs Up Icon',
  color = 'inherit',
  circular
}) => {

  if(circular){
    return(
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <title>{title}</title>
        <path fill={color} fillRule="evenodd" d="M25 0c13.808 0 25 11.193 25 25S38.808 49.999 25 49.999C11.193 49.999 0 38.807 0 25 0 11.193 11.193 0 25 0zm0 1.8C12.208 1.8 1.8 12.207 1.8 25c0 12.792 10.408 23.199 23.2 23.199 12.793 0 23.2-10.407 23.2-23.199C48.2 12.207 37.793 1.8 25 1.8zm8.306 18.723h-2.245c-.83 0-1.56.408-2.019 1.029l-.136-.082a4.507 4.507 0 0 1-1.927-2.389l-.64-1.862a3.502 3.502 0 0 1-.19-1.055l-.025-1.066a1.963 1.963 0 0 0-1.974-1.926h-.758a2.662 2.662 0 0 0-2.55 1.928l-1.222 4.318h-2.773a2.703 2.703 0 0 0-2.7 2.699v.103c0 .56.175 1.1.497 1.551a2.67 2.67 0 0 0-.497 1.551v.103c0 .56.175 1.1.497 1.552a2.665 2.665 0 0 0-.497 1.551v.103c0 .559.175 1.099.497 1.551a2.667 2.667 0 0 0-.497 1.551v.103a2.703 2.703 0 0 0 2.7 2.699h8.291c.916 0 1.815-.249 2.601-.722l1.02-.613a2.516 2.516 0 0 0 2.302 1.508h2.245a2.516 2.516 0 0 0 2.513-2.513v-9.159a2.516 2.516 0 0 0-2.513-2.513zM26.811 32.27a3.246 3.246 0 0 1-1.673.465h-8.291a.9.9 0 0 1-.899-.899v-.103c0-.282.127-.48.234-.596a1.42 1.42 0 0 0 0-1.91.868.868 0 0 1-.234-.596v-.103c0-.283.126-.48.234-.596a1.42 1.42 0 0 0-.001-1.911.866.866 0 0 1-.233-.596v-.103c0-.282.127-.48.233-.594a1.422 1.422 0 0 0 0-1.913.861.861 0 0 1-.233-.595v-.103a.9.9 0 0 1 .899-.899h4.849a.9.9 0 1 0 0-1.8h-.205l1.083-3.827a.855.855 0 0 1 .818-.619h.758c.094 0 .172.077.175.17l.026 1.065c.012.546.109 1.084.286 1.598l.639 1.862a6.32 6.32 0 0 0 2.7 3.344l.571.345v7.871l-1.736 1.043zm7.208-.075c0 .393-.32.714-.713.714h-2.245a.714.714 0 0 1-.713-.714v-9.159c0-.393.319-.713.713-.713h2.245c.393 0 .713.32.713.713v9.159zm-9.714-4.652a.9.9 0 0 1 0 1.8h-3.913a.9.9 0 1 1 0-1.8h3.913zm0-3.353a.9.9 0 0 1 0 1.8h-3.913a.9.9 0 1 1 0-1.8h3.913z"/>
      </svg>
    )
  }

  return (
    <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <path fill={color} fillRule="evenodd" d="M33.782 13.152h-3.96a4.206 4.206 0 0 0-3.528 1.933l-.456-.277a8.312 8.312 0 0 1-3.542-4.414L21.16 7.062a6.55 6.55 0 0 1-.351-1.972l-.046-1.905A3.236 3.236 0 0 0 17.519 0h-1.348a4.466 4.466 0 0 0-4.277 3.255l-2.227 7.921H4.533c-2.5 0-4.533 2.046-4.533 4.561v.184c0 1.01.333 1.982.947 2.777A4.526 4.526 0 0 0 0 21.473v.184c0 1.01.333 1.98.947 2.775A4.53 4.53 0 0 0 0 27.208v.185c0 1.009.333 1.98.947 2.775A4.528 4.528 0 0 0 0 32.943v.185c0 2.515 2.033 4.56 4.533 4.56h14.742c1.58 0 3.133-.432 4.49-1.253l2.096-1.27c.582 1.646 2.13 2.835 3.961 2.835h3.96C36.11 38 38 36.095 38 33.755V17.398c0-2.34-1.891-4.246-4.218-4.246zM25.604 32.19l-3.215 1.946c-.94.57-2.018.87-3.114.87H4.533a1.874 1.874 0 0 1-1.866-1.877v-.185c0-.461.174-.904.485-1.247a2.28 2.28 0 0 0 .002-3.055 1.854 1.854 0 0 1-.487-1.248v-.185c0-.461.174-.905.485-1.247.784-.857.784-2.2.002-3.056a1.85 1.85 0 0 1-.487-1.248v-.184c0-.462.174-.905.486-1.247.782-.857.782-2.2 0-3.056a1.85 1.85 0 0 1-.486-1.249v-.184c0-1.034.838-1.877 1.866-1.877h8.623c.736 0 1.333-.6 1.333-1.342 0-.74-.597-1.342-1.333-1.342h-.717l2.022-7.19a1.786 1.786 0 0 1 1.71-1.302h1.348c.31 0 .57.254.576.566l.047 1.905c.022.946.189 1.882.495 2.779l1.137 3.332a11 11 0 0 0 4.685 5.84l1.145.695V32.19zm9.729 1.566c0 .86-.695 1.561-1.55 1.561h-3.96c-.856 0-1.552-.7-1.552-1.561V17.398c0-.861.696-1.562 1.551-1.562h3.96c.856 0 1.55.701 1.55 1.562v16.357zm-17.539-8.04c.736 0 1.334.602 1.334 1.342 0 .742-.598 1.342-1.334 1.342h-6.957c-.736 0-1.334-.6-1.334-1.342 0-.74.598-1.342 1.334-1.342h6.957zm0-6c.736 0 1.334.6 1.334 1.342 0 .74-.598 1.342-1.334 1.342h-6.957a1.338 1.338 0 0 1-1.334-1.342c0-.742.598-1.342 1.334-1.342h6.957zm14.008 5.69c-.736 0-1.333.6-1.333 1.342v5.05c0 .742.597 1.342 1.333 1.342s1.334-.6 1.334-1.342v-5.05c0-.742-.598-1.342-1.334-1.342z" />
    </svg>
  )
}
