import { FunctionalComponent, h } from 'preact';
import style from './style.css';
import SketchList from '../../components/sketchlist'

const Home: FunctionalComponent = () => {
  return (
    <div class={style.home}>
      <SketchList />
      <h1>p5 practice field.</h1>
      <p>Check header link out.</p>
    </div>
  );
};

export default Home;
