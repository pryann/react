import { useEffect } from 'react'
import GuitarsContext from '../contexts/GuitarsContext'
import useFetchGuitars from '../hooks/useFetchGuitars'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

GuitarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function GuitarsProvider({ children }) {
  const { guitars, fetchGuitars, error, loading, success } = useFetchGuitars()

  useEffect(() => {
    fetchGuitars()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (error) {
      toast('Failed to fetch guitars', { type: 'error' })
    }
  }, [error])

  return (
    <GuitarsContext.Provider value={{ guitars, error, loading, success }}>
      {children}
    </GuitarsContext.Provider>
  )
}
