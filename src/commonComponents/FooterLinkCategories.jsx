
import { Link } from 'react-router'

const FooterLinkCategories = (props) => {
  return (
   <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={props.linkTo}>{props.linkName}</Link>
 
  )
}

export default FooterLinkCategories
