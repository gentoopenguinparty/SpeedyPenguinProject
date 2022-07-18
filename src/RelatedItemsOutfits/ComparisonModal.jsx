import React from 'react';
import styled from 'styled-components';

export default function ComparisonModal({ show, setShowModal, currentProduct }) {
  // console.log('currentProductFeatures:', currentProduct);
  return (
    <Modal className={`${show ? 'show' : ''}`} onClick={() => setShowModal(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <div>{currentProduct.name}</div>
          <div>ComparedProductName</div>
        </ModalHeader>
        <ModalGrid>
          {currentProduct.features && currentProduct.features.map((item) => (
            <ModalRow
              key={item.feature}
              currentItem={item}
            />
          ))}
          {/* <ModalRow
            currentItem={currentProductFeatures[0]}
          /> */}
        </ModalGrid>
      </ModalContent>
    </Modal>
  );
}

// maybe best to create a tuple like this to map:
// [
//   { feature: ['current', 'comparison'] }
// ]

function ModalRow({ currentItem }) {
  return (
    <>
      <CurrentProductValue>{currentItem.value}</CurrentProductValue>
      <Feature>{currentItem.feature}</Feature>
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

  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  &.show {
    opacity: 1;
    pointer-events: visible;
  }
`;

const ModalContent = styled.div`
  width: 600px;
  height: 400px;

  background-color: #fff;
`;

const ModalHeader = styled.div`
  position: sticky; // should make header fixed when scrolling?
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`;

const ModalGrid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 125px 350px 125px;
  grid-template-areas: "currVal feature compVal";
  padding: 15px 0px;
`;

const CurrentProductValue = styled.div`
  //grid-area: currVal;
  text-align: center;
`;
const Feature = styled.div`
  //grid-area: feature;
  text-align: center;
`;
const ComparedProductValue = styled.div`
  //grid-area: compVal;
  text-align: center;
`;
