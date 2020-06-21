import React from 'react'
import { Container } from 'react-bootstrap'

export default function PolicyPrivacy() {

    return (
        <>
            <Container>
                <h2>Política de privacidade</h2>
                <h4>Google AdSense</h4>
                <p className="text-muted">
                    Fornecedores de terceiros, incluindo o Google, usam cookies para veicular anúncios com base nas visitas anteriores de um usuário a este site ou a outros sites.
            </p>
                <p className="text-muted">
                    Consulte: <a href="https://developers.google.com/third-party-ads/googleads-vendors">Fornecedores externos certificados pelo Google Ads </a>
                </p>
                <p className="text-muted">
                    O uso de cookies de publicidade do Google permite que ele e seus parceiros veiculem anúncios aos usuários com base em suas visitas aos seus sites e / ou outros sites na Internet.
            </p>
                <p className="text-muted">
                    Os usuários podem optar por não receber publicidade personalizada visitando <a href="https://adssettings.google.com/authenticated">Configurações de anúncios</a> e <a href="www.aboutads.info">www.aboutads.info</a> ou <a href="http://optout.networkadvertising.org">http://optout.networkadvertising.org</a>.
            </p>
            </Container >
        </>
    )
}