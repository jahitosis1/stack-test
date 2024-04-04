"use client"
import { useState, useEffect } from "react";

const TestPage = (props) => {

  const [ isOpen, setIsOpen ] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="bg-slate-900 flex justify-center items-center min-h-screen transition-all">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      
      <div className="rounded-lg border border-gray-200 transition-all duration-500 bg-gradient-to-t from-transparent from-10% to-90% to-accent-200 bg-opacity-20 backdrop-blur-3xl w-40 h-40 bg-size-200 bg-pos-0 hover:bg-pos-100">
      </div>
      <button className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100">Hover me</button>

      <button className="transition-all duration-500 bg-gradient-to-t to-white via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
          Hover me
      </button>
      <button className="btn btn-info bg-gradient-to-tr from-white to-red-500 border-none" onClick={ openModal }>open modal</button>
      <dialog id="my_modal_1" className={"modal" + (isOpen ? " modal-open" : "")}>
        <div className="modal-box max-w-none max-h-none w-dvw h-dvh flex flex-wrap gap-3">
          <div className="card w-60 bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">ICS Lecture Hall 4</h2>
              <p>3rd Floor, ICS, PhySci Building</p>
              <p>Lecture Hall</p>
            </div>
          </div>
          <div className="card w-60 bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">ICS Lecture Hall 3</h2>
              <p>3rd Floor, ICS, PhySci Building</p>
              <p>Lecture Hall</p>
            </div>
          </div>
          <div className="modal-action">
            <button className="btn" onClick={ closeModal }>close</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default TestPage;
