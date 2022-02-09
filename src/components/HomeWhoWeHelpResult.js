export const HomeWhoWeHelpResult = ({data}) => {
    return (
        <div className="result">
            <span className="name">{data.name}</span>
            <p className="description">{data.description}</p>
            <p className="examples">{data.examples}</p>
        </div>
    )
}