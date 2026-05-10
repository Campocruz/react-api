export default function MainRenderList({ titleText, actorsList }) {

  return (
    <>
      <div>
        <h3>{titleText}</h3>
        <ul>
          {
            actorsList?.map((actor) => (<li key={actor.id}>{actor.name}</li>))
          }
        </ul>
      </div>
    </>
  )
}