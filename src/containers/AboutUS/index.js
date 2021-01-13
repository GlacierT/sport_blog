import React from 'react'
import './style.css';
import Card from '../../components/UI/Card/index';

/**
* @author
* @function ContactUS
**/

const AboutUS = (props) => {
  return(
    <div>
      <Card>
         <div style={{textAlign: 'center'}}>
            <h2>Трохи слів про нашу чудову команду</h2>
            <img src="http://zasport.zp.ua/wp-content/uploads/2019/03/QW5A6917-400x200.jpg" alt="" />
            <p>Запоріжжя називають «столицею ігрових видів спорту країни».
            <p>У місті є легкоатлетичний манеж, плавальні басейни, водні бази тенісні корти, спортивні майданчики зі штучним покриттям, палац спорту «Юність», сучасний футбольний стадіон «Славутич-Арена». Багато вузів і підприємства мають власні спортивні комплекси.
            </p>
            <p>У 2006 р в Запоріжжі діяло близько 35 дитячо-юнацьких спортивних шкіл, в яких займалося близько 11 тис. Хлопців, з якими працювали півтисячі тренерів-викладачів.</p>
            </p>
            <h2>Приєднуйтесь до нас і ми зробимо цей світ більш спортивним!</h2>
         </div>
      </Card>
      <div id="footer">
        <p>&copy;Спортивні досягнення області</p>
      </div>
    </div>
   )

 }

export default AboutUS