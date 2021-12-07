import { FunctionalComponent, h, createRef } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import _p5 from "p5";

type Props = {
  sketch: (sketch: _p5) => void;
}

const P5Wrapper: FunctionalComponent<Props> = (props) => {
  const [p5, setP5] = useState<any>(0);
  const wrapper = createRef();

  useEffect(() => {
    setP5(new _p5(props.sketch, wrapper.current));
  }, [props.sketch]);

  return <div ref={wrapper} id="canvas_area"/>;
}

export default P5Wrapper;
