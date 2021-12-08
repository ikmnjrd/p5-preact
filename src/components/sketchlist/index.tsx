import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const SketchList: FunctionalComponent = () => {
  return (
    <div class={style.div}>
        <Link activeClassName={style.active} href="/sketch/1">
          My first p5
        </Link>
        <Link activeClassName={style.active} href="/sketch/2">
          Quicksort
        </Link>
        <Link activeClassName={style.active} href="/sketch/3">
          Bubble Animation
        </Link>
    </div>
  );
};

export default SketchList;
