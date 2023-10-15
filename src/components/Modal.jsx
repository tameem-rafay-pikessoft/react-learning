import style from './Modal.module.css'
function Modal(props) {
    return <>
        <div className={style.backdrop}></div>
        <dialog open={false} className={style.modal}>
            {props.children}
        </dialog>
    </>

}

export default Modal;