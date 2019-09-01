import React from "react"
import injectSheet from 'react-jss'

const styles = theme => ({
  main: {
    margin: {
      left: 130,
      right: 130
    }
  }
})

export default injectSheet(styles)(function({
  classes
}){

  return(
    <main className={classes.main}>
      <h1>H1 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur provident deleniti impedit a recusandae ipsam reprehenderit voluptatem sequi reiciendis autem officiis, maiores doloribus odit? Itaque optio hic ad quod laudantium!</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolore officiis velit molestiae pariatur, id perferendis? Repudiandae neque consectetur nemo!</p>
      <h2>H2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur provident deleniti impedit a recusandae ipsam reprehenderit voluptatem sequi reiciendis autem officiis, maiores doloribus odit? Itaque optio hic ad quod laudantium!</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nostrum consequatur odit excepturi magni iusto numquam possimus veniam aperiam rerum quo doloremque, ipsam, in culpa odio quae adipisci dolore. Pariatur.</p>
      <h3>H3 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et assumenda facere dolore laboriosam quod eos sed soluta architecto eligendi corporis?</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsa reiciendis. Magni omnis itaque facere odit debitis aperiam quod incidunt maxime dolor iusto corrupti, et expedita ipsam corporis nihil ab.</p>
      <h4>H4 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit eaque deleniti dignissimos itaque adipisci voluptas illo distinctio repellendus hic praesentium.</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aut quia blanditiis. Eaque doloribus fugiat illum officiis minus, incidunt aperiam. Vero ab ratione quo accusamus soluta quasi officiis minus aut illum, dolores beatae esse itaque ullam temporibus, sed quod corrupti.</p>
      <h5>H5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error magnam, voluptatibus iste harum officia repellat at nulla necessitatibus quos blanditiis.</h5>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et sint natus porro, incidunt odio iure dolorem mollitia a officia.</p>
      <h6>H6 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ducimus, perspiciatis neque quis atque harum!</h6>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facilis eius fugiat culpa quibusdam.</p>
    </main>
  )
})
