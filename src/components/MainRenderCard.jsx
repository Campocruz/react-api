export default function ({ actors }) {

  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h3>{actors?.name}</h3>
            </div>
            <div className="card-body">
              <div className="">
                <img className="card-img-top" src={actors?.image} alt={actors?.image} />
              </div>
            </div>
            <div className="card-footer">
              <ul className="mt-1">
                <li>Anno di nascita {actors?.birth_year}</li>
                <li>Nazionalità: {actors?.nationality}</li>
                <li>Riconoscimenti: {actors?.awards.map((aword, index) => (<span key={index}>{aword}; </span>))}</li>
              </ul>
              <hr />
              <p>{actors?.biography}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}