import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Adnim = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typedVisible, setTypedVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-4 p-2' onClick={() => setTypedVisible(true)}>Добавить тип</Button>
            <Button variant={'outline-dark'} className='mt-4 p-2' onClick={() => setBrandVisible(true)}>Добавить брэнд</Button>
            <Button variant={'outline-dark'} className='mt-4 p-2' onClick={() => setDeviceVisible(true)}>Добавить устройство</Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typedVisible} onHide={() => setTypedVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Adnim;