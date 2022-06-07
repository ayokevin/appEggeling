import React, { useState } from 'react';
import { Card, Form, Container } from 'react-bootstrap';
import { VestInfo } from './VestInfo';


export const Search = () => {

    const [fields, setFields] = useState({ numberCardH: '' });

    const onChageCard = e => {
        setFields({
            numberCardH: e.target.value
        })
    };

    return (
        <Container>
            <Card style={{ padding: '10px' }} >
                <h3>
                    <strong>Busqueda por numero de tarjeta</strong>
                </h3>
                <Form.Group>
                    <Form.Label># Tarjeta</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ingresar el numero tarjeta"
                        onChange={onChageCard}
                        value={fields.numberCardH}
                    />
                </Form.Group>

            </Card>
            {
                <Container>
                    <VestInfo
                        numberCardH={fields.numberCardH}
                    >
                    </VestInfo>
                </Container>
            }
        </Container >
    )
}
