export default function ({ actors }) {

  return (
    <>
      <div className="row">
        {
          actors?.map((actor) => (
            <div key={actor.id} className="col-6">
              <div className="card">
                <div className="card-header">
                  <h3>{actor?.name}</h3>
                </div>
                <div className="card-body">
                  <div className="">
                    <img className="card-img-top" src={actor?.image} alt={actor?.image} />
                  </div>
                </div>
                <div className="card-footer">
                  <ul className="mt-1">
                    <li>Anno di nascita {actor?.birth_year}</li>
                    <li>Nazionalità: {actor?.nationality}</li>
                    <li>Riconoscimenti: {actor?.awards.map((aword, index) => (<span key={index}>{aword}; </span>))}</li>
                  </ul>
                  <hr />
                  <p>{actor?.biography}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}