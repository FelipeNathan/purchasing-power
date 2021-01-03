import React, { useState } from 'react'
import { Container, Card, Carousel, Button } from 'react-bootstrap'
import Country from './country'
import CountryCompare from './country-compare'

export default function CountryStepSelector(props) {

    const [ indexStep, setIndexStep ] = useState(0)
    const [ selectedCountries, setSelectedCountries ] = useState([])
    
    const checkStep = (index) => {

      if (indexStep > index) {
        return "step-complete"
      } else if (indexStep === index) {
        return "step-current"
      } else {
        return ""
      }
    }

    const checkPercetage = () => {
      
      let percentage = '0';
     
      if (indexStep === 1) {
        percentage = '50%';
      } else if (indexStep === 2) {
        percentage = '100%';
      }

      return { width: percentage }
    }

    const handleChangeCountry = (c, index) => {
      const countries = [ ...selectedCountries ]
      countries[indexStep] = c
      
      setIndexStep(index)

      if (indexStep !== 2 && c !== null ) {
        setSelectedCountries(countries)
      }
    }

    const handleChangeStep = (index) => {
      if (!isStepDisabled(index)) {
        setIndexStep(index)
      }
    }

    const isStepDisabled = (stepIndex) => {
      if (stepIndex === 1 && selectedCountries.length === 0) {
        return true
      } else if (stepIndex === 2 && selectedCountries.length === 1) {
        return true
      } else {
        return false
      }
    }

    return (
        <Container className={ props.className } id={ props.id }>
          <Card className="shadow">
            <Card.Header className="bg-warning w-100 align-center d-flex">
              <div className="mx-auto border rounded-circle bg-light p-4">
                <Card.Img variant="top" src="scale.png" className="mx-auto" style={{ width: '150px', height: '150px'}} /> 
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <h5 className="text-center mb-3"> Comparador</h5>
                <ul className="step justify-content-between px-0">
                  <li className={checkStep(0)} onClick={() => handleChangeStep(0)}> 1 </li>
                  <li className={checkStep(1)} onClick={() => handleChangeStep(1)}> 2 </li>
                  <li className={checkStep(2)} onClick={() => handleChangeStep(2)}> = </li>
                </ul>
                <div className="progress" style={{ height: '5px', marginTop: '-45px' }}>
                  <div className="progress-bar bg-warning" style={checkPercetage()}role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="3"></div>
                </div>
              </Card.Title>
              <Carousel controls={ false } interval={ null } className="h-100 pt-5" activeIndex={ indexStep }>
                <Carousel.Item>
                  <Country onCountrySelected={(c) => handleChangeCountry(c, 0)} />
                </Carousel.Item>
                <Carousel.Item>
                  <Country onCountrySelected={(c) => handleChangeCountry(c, 1)}/>
                </Carousel.Item>
                <Carousel.Item>
                  { selectedCountries.length === 2 && <CountryCompare countries={ selectedCountries } /> }
                </Carousel.Item>
              </Carousel>
            </Card.Body>
            <Card.Footer className="bg-transparent">
                <div className="d-flex justify-content-between">
                  <Button variant="warning" disabled={indexStep === 0} onClick={() => handleChangeStep(indexStep - 1)}> Anterior </Button>
                  <Button variant="warning" disabled={(selectedCountries.length === indexStep) || indexStep === 2} onClick={() => handleChangeStep(indexStep + 1)}> Próximo </Button>
                </div>
              </Card.Footer>
          </Card>
        </Container>
    );
}