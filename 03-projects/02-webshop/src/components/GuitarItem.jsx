import PropTypes from 'prop-types'
import GuitarThumbnail from './GuitarThumbnail'
import GuitarTitle from './GuitarTitle'
import GuitarDescription from './GuitarDescription'
import GuitarPrice from './GuitarPrice'
import GuitarRating from './GuitarRating'
import GuitarStock from './GuitarStock'
import CartButton from './CartButton'

GuitarItem.propTypes = {
  guitar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
}

export default function GuitarItem({ guitar }) {
  return (
    <div className="guitar">
      <div className="left-column">
        <GuitarThumbnail />
      </div>
      <div className="right column">
        <GuitarTitle />
        <GuitarDescription />
        <GuitarPrice />
        <GuitarRating />
        <GuitarStock />
        {guitar.stock > 0 && <CartButton />}
      </div>
    </div>
  )
}
