import React from 'react';
import classNames from 'classnames';
import Button from 'react-bootstrap/Button'

export default function NationalPurchasingPowerCover(props) {
    return (
        <div className={
          classNames({
            'd-flex': true,
            'flex-column': true,
            'bg-light': true,
            'pb-5': props.spacing
          })
        }>
          <div className={classNames({
              "bg-success": true,
              "d-flex": true,
              "flex-column": true,
              "mb-4": props.spacing
              })} style={{ height: '440px', opacity: '0.9'}}>
            <img src="vault.png" alt="hamburguer" className="mx-auto mt-5" style={{ width: '200px', height: '200px'}}/>
            <h2 className="text-center m-4 text-light font-weight-bold"> Poder de compra </h2>
            { props.showMore ? <Button variant="light mx-auto" href="/ppp">Ver mais</Button> : null }
          </div>
            {props.children}
        </div>
    )
}