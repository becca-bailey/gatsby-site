import * as React from "react"

const ModalContext = React.createContext({
  showModal: () => {},
  hideModal: () => {},
  visibleModalId: undefined,
})

export default ModalContext
