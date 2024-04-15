import { useState } from 'react';

export default function useHandleModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, handleOpenModal, handleCloseModal };
}
