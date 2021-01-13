import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={"http://zasport.zp.ua/wp-content/uploads/2020/12/3-1-800x445.jpg"} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Спортивна педагогіка</span>
                <h2>Запорізькі педагоги стали переможцями Всеукраїнського конкурсу проектів вчителів-новаторів з фізичного вихованняe</h2>
                <span>дата публікації: Грудень 11, 2020 , автор: Сергій Філоненко</span>
                <p>Добіг завершення Всеукраїнський конкурс грантів серед учителів-новаторів в рамках програми «Нова фізична культура», організований міжнародним благодійним фондом Parimatch Foundation в партнерстві з ДНУ «Інститут модернізації змісту освіти»...</p>

                <a href="/post/memories-from-summer">Читати докладніше</a>     

            </div>
        </Card>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={"http://zasport.zp.ua/wp-content/uploads/2020/12/cher2.jpg"} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Черлідинг</span>
                <h2>У Запоріжжі відбувся Кубок України з черлідингу</h2>
                <span>дата публікації: Грудень 01, 2020 , автор: «ЗА!спорт»</span>
                <p>У запорізькому палаці спорту «Юність» пройшов 16-й Кубок України с черлідингу. Як розповів президент Всеукраїнської федерації черлідингу Юрій Крикун, ці змагання закрили календар національної федерації на 2020 рік...</p>

                <a href="/post/memories-from">Читати докладніше</a>     

            </div>
        </Card>
    </div>
   )

 }

export default RecentPosts