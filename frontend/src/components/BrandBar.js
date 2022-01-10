import { observer } from 'mobx-react-lite';
import React from 'react';
import { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '../index';

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <Row className='d-flex'>
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    className='p-3'
                    onClick={() => device.setSelectedBrands(brand)}
                    style={{cursor: 'pointer'}}
                    border={brand.id === device.selectedBrand.id ? 'denger' : 'light'}
                    
                >
                    {brand.name}
                </Card> 
            )}
        </Row>
    );
});

export default BrandBar;