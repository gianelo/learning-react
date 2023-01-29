import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  // Esto puede ser un fetch de data desde un API - SIMULACION
  const users = [
    {
      userName: 'joseaveng',
      name: 'jose gregorio avendaño',
      isFollowing: true,
      imageUrl: 'https://pbs.twimg.com/profile_images/1105249649449988098/000SRg6Q_400x400.jpg'
    },
    {
      userName: 'gianndev',
      name: 'gian eloin barboza',
      isFollowing: false,
      imageUrl: 'https://pbs.twimg.com/profile_images/1453483560464228362/89lcuWzq_400x400.jpg'
    },
    {
      userName: 'elonmusk',
      name: 'elon musk',
      isFollowing: false,
      imageUrl: 'https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg'
    }
  ]
  // Siempre se le debe pasar un key unico a cada componentes cuando se usa un map para reusar los componentes lo importante es que siempre sea unico.
  // No se debe pasar nada random y lo mejor o lo que siempre vas a tener es un id unico generado por base de datos.
  // En este caso el userName es unico
  return (
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, isFollowing, imageUrl } = user
          return (
            <TwitterFollowCard
              key={userName}
              initialIsFollowing={isFollowing}
              userName={userName}
              imageUrl={imageUrl}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}
