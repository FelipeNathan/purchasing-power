import React, { useState, useEffect } from 'react'
import './App.css'
import Country from './component/country'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import LoadingScreen from 'react-loading-screen'
import * as apiService from './service/backend-api-service'
import CountryCompare from './component/country-compare'
import BrasilInfo from './component/brazil-info'
import BigMacIndex from './component/big-mac-index'
import NationalPurchasingPower from './component/national-purchasing-power'
import Footer from './component/footer'
import Fontes from './component/fontes'

export default function App() {

  const [countries, setCountries] = useState([])
  const [country1, setSelectedCountry1] = useState(null)
  const [country2, setSelectedCountry2] = useState(null)

  useEffect(() => {
    apiService.getCountries().then(countries => {

      countries.data.sort((a, b) => {
        if (a.name < b.name)
          return -1
        else if (a.name > b.name)
          return 1

        return 0
      });
      setCountries(countries.data)

    }, err => console.log(err))
  }, [])

  function onSelectCountry(country, elementName) {

    if (elementName === "Country1") {
      setSelectedCountry1(country)
    } else {
      setSelectedCountry2(country)
    }
  }

  return (
    <>
      <Container>
        <LoadingScreen
          loading={countries.length === 0}
          bgColor='#e9ecef'
          spinnerColor='#9ee5f8'
          textColor='#676767'
          text='Carregando dados...'
        >
          <div className="justify-content-center align-items-center">
            <Form>
              <Form.Row>
                <Col>
                  <Card border="info">
                    <Card.Header className="info"> Dados do primeiro país </Card.Header>
                    <Card.Body>
                      <Country
                        onCountrySelected={onSelectCountry}
                        countries={countries}
                        name="Country1"
                      />
                      {country1 && country2 ? <CountryCompare thisCountry={country1} compareCountry={country2} /> : null}
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card border="info">
                    <Card.Header>Dados do segundo país</Card.Header>
                    <Card.Body>
                      <Country
                        onCountrySelected={onSelectCountry}
                        countries={countries}
                        name="Country2"
                      />
                      {country1 && country2 ? <CountryCompare thisCountry={country2} compareCountry={country1} /> : null}
                    </Card.Body>
                  </Card >
                </Col>
              </Form.Row>
              <hr className="my-4" />
              <Form.Row>
                <Col>
                  <BigMacIndex />
                </Col>
                <Col>
                  <NationalPurchasingPower />
                </Col>
              </Form.Row>
              <hr className="my-4" />
              <BrasilInfo />
            </Form>
            <hr className="my-4" />
            <Fontes />
          </div>
        </LoadingScreen>
      </Container>
      <Footer />
    </>
  );
}