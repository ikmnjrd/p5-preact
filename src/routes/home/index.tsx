import { FunctionalComponent, h } from 'preact';
import style from './style.css';
import P5Wrapper from "../../components/p5wrapper/p5wrapper";
import sketch1 from "../../components/sketches/sketch1";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>Home</h1>
            <p>This is the Home component.</p>
            <P5Wrapper sketch={sketch1} />
        </div>
    );
};

export default Home;
