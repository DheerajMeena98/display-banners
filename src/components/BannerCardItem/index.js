import './index.css'

const BannerElement = props => {
  const {bannerCard} = props
  // eslint-disable-next-line
  const {headerText, description, className} = bannerCard

  return (
    <li className={className}>
      <h1 className="banner-heading"> {headerText} </h1>
      <p className="banner-description"> {description} </p>
      <button className="show-more-button"> Show More</button>
    </li>
  )
}

export default BannerElement
