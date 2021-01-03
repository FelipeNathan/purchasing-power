import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function BigMaxIndex(props) {

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
      <>
        <Container className={ props.className } id={ props.id }>
          <Card className="shadow">
            <Card.Header className="bg-warning w-100 align-center d-flex">
              <Card.Img variant="top" src="hamburguer.png" className="mx-auto" style={{ width: '200px', height: '200px'}} />
            </Card.Header>
            <Card.Body>
              <Card.Title>Big Mac Index</Card.Title>
              { createParagraphs(bigMacIndexDescription) }
              <Card.Title> Como é calculado o Big Mac Index? </Card.Title>
              { createParagraphs(howToCalc) }

            </Card.Body>
          </Card>
        </Container>
      </>
    )
}

function createParagraphs(paragraphs) { 
  return paragraphs.map((paragraph, index) => <Card.Text key={index}> {paragraph.trim()}</Card.Text>)
}