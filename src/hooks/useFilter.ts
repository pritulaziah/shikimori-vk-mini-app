import { useContext } from 'react'
import FiltersContext from '../context/FiltersContext'
import { Filter } from '../types/filter'

const useFilter = () => {
  const context = useContext(FiltersContext)

  return context as Filter
}

export default useFilter