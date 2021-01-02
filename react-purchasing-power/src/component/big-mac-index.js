import React, { useState, useEffect } from 'react'
import Country from './country'
import Card from 'react-bootstrap/Card'
import * as apiService from '../service/backend-api-service'
import BigMacIndexCover from './big-mac-index-cover/big-mac-index-cover'

export default function BigMaxIndex(props) {

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

      setCountries(countries.data)

    }, err => console.log(err))
  }, [])

    const bigMacIndexDescription = `
      O Big Mac Index compara os preços do Big Mac em diferentes países no mundo onde contém a cadeia de restaurantes McDonald's.</br>
      Este índice serve como um indicativo da Paridade do Poder de Compra (PPC) de cada um desses países usando como referência o Big Mac, o estudo considera o fato deste produto ser homogêneo em todos os países em que é comercializado, considerando os custos para oferecê-lo e o preço de venda.
    `.split('</br>');

    const howToCalc = `
      Para comparar o poder de compra entre países é utilizado como base o preço médio do Big Mac nos Estados Unidos, 
      indicando qual o câmbio com outras moedas para que haja a paridade</br>
      Por exemplo, se um Big Mac nos Estados Unidos custa US$ 5 e no Brasil R$ 15, então a taxa de câmbio implícita
      é de 1 dólar para 3 reais. Comparada à taxa de câmbio real, se com 1 dólar é possível trocar por mais do que 3
      reais, significa que o Real está desvalorizado frente ao Dólar
    `.split('</br>');

    return (
        <BigMacIndexCover spacing>
          <div className="container">
            { createParagraphs(bigMacIndexDescription) }

            <h4 className="text-left my-4"> Como é calculado o Big Mac Index? </h4>
            { createParagraphs(howToCalc) }

            <Card border="danger">
              <Card.Header className="danger"></Card.Header>
              <Card.Body>
                <Country
                  countries={countries}
                  name="Country1"
                />
              </Card.Body>
            </Card>
          </div>
        </BigMacIndexCover>
    )
}

function createParagraphs(paragraphs) { 
  return paragraphs.map((paragraph, index) => <p className="text-justify" key={index}> {paragraph.trim()}</p>)
}