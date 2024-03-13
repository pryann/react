import GuitarsContext from '../contexts/GuitarsContext'
import useFetchGuitars from '../hooks/useFetchGuitars'
import PropTypes from 'prop-types'

GuitarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function GuitarsProvider({ children }) {
  const { fetchGuitars, error, loading, success } = useFetchGuitars()

  return (
    <GuitarsContext.Provider value={(fetchGuitars, error, loading, success)}>
      {children}
    </GuitarsContext.Provider>
  )
}
