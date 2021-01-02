import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { Card, Container, Form } from 'react-bootstrap'
import CountryInfo from './country-info'
import * as apiService from '../service/backend-api-service'
import Loading from './loading'

export default function Country(props) {

    const [isLoading, setLoading] = useState(false)
    const [countryInfo, setCountryInfo] = useState(null)

    const [countries, setCountries] = useState([])
  
    useEffect(() => {
      apiService.getCountries().then(countries => {

        countries.data.sort((a, b) => {
          if (a.name < b.name)
            return -1
          else if (a.name > b.name)
            return 1

          return 0
        });

        setCountries(countries.data.map((el, index) => {
          return {
              value: el.abbrev,
              label: el.name
          }
      }))

      }, err => console.log(err))
    }, [countries.length])


    function handleSelect(country) {

        setLoading(true)
        apiService.getCountryInfo({ country: country.value }).then(info => {

            setLoading(false)
            setCountryInfo(info.data)

            if (props.onCountrySelected){
                props.onCountrySelected(info.data, props.name)
            }
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }

    return (
        <>
        <Container className={ props.className } id={ props.id }>
          <Card className="shadow">
            <Card.Header className="bg-danger w-100 align-center d-flex">
              <div className="mx-auto border rounded-circle bg-light p-4">
                <Card.Img variant="top" src="scale.png" className="mx-auto" style={{ width: '150px', height: '150px'}} /> 
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>Comparador</Card.Title>
                <Form.Group>
                  <Select
                      options={countries}
                      onChange={handleSelect}
                      placeholder={"Selecione um país..."}
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          borderColor: '#dc3545',
                          boxShadow: state.isFocused ? '0 0 1px #dc3545' : 'none',
                        })
                      }} />
                </Form.Group>

                {isLoading ? <Loading /> : <CountryInfo countryInfo={countryInfo} />}
            </Card.Body>
          </Card>
        </Container>
        </>
    )

}