import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className='App'>
      <TwitterFollowCard
        isFollowing name='Jose Gregorio Avendaño'
        userName='joseaveng'
        imageUrl='https://pbs.twimg.com/profile_images/1105249649449988098/000SRg6Q_400x400.jpg'
      />
      <TwitterFollowCard
        isFollowing={false}
        name='Gian Eloin Barboza'
        userName='gianndev'
        imageUrl='https://pbs.twimg.com/profile_images/1453483560464228362/89lcuWzq_400x400.jpg'
      />
      <TwitterFollowCard
        isFollowing
        name='Elon Musk'
        userName='elonmusk'
        imageUrl='https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg'
      />
    </section>
  )
}
