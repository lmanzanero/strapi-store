import React, { useEffect, useRef } from "react"
// import { Link } from "gatsby"
// import Img from "gatsby-image"

const Modal = ({children, isOpen, modalHandler}) => { 
  const modal = useRef(null);
  useEffect(() => {
    console.log(isOpen);
    isOpen ?  modal.current.style.display = 'block' :  modal.current.style.display = 'none';
  }, [isOpen]);

  return (
    <div ref={modal} className="modal">
      <div className="modal-content">
         <span title="close" className="close" onClick={async () => await modalHandler(false)}>&times;</span>
         <div>
            {children}
         </div>
      </div>
    </div>
  );
}

export default Modal;