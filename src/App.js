import React, { Fragment, useState, useEffect } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import ListTidings from "./components/ListTidings"

function App() {
  const [category, saveCategory] = useState("")
  const [tidings, saveTidings] = useState([])
  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=005f3affcf2e4f6ea7ed0514f3a2b7ce`
      const resp = await fetch(url)
      const tidings = await resp.json()
      saveTidings(tidings.articles)
      
    }
    consultAPI()
  }, [category])

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Form saveCategory={saveCategory} />
        <ListTidings tidings={tidings}/>
      </div>
    </Fragment>
  )
}

export default App
