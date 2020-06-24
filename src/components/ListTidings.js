import React from "react"
import Tiding from "./Tiding"
const ListTidings = ({ tidings }) => (
  <div className="row">
    {tidings.map(tiding => (
      <Tiding key={tiding.url} tiding={tiding} />
    ))}
  </div>
)

export default ListTidings
