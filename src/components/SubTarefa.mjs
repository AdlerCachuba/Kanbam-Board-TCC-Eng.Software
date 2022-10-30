import React, { useState } from 'react'

function SubTarefa({ subtarefa, index }) {
  const [feito, setFeito] = useState(false)
  function marcaSubTarefa() {
    setFeito(!feito)
  }
  return (
    <li className={feito ? 'riscado' : null} onClick={(e) => marcaSubTarefa()}>
      {subtarefa}
    </li>
  )
}

export default SubTarefa
