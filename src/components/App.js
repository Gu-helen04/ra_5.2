/* eslint-disable jsx-a11y/anchor-is-valid */
import '../App.css';
import Form from "./form";
import News from "./news";
import Weather from "./Weather";
import ContentBox from "./ContentBox";

function App() {
 
 const labelSrc = "https://yastatic.net/s3/home-static/_/x/Q/xk8YidkhGjIGOrFm_dL5781YA.svg";

  const politicNews = [
    {
      id: 1,
      svg: '/arrow.svg',
      text: 'Путин упростил получение автопобильных номеров',
      src: '#',
    }, {
      id: 2,
      svg: '/arrow.svg',
      text: 'В команде Зеленскогоо раскрыли план реформ на Украине',
      src: '#',
    }, {
      id: 3,
      svg: '/arrow.svg',
      text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
      src: '#',
    },{
      id: 4,
      svg: '/arrow.svg',
      text: 'Суд закрыл дело Демпартии США против России',
      src: '#',
    }, {
      id: 5,
      svg: '/arrow.svg',
      text: 'На Украине призвали создать ракеты для удара по Москве',
      src: '#',
    },
  ]; 

  const currencyExchangeNews = [
    {
      id: 'a1',
      currencyName: ' USD',
      currencyValue: '89,95 RUB',
    }, {
      id: 'a2',
      currencyName: ' EUR',
      currencyValue: '96,69 RUB',
    },
  ];



  const pictureBanner = '/1.jpg';

  const weather = {
    svg: '/weather.svg',   
    temperatureNow: '+17', 
    temperatureMorning: '+10', 
    temperatureEvening: '+18', 
  };

 
  const contentBox1 ={
    title: 'Посещаемое',
    src: '#',
    contentNews: [
      'Недвижимость - о сталинках',
      'Маркет - люстры и светильники',
      'Авто.ру - привод 4Х4 до 500 000'
    ],
  };

  const contentBox2 ={
    title: 'Карта Германии',
    src: '#',
    contentNews: [
      'Расписания',
    ],
  };

  const contentBox3 ={
    title: 'Эфир',
    src: '#',
    contentNews: [
      'Управление как искусство',
      'Ночь. Мир в это время',
      'Андрей Вознесенский...'
    ],
  }


  return (
 <>
  

  <main> 
    <div className="afterHeader">
      <News politicNews={politicNews} currencyExchangeNews={currencyExchangeNews} />
    
    </div>
    
    <nav>
      <ul className="menu-main">
        <li><a href='#'>Видео</a></li>
        <li><a href='#'>Картинки</a></li>
        <li><a href='#'>Новости</a></li>
        <li><a href='#'>Карты</a></li>
        <li><a href='#'>Макет</a></li>
        <li><a href='#'>ещё</a></li>
      </ul>
    </nav>

    <Form labelSrc={labelSrc} />
    <span>Найдет всё. Например фазы луны сегодня</span>
    <img href="#" className="pictureBanner" src={pictureBanner} alt=""/>

    <div className="preFooter">
      <Weather weather={weather} />
      <ContentBox contentBox={contentBox1} />
      <ContentBox contentBox={contentBox2} />
      <ContentBox contentBox={contentBox3} />
      
    </div>
  </main>

  <footer>
    
  </footer>
</>
  );
}

export default App;