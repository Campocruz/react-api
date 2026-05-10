import { useEffect, useState } from "react"
import MainRenderList from "./MainRenderList";

export default function AppMain({ actressesApi, actorsApi }) {

  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);

  function getActors(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => (setActors(data)))
  }

  function getActresses(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => (setActresses(data)))
  }

  useEffect(() => { getActors(actorsApi); getActresses(actressesApi) }, [])

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-4">
            <div>
              <MainRenderList titleText={'Attori'} actorsList={actors} />
              <div>
                <MainRenderList titleText={'Attrici'} actorsList={actresses} />
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="text-center">
              <h3>Album attori</h3>
            </div>
            <div>
              <div className="row">
                <div className="col-6">
                  <div className="card">
                    <div className="card-header">
                      <h3>{actors[0]?.name}</h3>
                    </div>
                    <div className="card-body">
                      <div className="">
                        <img className="card-img-top" src={actors[0]?.image} alt={actors[0]?.image} />
                      </div>
                    </div>
                    <div className="card-footer">
                      <ul className="mt-1">
                        <li>Anno di nascita {actors[0]?.birth_year}</li>
                        <li>Nazionalità: {actors[0]?.nationality}</li>
                        <li>Riconoscimenti: {actors[0]?.awards.map((aword, index) => (<span key={index}>{aword}; </span>))}</li>
                      </ul>
                      <hr />
                      <p>{actors[0]?.biography}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}