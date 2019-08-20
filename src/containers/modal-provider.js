import * as React from "react"
import ModalContext from "./modal-context"

function ModalProvider({ children }) {
  const [visibleModalId, setVisibleModalId] = React.useState()

  function showModal(id) {
    setVisibleModalId(id)
  }

  function hideModal() {
    setVisibleModalId(undefined)
  }

  return (
    <ModalContext.Provider value={{ showModal, hideModal, visibleModalId }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
