import { useState } from 'react'

export function TwitterFollowCard ({ children, userName = 'Undefined', imageUrl, initialIsFollowing }) {
  // Usando destructuracion
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)// El useState tiene un arreglo donde el primero es el estado y el segundo es donde se cambia ese estado
  // Sin usar destructuracion como se ve se puede hacer esto en una sola linea destructurando el array que retorna el useState
  // const isFollowingState = useState(false)
  // const isFollowing = isFollowingState[0]
  // const setIsFollowing = isFollowingState[1]

  // Logica para cambiar el estilo del boton dependiendo el estado
  const isFollowingStateText = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassNameStyle = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  // Funcion para cambiar el estado de isFollowing
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={imageUrl}
          alt='El avatart de unavatar.io'
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassNameStyle} onClick={handleClick}>
          <span className='tw-followCard-follow'>{isFollowingStateText}</span>
          <span className='tw-followCard-unFollow'>Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  )
}
