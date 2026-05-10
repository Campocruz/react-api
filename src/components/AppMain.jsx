import { useEffect, useState } from "react"
import MainRenderList from "./MainRenderList";
import MainRenderCard from "./MainRenderCard";

export default function AppMain({ actressesApi, actorsApi }) {

  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);
  const completeList = actors?.concat(actresses);

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
    <div className="container">
      <div className="row mt-3">
        <div className="col-4">
          <MainRenderList titleText={'Attori'} actorsList={actors} />
          <MainRenderList titleText={'Attrici'} actorsList={actresses} />
          <MainRenderList titleText={'tutto'} actorsList={completeList} />
        </div>
        <div className="col-8">
          <div className="text-center">
            <h3>Album attori</h3>
          </div>
          <div>
            <MainRenderCard actors={actors} />
            <MainRenderCard actors={actresses} />
          </div>
        </div>
      </div>
    </div>
  )
}