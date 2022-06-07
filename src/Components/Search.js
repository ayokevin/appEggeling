import React, { useState } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap'
import { Vest_Info } from './Vest_Info';

export const Search = () => {

    const [fields, setFields] = useState({ numberCardH: '' });

    const onChageCard = e => {
        setFields({
            numberCardH: e.target.value
        })
    }

    return (
        <Container>
            <Card style={{ padding: '10px' }} >
                <h3><strong>Busqueda por numero de tarjeta</strong></h3>
                
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
                    <Vest_Info
                        numberCardH={fields.numberCardH}
                    >
                    </Vest_Info>
                </Container>
            }
        </Container >



    )
}
