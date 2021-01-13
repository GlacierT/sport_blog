import React from 'react'
import './style.css';
import Card from '../../components/UI/Card/index';

/**
* @author
* @function ContactUS
**/

const ContactUS = (props) => {
  return(
    <div>
      <Card>
         <div style={{textAlign: 'center'}}>
            <h2>Ви можете зв'затися з нами використавши один зі способів:</h2>
            <p>69037, г.Запорожье, пр.Соборний, 214</p>
            <p>zasport-zp@ukr.net</p>
            <p>32-59-31, 32-59-33</p>
            <h2>Правила розміщення статей:</h2>
         </div>
         <div>
           <p>1. Об'єм тексту до 3000 символів </p>
           <p>2. Не більше 3 вихідних посилань на один домен</p>
           <p>3. Максимальна довжина посилань - 5 слів, без урахування цифр</p>
         </div>
         <div style={{textAlign: 'center'}}>
            <h2>Раді усім можлиостям плідного співробітництва!</h2>
         </div>
      </Card>
      <div id="footer">
        <p>&copy;Спортивні досягнення області</p>
      </div>
    </div>
   )

 }

export default ContactUS