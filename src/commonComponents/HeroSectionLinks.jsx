
import { Link } from 'react-router'

const HeroSectionLinks = (props) => {
  return (
    <Link to={'/nutracare_frontend/categories'} className="text-gray-200 hover:text-white mb-1">{props.linkName}</Link>
  )
}

export default HeroSectionLinks
