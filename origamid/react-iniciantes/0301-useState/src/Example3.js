import React from 'react';
import ButtonModal from './components/ButtonModal';
import Modal from './components/Modal';

const Example3 = () => {
    const [modal, setModal] = React.useState(false);

    return (
        <div>
            <Modal modal={modal} setModal={setModal} />
            <ButtonModal setModal={setModal} />
        </div>
    )
};

export default Example3;