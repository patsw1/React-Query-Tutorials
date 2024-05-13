import { useQuery  } from 'react-query'
import axios from 'axios'

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery('super-heros', () => {
    return axios.get('http://localhost:4001/superheroes')
  })

  if (isLoading) {
    return <h2>loading...</h2>
  }
  return (
  <>
  <h2>React Query Super Heroes Page</h2>
  {
    data?.data.data(hero => {
    return <div key={hero.name}>{hero.name}</div>
    })
  }
  </>
  )
}
