import React, { createContext, useContext, useState } from "react";
import NavMenu from "../components/NavMenu";

const CustomContext = createContext({
  open: false,
  grade: null,
  title: null,
  seTGrade: (grade) => null,
  openMenu: () => null,
  closeMenu: () => null,
  modalIsOpen: false,
  openModal: () => null,
  closeModal: () => null,
  info: null,
  setInfo: (inf) => null,
});

export const useCustomContext = () => {
  return useContext(CustomContext);
};

const CustomContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [modalIsOpen, setOpenModal] = useState(false);
  const [grade, setGrade] = useState("first");
  const [info, setInformation] = useState(null);
  //   const [title, setTitleName] = useState(null);

  //   const setTitle = (tit) => {
  //     setTitleName(tit);
  //   };

  const setInfo = (inf) => {
    setInformation(inf);
  };

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const seTGrade = (grade) => {
    setGrade(grade);
  };

  const openModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <CustomContext.Provider
      value={{
        open,
        openMenu,
        closeMenu,
        seTGrade,
        grade,
        openModal,
        closeModal,
        modalIsOpen,
        info,
        setInfo,
      }}
    >
      {children}
      <NavMenu />
    </CustomContext.Provider>
  );
};

export default CustomContextProvider;
