const Characters = ({ characters, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul className="character-list">
            { characters.map(character => (
                <li key={character.id} className="character">
                    { character.name}
                </li>
            ))}
        </ul>
    )
}

export default Characters