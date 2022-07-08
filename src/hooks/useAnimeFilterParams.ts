import { useContext } from 'react'
import AnimeFiltersContext from '../context/AnimeFiltersContext'

const useAnimeFilterParams = () => {
  const context = useContext(AnimeFiltersContext)

  return context
}

export default useAnimeFilterParams