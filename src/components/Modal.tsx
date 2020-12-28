import React from 'react';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';

Modal.setAppElement('#root');

export const MemoModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div className="App">
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(true)}
      >
        メモ
      </Button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsOpen(false)}
        >
          Close
        </Button>
      </Modal>
    </div>
  );
};
