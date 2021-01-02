import React from 'react';
import classNames from 'classnames';
import Button from 'react-bootstrap/Button'

export default function BigMacIndexCover(props) {
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
              "bg-danger": true,
              "d-flex": true,
              "flex-column": true,
              "mb-4": props.spacing
              })} style={{ height: '440px', opacity: '0.9'}}>
            <img src="hamburguer.png" alt="hamburguer" className="mx-auto mt-5" style={{ width: '200px', height: '200px'}}/>
            <h2 className="text-center m-4 text-light font-weight-bold"> Big Mac Index </h2>
            { props.showMore ? <Button variant="warning mx-auto" href="/big-max-index">Ver mais</Button> : null }
          </div>
          
          <div className="container">
            { props.children }  
          </div>
        </div>
    )
}