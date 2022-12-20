import React, { useState } from 'react'

import Button from './Button'

import ManualModal from '../Manual/ManualModal'
import ImageModal from '../Manual/ImageModal';
import TextModal from '../Manual/TextModal';
import DesignModal from '../Manual/DesignModal';

const MouseEventTitle = ({ modal, visible, setVisible, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModalOpen = () => {
        setIsOpen(true);
    };

    const handleModalClose = () => {
        setIsOpen(false);
    };

    const handleModalMini = () => {
        handleModalClose();
        setVisible(!visible);
    };

    return (
        <div>
            <Button type='button' radius="50px"
                                onClick={handleModalOpen}>
                    ?
            </Button>
            <ManualModal visible={isOpen} onClose={handleModalClose} onMini={handleModalMini}>
                {
                   {
                        text: <TextModal />,
                        image: <ImageModal />,
                        design: <DesignModal />,
                   }[modal]
                }
            </ManualModal>
        </div>
    );
}
export default MouseEventTitle