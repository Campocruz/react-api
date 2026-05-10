export default function MainRenderList({ titleText, actorsList }) {

  return (
    <>
      <div>
        <h3>{titleText}</h3>
        <ul>
          {
            actorsList?.map((actor, index) => (<li key={index}><a href="#">{actor.name}</a></li>))
          }
        </ul>
      </div>
    </>
  )
}