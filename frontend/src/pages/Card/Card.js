import React from 'react'
import CardItem from '../CardItem/CardItem'
import './Card.css'

function Card() {
    return (
        <>
            <div className='cards'>
                <h1>Check out these UIT Document!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/tailieunam1.png'
                                text='The Document for freshman is now available'
                                label='Freshman'
                                path='/services'
                            />
                            <CardItem
                                src='images/tailieunam2.png'
                                text='The Document for sophomore is now available'
                                label='Sophormore'
                                path='/services'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/an6.png'
                                text='The Post about the Calculus is on air'
                                label='Facebook Post'
                                path='/services'
                            />
                            <CardItem
                                src='images/an7.png'
                                text='The Post about the Linear Algebra'
                                label='Adventure'
                                path='/services'
                            />
                            <CardItem
                                src='images/an3.png'
                                text='NNSC Group is now available on Facebook Post'
                                label='Advertise'
                                path='/services'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card