import * as apiService from '../service/backend-api-service'
import React, { useState, useEffect } from 'react'
import { Table, Card, Container } from 'react-bootstrap'
import { FaArrowUp, FaArrowDown, FaInfoCircle } from 'react-icons/fa'
import dateFormat from 'dateformat'
import { format } from '../util/number-format-util'


export default function BrasilInfo(props) {

  const [brasilInfo, setBrasilInfo] = useState(null)

  useEffect(() => {
    apiService.getCountryInfo({ country: 'BRA', limit: 3 }).then(response => {
        setBrasilInfo(response.data)
    }).catch(err => console.log(err))
  }, [])

  if (!brasilInfo) {
    return null
  }

  return (
    <Container className={ props.className } id={ props.id }>
      <Card className="shadow">
        <Card.Header className="w-100 align-center d-flex bg-brasil-green">
          <Card.Img variant="top" src="brasil.webp" className="mx-auto" style={{ width: '250px' }} />
        </Card.Header>
        <Card.Body>
          <Card.Title>Big Mac Index <small className="text-muted">(Brasil)</small></Card.Title>
          
          <Table striped hover variant="light">
            <thead>
              <tr className="bg-brasil-green text-light">
                <th className="align-middle text-center">Data</th>
                <th className="align-middle text-center">Big Mac no Brasil</th>
                <th className="align-middle text-center">Big Mac no EUA</th>
                <th className="align-middle text-center">Taxa de câmbio</th>
                <th className="align-middle text-center">Índice de equilíbrio</th>
                <th className="align-middle text-center">Taxa de Valorização do Real</th>
              </tr>
            </thead>
            <tbody>
                {
                  brasilInfo.data.map((row, i) => {
                    const title = `Para o  Big Mac ter o mesmo valor no Brasil e no E.U.A a taxa de câmbio deve ser de ${format(row[4], 'R$', 2)} para US$ 1"`

                    return (
                      <tr key={i}>
                        <td className="align-middle text-center">{dateFormat(row[0], 'mmm/yyyy')} </td>
                        <td className="align-middle text-center">{format(row[1], 'R$', 2)}</td>
                        <td className="align-middle text-center">{format(row[2], 'US$', 2)}</td>
                        <td className="align-middle text-center">{format(row[3], 'US$', 2)}</td>
                        <td className="align-middle text-justify d-flex h-1">
                          <div className="mx-2 pt-1"> {format(row[4], 'R$', 2)} </div>
                          
                          <FaInfoCircle 
                            className="text-secondary my-auto"
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title={title}
                            style={{ cursor: 'pointer' }}
                          />
                          
                        </td>
                        <td className="align-middle text-center">
                          <span>{format(row[5], '', 2)}% </span>
                          {parseFloat(row[5]) >= 0 ? <FaArrowUp className="text-success" /> : <FaArrowDown className="text-danger" />}
                        </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  )
}