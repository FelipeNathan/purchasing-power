import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { Container, Form } from 'react-bootstrap'
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
        <Container style={{ height: '400px'}}>
          <Form.Group>
            <Select
                options={countries}
                onChange={handleSelect}
                placeholder={"Selecione um país..."}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    borderColor: '#ffc107',
                    boxShadow: state.isFocused ? '0 0 1px #ffc107' : 'none',
                  })
                }} />
          {isLoading ? <Loading /> : <CountryInfo countryInfo={countryInfo} />}
          </Form.Group>
        </Container>
    )

}