import React from "react"
import styles from "./Form.module.css"
import useSelect from "../hooks/useSelect"

const Form = ({ saveCategory }) => {
  const OPTIONS = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnologia" }
  ]
  //utilizar custom hook
  const [category, SelectTidings] = useSelect("general", OPTIONS)
  //submit al form, pasar categoria a app.js
  const searchTidings = e => {
    e.preventDefault()
    saveCategory(category)
  }

  return (
    <div className={`${styles.seeker} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={searchTidings}>
          <h2 className={styles.heading}>Encuentra Noticias por categoria</h2>
          <SelectTidings />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
