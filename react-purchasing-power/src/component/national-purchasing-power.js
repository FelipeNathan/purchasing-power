import React from 'react'

export default function NationalPurchasingPower() {

    return (
        <>
            <h4>Poder de compra nacional</h4>
            <p> Poder de compra é a capacidade de adquirir bens e serviços com determinada moeda. </p>
            <p> Uma forma de determinar o poder de compra de uma moeda, é comparar a quantidade comprada de um determinado produto há alguns anos com a quantidade comprada nos dias de hoje, levando em consideração que foi usado a mesma quantia em dinheiro para a compra, 
                e quem determina se o poder de compra aumenta ou diminui, é a inflação.</p>
            <p> Por exemplo: Com o Real, se em 1995 conseguissemos comprar 6 <em>Big Macs</em> com R$ 20,00 e hoje conseguimos comprar apenas 1, isso significa que o Real tinha maior poder de compra no ano de 1995. </p>
            
            <h4 className="mt-3">Comparação entre países <small>(neste site)</small></h4>
            <p>
                A comparação realizada neste site, utiliza os dados buscados em <a href="https://www.quandl.com/data/ECONOMIST-The-Economist-Big-Mac-Index"> Quandl </a> como o valor do <em>Big Mac</em> e o dados buscados em <a href="https://pt.countryeconomy.com/mercado-laboral/salario-minimo-nacional"> Country Economy</a> como o salário mínimo do país.
            </p>
            <p>A comparação do poder de compra entre os países selecionados é com base na quantidade de <em>Big Macs</em> que os países podem comprar com base no seu salário mínimo.</p>
            <p>
                Por exemplo: Se no país 1, o valor do <em>Big Mac</em> é $ 10,00 e o salário mínimo é de $ 100,00, então este país pode comprar 10 dos lanches, e no país 2
                o valor do <em>Big Mac</em> é $ 15,00 e o salário mínimo é de $ 120,00, então este país pode comprar 8 dos lanches, tendo estes dados, chegamos a conclusão que o país 1 tem maior poder de compra que o país 2.
            </p>
        </>
    )
}