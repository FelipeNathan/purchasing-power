import React from 'react'
import { Card, Container } from 'react-bootstrap'

export default function NationalPurchasingPower(props) {

    const nationalPurchasingPower = `
        Poder de compra é a capacidade de adquirir bens e serviços com determinada moeda.<br/>
        Uma forma de determinar o poder de compra de uma moeda, é comparar a quantidade comprada de um determinado produto há alguns anos com a quantidade comprada nos dias de hoje, levando em consideração que foi usado a mesma quantia em dinheiro para a compra, 
        e quem determina se o poder de compra aumenta ou diminui, é a inflação.<br/>
        Por exemplo: Com o Real, se em 1995 conseguissemos comprar 6 Big Macs com R$ 20,00 e hoje conseguimos comprar apenas 1, isso significa que o Real tinha maior poder de compra no ano de 1995.<br/>
    `.split('<br/>');
    
    /*
         */
    return (
        
      <>
      <Container className={ props.className } id={ props.id }>
          <Card className="shadow">
            <Card.Header className="bg-success w-100 align-center d-flex">
              <Card.Img variant="top" src="vault.png" className="mx-auto" style={{ width: '200px', height: '200px'}} />
            </Card.Header>
            <Card.Body>
              <Card.Title>Poder de Compra</Card.Title>
                { createParagraphs(nationalPurchasingPower) }
                <Card.Title> Comparação entre países <small className="text-muted">(neste site)</small> </Card.Title> 
                <Card.Text>
                  A comparação realizada neste site, utiliza os dados buscados em <a href="https://www.quandl.com/data/ECONOMIST-The-Economist-Big-Mac-Index"> Quandl </a> como o valor do Big Mac e o dados buscados em <a href="https://pt.countryeconomy.com/mercado-laboral/salario-minimo-nacional"> Country Economy</a> como o salário mínimo do país.
                </Card.Text>
                <Card.Text>
                  A comparação do poder de compra entre os países selecionados é com base na quantidade de Big Macs que os países podem comprar com base no seu salário mínimo.
                </Card.Text>
                <Card.Text>
                  Por exemplo: Se no país 1, o valor do Big Mac é $ 10,00 e o salário mínimo é de $ 100,00, então este país pode comprar 10 dos lanches, e no país 2
                  o valor do Big Mac é $ 15,00 e o salário mínimo é de $ 120,00, então este país pode comprar 8 dos lanches, tendo estes dados, chegamos a conclusão que o país 1 tem maior poder de compra que o país 2.
                </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </>
    )
}

const createParagraphs = (paragraphs) => paragraphs.map((paragraph, index) => <Card.Text key={index}> {paragraph.trim()}</Card.Text>);