import useGuitarsContext from '../hooks/useGuitarsContext'
import GuitarItem from './GuitarItem'

export default function GuitarList() {
  const { guitars, loading, success } = useGuitarsContext()

  return (
    <div className="guitars">
      {loading && <p>Loading...</p>}
      {success &&
        guitars.map((guitar) => <GuitarItem key={guitar.id} guitar={guitar} />)}
    </div>
  )
}
