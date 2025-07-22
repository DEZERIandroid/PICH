 import '../Styles/Home.css'
 import CountUp from '../Docs/CountUp'
 
const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Ассаламу гIалайкум</h1>
        <p>Добро пожаловать в магазин <b>ПИХЪ</b></p>
        <p>Здесь правят сочные фрукты и крутые цены.</p>
        <ul>
          <li>Отборные фрукты для настоящих ценителей</li>
          <li>Жесткий контроль качества</li>
          <li>Безжалостно низкие цены</li>
          <li>Доставка со скоростью пули</li>
        </ul>
        <div className="home-about">
          <h2>О нас</h2>
          <p>Мы не просто продаем фрукты - мы создаем фруктовую империю. Наша команда круче спелого манго и горячее южного солнца. Мы не знаем пощады к плохому качеству и слабому сервису.</p>
          <p> Работаем с 
          <CountUp
            from={2000}
            to={2025}
            separator=""
            direction="up"
            duration={1}
            className="count-up-text"
          /> года!</p>
        </div>
      </div>
    </div>
  )
}
export default Home