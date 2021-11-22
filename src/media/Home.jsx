import React from 'react'
import styles from './Home.module.css'
import call from '../media/1961304.png'
import worker from '../media/worker.png'
import worker1 from '../media/worker1.png'
<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>

const Home = () => {
    return (
        <div>
            <div className={styles.background}>
                <img src="" alt="" />
                <div className={styles.center}>
                    <div className={styles.head}>
                        <ul>
                            <li className={styles.header}>Название</li>
                        </ul>
                        <ul className={styles.call}>
                            <li className={styles.number}><a href="tel:+1-555-555-1212">555-555-1212</a></li>
                        </ul>
                        <div className={styles.callIcon}>
                            <img src={call} alt="" className={styles.callIcon1} />
                        </div>
                    </div>
                    <img src={worker} alt="" className={styles.img} />
                    <div className={styles.about}>
                        <h1>Скорость, качество, надежность-это девиз нашей компании</h1> <br />
                        <h1>Почему стоит выбрать нас? Потому что у нас самые лучшие строители, современная техника и гениальные инженеры</h1>
                    </div>
                    <div className={styles.sale}>
                        <h1 className={styles.saleFont}>Первые 3 месяца скидка 15%</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home