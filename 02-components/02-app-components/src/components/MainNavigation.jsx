import '../assets/css/MainNavigation.css'
import PropTypes from 'prop-types'

MainNavigation.propTypes = {
  title: PropTypes.string.isRequired,
}

export default function MainNavigation({ title }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="/">
            {title}
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="https://training360.com">
            Training360
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="https://reactjs.org">
            React.js
          </a>
        </li>
      </ul>
    </nav>
  )
}
