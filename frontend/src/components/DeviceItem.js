import React, { useState } from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import star from '../assets/star.png'
import { fetchBrand } from '../http/brandAPI';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const history = useHistory();
    //console.log(history)
    const [brand, setBrand] = useState('')
    
    fetchBrand(device.brandId).then(data => setBrand(data.name))
    //console.log("sdasda", brand)
    return (
        
        <Col md={3} className={'mt-3'} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width:150, cursor:'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className='mt-1 d-flex justify-content-between align-items-center text-black-50'>
                    <div>{brand}</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image src={star} width={18} height={18}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;