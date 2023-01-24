export function TwitterFollowCard ({name, userName, imageUrl, isFollowing}) {
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className="tw-followCard-avatar"
            src={imageUrl}
            alt="El avatart de unavatar.io" />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>Seguir</button>
        </aside>
    </article>
    )
}