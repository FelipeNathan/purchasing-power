import * as apiService from '../service/backend-api-service'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
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
        <>
            <h4><em>Big Mac Index</em> para o Brasil</h4>
            <Table striped hover variant="light">
                <thead>
                    <tr className="table-info">
                        <th className="align-middle text-center">Data</th>
                        <th className="align-middle text-center">Preço do Big Mac no Brasil</th>
                        <th className="align-middle text-center">Preço do Big Mac no EUA</th>
                        <th className="align-middle text-center">Taxa de câmbio no perído</th>
                        <th className="align-middle text-center">Índice de equilíbrio</th>
                        <th className="align-middle text-center">Taxa de Valorização do Real</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        brasilInfo.data.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td className="align-middle text-center">{dateFormat(row[0], 'mmm/yyyy')} </td>
                                    <td className="align-middle text-center">{format(row[1], 'R$', 2)}</td>
                                    <td className="align-middle text-center">{format(row[2], 'US$', 2)}</td>
                                    <td className="align-middle text-center">{format(row[3], 'US$', 2)}</td>
                                    <td className="align-middle text-justify">
                                        {format(row[4], 'R$', 2)}
                                        <p className="md-1">
                                            <small className="text-muted">
                                                O  Big Mac teria o mesmo valor no Brasil e no E.U.A se a taxa de câmbio fosse {format(row[4], 'R$', 2)} por US$ 1
                                            </small>
                                        </p>
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
        </>
    )
}