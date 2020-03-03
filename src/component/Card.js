import React from 'react';
import Image from './Image';
import News from './News';
import Title from './Title'

const Card = (props) =>{
    return(
      <div className="cards">

        <div className="imgcont">
        <Image src={props.src} alt={props.alt} />
        <div className="content">
        <News content={props.content} />
        </div>
        <div className="title">
        <Title title={props.title} />
        </div>
        </div>

      </div>
    )
  }

  export default Card;