import * as React from "react"
import styled from "styled-components"
import colors from "../utils/colors"
import { CSSTransition } from "react-transition-group"
import ModalContext from "../containers/modal-context"

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.grayTransparent};
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalView = styled.div`
  background-color: ${colors.white};
  min-width: 400px;
  padding: 2rem;
  box-shadow: 10px 10px 10px ${colors.gray};
  transition: all 300ms ease-out;
  border-radius: 4px;
`

const TransitionContainer = styled.div`
  .modal-enter {
    opacity: 0.01;

    .modal-view {
      transform: scale(0.9) translateY(20%);
    }
  }
  .modal-enter-active {
    opacity: 1;
    transition: all 300ms ease-out;

    .modal-view {
      transform: scale(1) translateY(0%);
    }
  }
  .modal-exit {
    opacity: 1;

    .modal-view {
      transform: scale(1) translateY(0%);
    }
  }
  .modal-exit-active {
    opacity: 0.01;
    transition: all 300ms ease-out;

    .modal-view {
      transform: scale(0.9) translateY(20%);
    }
  }
`

const Modal = ({ id, children }) => {
  const { visibleModalId } = React.useContext(ModalContext)
  const visible = visibleModalId === id
  return (
    <TransitionContainer>
      <CSSTransition
        in={visible}
        timeout={400}
        unmountOnExit
        classNames="modal"
      >
        {state => (
          <ModalContainer>
            <ModalView className="modal-view">{children}</ModalView>
          </ModalContainer>
        )}
      </CSSTransition>
    </TransitionContainer>
  )
}

export default Modal
