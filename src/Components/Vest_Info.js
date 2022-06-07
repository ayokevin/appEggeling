import React, { useEffect, useState } from 'react'
import { Container, Card, ListGroup } from 'react-bootstrap'

import vip from '../img/emperator_quality_to_fit.png'
import emperator_t_shirt from '../img/emperator_t_shirt.png'
import spartan_guardian from '../img/spartan_guardian.png'
import pretorian_seal from '../img/pretorian_seals.png'
import pretorian_urban from '../img/pretorian_urban_tactics.png'

export const Vest_Info = ({ numberCardH }) => {

    const data = [{ numberCardH: '05CE5D', numberCardD: '380509 552829', serial: 'L374-601', ManufacturingDate: '05/2022', WarrantyExpirationDate: '05/2027', img: vip },
    { numberCardH: '05CE5E', numberCardD: '380510 552830', serial: 'L374-602', ManufacturingDate: '05/2022', WarrantyExpirationDate: '05/2027', img: emperator_t_shirt },
    { numberCardH: '05CE5F', numberCardD: '380511 552831', serial: 'L374-603', ManufacturingDate: '05/2022', WarrantyExpirationDate: '05/2027', img: spartan_guardian },
    { numberCardH: '05CE60', numberCardD: '380512 552832', serial: 'L374-604', ManufacturingDate: '05/2022', WarrantyExpirationDate: '05/2027', img: pretorian_seal },
    { numberCardH: '05CE61', numberCardD: '380513 552833', serial: 'L374-605', ManufacturingDate: '05/2022', WarrantyExpirationDate: '05/2027', img: pretorian_urban },
    ]
    const [search, setSearch] = useState(false);
    const [dataSee, setDataSee] = useState({ numberCardH: '', numberCardD: '', serial: '', ManufacturingDate: '', WarrantyExpirationDate: '', img: '' });

    useEffect(() => {

        if (numberCardH != '') {
            const filterData = data.filter(data => data.numberCardH === numberCardH);
            if (filterData != '') {
                setDataSee({
                    numberCardH: filterData[0].numberCardH,
                    numberCardD: filterData[0].numberCardD,
                    serial: filterData[0].serial,
                    ManufacturingDate: filterData[0].ManufacturingDate,
                    WarrantyExpirationDate: filterData[0].WarrantyExpirationDate,
                    img: filterData[0].img
                });
                
                setSearch(true);
            } else {
                setSearch(false);
            }
        }

    }, [numberCardH])


    return (
        <Container className='d-flex justify-content-center align-items-center align-self-center'>
            {
                search
                    ?
                    < Card style={{ width: '18rem' }
                    }>
                        <Card.Img variant="top" src={dataSee.img} />
                        <Card.Body>
                            <Card.Title>Información</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Numero de tarjeta hexadecimal: {dataSee.numberCardH}</ListGroup.Item>
                                <ListGroup.Item>Numero de tarjeta decimal: {dataSee.numberCardD}</ListGroup.Item>
                                <ListGroup.Item>Serial: {dataSee.serial}</ListGroup.Item>
                                <ListGroup.Item>Fecha de Fabricacion: {dataSee.ManufacturingDate}</ListGroup.Item>
                                <ListGroup.Item>Fecha de terminacion de garantia: {dataSee.WarrantyExpirationDate}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Registrado</small>
                        </Card.Footer>
                    </Card >
                    :
                    <h1>No se encuentra registrado</h1>
            }
        </Container >
    )
}
