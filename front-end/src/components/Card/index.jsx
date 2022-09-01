import React from "react";
import CardContent from "./CardContent";

import { Container } from "./CardContent/styles";
import CardPopover from "./CardPopover";

export default function Card({data}) {
  const [showModal, setShowModal] = React.useState(false);
  const [animateModal, setAnimateModal] = React.useState(true);
  const [enableShowModalButton, setEnableShowModalButton] = React.useState(true);

  const openModal = () => {
    setEnableShowModalButton(false);
    setTimeout(() => {
      setAnimateModal(true);
      setShowModal(true);
    }, 100);
  };

  const closeModal = () => {
    setTimeout(() => {
      setAnimateModal(false);
    }, 500);
    setTimeout(() => {
      setShowModal(false);
      setEnableShowModalButton(true);
    }, 1500);
  };

  return (
    <>
      {showModal && (<CardPopover data={data} closeModal={closeModal} animateModal={animateModal}/>)}
      <Container onClick={enableShowModalButton === true ? openModal : undefined}>
        <CardContent data={data} />
      </Container>
    </>
  );
}
