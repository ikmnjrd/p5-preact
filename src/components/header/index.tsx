import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>{"p(react+5)"}</h1>
            <nav>
                <Link activeClassName={style.active} href="/">
                    Home
                </Link>
                <Link activeClassName={style.active} href="/sketch/1">
                    sketch1
                </Link>
                <Link activeClassName={style.active} href="/sketch/2">
                    Quicksort
                </Link>
                {/* <Link activeClassName={style.active} href="/profile">
                    Me
                </Link>
                <Link activeClassName={style.active} href="/profile/john">
                    John
                </Link> */}
            </nav>
        </header>
    );
};

export default Header;
