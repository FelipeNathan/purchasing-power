import React, { useState, useEffect } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { format } from '../util/number-format-util'

export default function CountryCompare(props) {

    const firstCountry = props.countries[0]
    const secondCountry = props.countries[1]

    const [bmiDiff, setResultBMI] = useState(null)

    useEffect(() => {
        
        function compareBMI() {

            const firstCountryRate = firstCountry.bmi.dollar_ex
            const secondCountryRate = secondCountry.bmi.dollar_ex

            const diff = firstCountryRate - secondCountryRate

            if (diff !== 0) {
                setResultBMI(diff)
            } else {
                setResultBMI(0)
            }
        }

        compareBMI()

    }, [firstCountry, secondCountry])

    return (
      <Container style={{ height: '400px'}}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5 className="mb-3">Valor do Big Mac</h5>
            <div className="d-flex flex-row">
              <div className="font-weight-bold mr-2">{ firstCountry.country }: </div>
              <div>{ format(firstCountry.bmi.local_price, firstCountry.symbol) } </div>
            </div>
            <div className="d-flex flex-row">
              <div className="font-weight-bold mr-2">{ secondCountry.country }: </div>
              <div>{ format(secondCountry.bmi.local_price, secondCountry.symbol) } </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <h5 className="mb-3">Big Mac Index</h5>
            <div className="d-flex flex-row">
              <div className="font-weight-bold mr-2">{ firstCountry.country }: </div>
              <div> Big Mac em dollar: { format(firstCountry.bmi.dollar_price, '$') }, taxa de câmbio { format(firstCountry.bmi.dollar_ex) } </div>
            </div>
            <div className="d-flex flex-row mb-3">
              <div className="font-weight-bold mr-2">{ secondCountry.country }: </div>
              <div>Big Mac em dollar: { format(secondCountry.bmi.dollar_price, '$') }, taxa de câmbio { format(secondCountry.bmi.dollar_ex) } </div>
            </div>
            
            <div> Considerando o valor do Big Mac em dólar,  
              {!bmiDiff
                  ? ' ambos os países tem o mesmo valor monetário, segundo o cálculo do Big Mac Index'
                  : (bmiDiff < 0 ? 
                    ` ${firstCountry.country}, tem a moeda mais valorizada que ${secondCountry.country}`
                    : ` ${secondCountry.country}, tem a moeda mais valorizada que ${firstCountry.country}`)
                  }
            </div>

          </ListGroup.Item>
          <ListGroup.Item>
              <h5 className="mb-1"> Poder de compra nacional </h5>
              <p className="text-muted mb-3">Quantidade de Big Macs que se pode comprar com o salário mínimo: </p>
              <div className="d-flex flex-row">
                <div className="font-weight-bold mr-2">{ firstCountry.country }: </div>
                <div> {format(firstCountry.minWage / firstCountry.bmi.local_price, '', 0)} </div>
              </div>
              <div className="d-flex flex-row">
                <div className="font-weight-bold mr-2">{ secondCountry.country }: </div>
                <div> {format(secondCountry.minWage / secondCountry.bmi.local_price, '', 0)} </div>
              </div>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    )
}