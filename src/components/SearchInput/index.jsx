import {useContext} from 'react'
import {cartContext} from '../../context'

const SearchInput = () => {
  const context = useContext(cartContext)

  return (
    <input
    type="text"
    placeholder="Search your product"
    className="w-80 max-w-screen-lg px-2 m-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-600"
    onChange={(e) => context.setSearchedItem(e.target.value)}
  />
  )
}

export default SearchInput