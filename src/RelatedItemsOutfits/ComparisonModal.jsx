import React from 'react';
import styled from 'styled-components';

export default function ComparisonModal() {
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <div>CurrentProductName</div>
          <div>ComparedProductName</div>
        </ModalHeader>
        <ModalGrid>
          <ModalRow />
        </ModalGrid>
      </ModalContent>
    </Modal>
  );
}

function ModalRow() {
  return (
    <>
      <CurrentProductValue>CurrentVal</CurrentProductValue>
      <Characteristic>Characteristic</Characteristic>
      <ComparedProductValue>ComparedVal</ComparedProductValue>
    </>
  );
}

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const ModalContent = styled.div`
  border: 1px solid red;
  width: 600px;
  height: 400px;

  background-color: #fff;
`;

const ModalHeader = styled.div`
  border: 1px solid red;
  position: sticky; // should make header work with scrolling?
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const ModalGrid = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 125px 350px 125px;
  grid-template-areas: "currVal characteristic compVal";
  padding: 10px 0px;
`;

const CurrentProductValue = styled.div`
  grid-area: currVal;
  text-align: center;
`;
const Characteristic = styled.div`
  grid-area: characteristic;
  text-align: center;
`;
const ComparedProductValue = styled.div`
  grid-area: compVal;
  text-align: center;
`;
