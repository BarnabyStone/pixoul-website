import React from "react"
import injectSheet from 'react-jss'
/* Utils */
import Typography from "utils/typography/typography"
import { Animate } from "utils/animate/animate"
/* Images */
import disney from "./images/disney.svg"
import airbnb from "./images/airbnb.svg"
import amazon from "./images/amazon.svg"
import gp from "./images/gp.svg"
import kw from "./images/kw.svg"

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  media: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: {
      top: 84,
      right: 0,
      bottom: 84,
      left: 0
    },
    '& img' : {
      padding: 30,
      filter: props => props.light ? 'opacity(0.2)' : 'none'
    }
  },
  '@media (max-width: 768px)': {
    media: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: {
        top: 30,
        right: 0,
        bottom: 40,
        left: 0
      },
      '& img': {
        width: '30%'
      }
    }
  }
})

const TrustedCompanies = ({
  title,
  classes
}) => (
  <div className={classes.root}>
      <Animate delay={100}>
        <Typography variant="subtitle2" align="center">{title}</Typography>
      </Animate>
      <Animate delay={200}>
      <div className={classes.media}>
        <img src={disney} alt={disney} />
        <img src={airbnb} alt={airbnb} />
        <img src={amazon} alt={amazon} />
        <img src={gp} alt={gp} />
        <img src={kw} alt={kw} />
      </div>
      </Animate>
  </div>
)

TrustedCompanies.defaultProps = {
  title: 'Our Talent Network has Worked For Companies Like:',
  light: false
}

export default injectSheet(styles)(TrustedCompanies)
