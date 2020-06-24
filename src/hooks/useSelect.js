import React, { useState } from "react"

const useSelect = (stateInit, options) => {
  //state del custom hook
  const [state, updateState] = useState(stateInit)

  const SelectTidings = () => (
    <select
      className="browser-default"
      value={state}
      onChange={e => updateState(e.target.value)}
    >
      {options.map(opcion => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  )

  return [state, SelectTidings]
}

export default useSelect
