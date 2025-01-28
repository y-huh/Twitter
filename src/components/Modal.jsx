import { MdOutlineClose } from "react-icons/md";

export const Modal = ({ children, openModal,modalInnerClass, setOpenModal }) => {
    return (
      <div
        id="wrapper" onClick={(e) => e.target.id == "wrapper" && setOpenModal(false)}  className={`duration-300 fixed ${setOpenModal ? "" : "scale-0"} inset-0 flex items-center justify-center bg-[#00000079] backtrop-blur`}
      >
        <div
          className={`absolute ${modalInnerClass} w-[500px] h-[300px] bg-white p-5 rounded-md`}
        >
          <button className="absolute top-5 right-5" onClick={() => setOpenModal(false)}>
          <MdOutlineClose />

          </button>
          {children}
        </div>
      </div>
    );
  };
  