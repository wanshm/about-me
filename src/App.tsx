import './App.css';
import GalleryEntry from './components/GalleryEntry';
import galleryData from './assets/projects.json';
import Card from './components/Card';

function App() {
  return (
    <body>
      <main>
        <h1 id='title'>Who Am I?</h1>
        <header className='sideBySide border roundCorners'>
          <img
            src='src/assets/myself.jpg'
            alt='My face'
            className='border circle'
            height='200px'
          />
          <div>
            <h2>Hello!</h2>
            <p>
              My name is{' '}
              <span className='underline' id='myname'>
                Wanshui Ma
              </span>
              , I am currently a junior enrolled at Bayside High School in the
              Computer Programming and Web Design CTE. I've have worked with
              many different languages in the past, including: HTML, CSS,
              Javascript, Typescript, Python, and Java. My hobbies include,
              enjoying the great outdoors, playing chinese yo-yo, playing
              badminton, and playing the saxophone.
            </p>
          </div>
        </header>
        <h1 className='underline'>My Hobbies:</h1>
        <div>
          <Card
            title='Playing saxophone'
            text='Started in my middle school band class and continued ever since. I enjoy improvising and playing with other people.'
            imgsrc='https://s3.amazonaws.com/cdn.prowinds.com/images/uploads/11631_6352_popup.jpg'
            side='left'
          />
          <Card
            title='Playing badminton'
            text={
              "Started playing a little while ago, badminton always works up a good sweat. It's a great way to exercise and have fun with friends."
            }
            imgsrc='https://www.badmintonavenue.com/cdn/shop/files/badminton-grass-racket.webp?v=1707584672&width=1200'
            side='right'
          />
          <Card
            title='Playing chinese yo-yo'
            text='Started at the beginning of high school. Chinese yo-yo gave me a place to be at Bayside and the opportunity to perform in front of an audience.'
            imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CdjLGozeinijdW_lP7pGVT_XVrxbSkQmkw&s'
            side='left'
          />
        </div>
        <h1 className='underline'>My Projects:</h1>
        <p>Here are some of the coding projects I've worked on in the past.</p>
        <div className='gallery scroll'>
          {galleryData.map((props) => {
            return (
              <GalleryEntry
                title={props.title}
                link={props.link}
                imgsrc={props.imgsrc}
                desc={props.desc}
              />
            );
          })}
        </div>
        <footer>
          <hr />
          <p>
            Contact Me:{' '}
            <span>
              <a href='mailto:wanshuim@nycstudents.net'>
                wanshuim@nycstudents.net
              </a>
            </span>
          </p>
        </footer>
      </main>
    </body>
  );
}

export default App;
