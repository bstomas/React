import { useState } from 'react'
import myPhoto from '../../assets/Images/edit.png'
import reactLogo from '../../assets/Images/React-icon.png'
import './Card.scss'

function Card({ classValue, blueBackgroundParagraph, click }) {
    const [imageSrc, setImageSrc] =useState(myPhoto)

    return (
        <div 
            className={classValue + 'card'}
            onClick={click}
            //  onMouseEnter={() => setIsReactLogo(myPhoto)}
            //  onMouseOut={() => setIsReactLogo(isReactLogo)}
        >
                <img src={imageSrc} alt="Profile"
                     onMouseEnter={() => setImageSrc(reactLogo)}
                     onMouseOut={() => setImageSrc(myPhoto)}
                     />
              <p style={{ color: 'white', marginLeft: 450, width: 50, backgroundColor: blueBackgroundParagraph ? 'blue' : '' }}>Me</p>
              <p>Full stack developer</p>
              <p>Cascais</p>
        </div>
    )
}

export default Card