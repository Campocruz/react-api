import { femaleActors, maleActors } from "./assets/data/apiUrl"
import { useEffect, useState } from "react"
import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"

function App() {



  return (
    <>
      <AppHeader />

      <AppMain actressesApi={femaleActors} actorsApi={maleActors} />

      <AppFooter />
    </>
  )
}

export default App
