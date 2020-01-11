import React from "react";

import Hero from "common/Hero/Hero"
import bg from "images/bg.png"
import favicon from "images/favicon.svg"
import arrow from "images/arrow_down.svg"

export default function Contact() {
  return(
    <div>
      <Hero
        bg={bg}
        image={<img src={favicon} />}
        title="We’re a digital services firm with a focus on design, technology, and strategic innovation."
        tagline="See how we help ambitious brands dominate digital."
        action={<img src={arrow} />}
      />
    </div>
  )
}
