import React, { useState, useEffect } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { FaMedal } from 'react-icons/fa'
import { format } from '../util/number-format-util'

export default function CountryCompare(props) {

    const thisCountry = props.countries[0]
    const compareCountry = props.countries[1]

    const icon = <FaMedal className="text-info" />

    const [bmiDiff, setResultBMI] = useState(null)
    const [isPurchasingPowerWinner, setResultPurchasingPower] = useState(null)

    useEffect(() => {

        function compareBMI() {

            const thisCountryBigMacPrice = thisCountry.bmi.dollar_price
            const compareCountryBigMacPrice = compareCountry.bmi.dollar_price

            const diff = thisCountryBigMacPrice - compareCountryBigMacPrice

            if (diff !== 0) {
                setResultBMI(diff)
            } else {
                setResultBMI(0)
            }
        }


        function comparePurchasingPower() {
            const thisCountryCountMac = thisCountry.minWage / thisCountry.bmi.local_price
            const compareCountryCountMac = compareCountry.minWage / compareCountry.bmi.local_price

            const diff = thisCountryCountMac - compareCountryCountMac
            if (diff !== 0) {
                setResultPurchasingPower(diff > 0)
            } else {
                setResultBMI(null)
            }

        }

        compareBMI()
        comparePurchasingPower()
        
    }, [thisCountry, compareCountry])

    return (
      <Container style={{ height: '400px'}}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5 className="mb-1">Comparação</h5>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex w-100 justify-content-between">
                <p className="mb-1"> Big Mac Index</p> {bmiDiff > 0 ? icon : null}
            </div>

            {!bmiDiff
                ? <small className="text-muted"> Ambos os países tem o mesmo valor do Big Mac em dólar, tanto faz se compra aqui ou lá então! </small>
                :
                bmiDiff > 0
            ? <small className="text-muted"> Se converter a moeda do(a) {thisCountry.country} em dólar, você poderá comprar mais ou menos {format(bmiDiff, '', 2)} Big Macs no(a) {compareCountry.country}</small>
                    : <small className="text-muted"> É melhor comer Big Mac aqui antes de viajar </small>
                }

          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex w-100 justify-content-between">
                <p className="mb-1"> Poder de compra nacional </p> {isPurchasingPowerWinner ? icon : null}
            </div>
            {
                thisCountry.country
                    ? <small className="text-muted"> No(a) {thisCountry.country} você pode comprar mais ou menos {format(thisCountry.minWage / thisCountry.bmi.local_price, '', 0)} Big Macs</small>
                    : <div className="alert alert-danger text-center">Este país não tem todos os dados para comparação</div>
            }
          </ListGroup.Item>
        </ListGroup>
      </Container>
    )
}