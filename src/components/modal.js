import * as React from "react"
import { CSSTransition } from "react-transition-group"
import ModalContext from "../containers/modal-context"

const Modal = ({ id, children }) => {
  const { visibleModalId } = React.useContext(ModalContext)
  const visible = visibleModalId === id
  return (
    <div>
      <CSSTransition
        in={visible}
        timeout={400}
        unmountOnExit
        classNames="modal"
      >
        {(state) => (
          <div className="fixed inset-0 bg-grayTransparent flex items-center justify-center">
            <div className="modal-view bg-white min-w-[400px] p-8 shadow-[10px_10px_10px_rgba(202,211,200,1)] transition-all duration-300 ease-out rounded-[4px]">
              {children}
            </div>
          </div>
        )}
      </CSSTransition>
    </div>
  )
}

export default Modal
