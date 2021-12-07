import { FunctionalComponent, h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';
import P5Wrapper from "../../components/p5wrapper/p5wrapper";
import sketch1 from "../../components/sketches/sketch1";
import quicksort from "../../components/sketches/quicksort";

interface Props {
  item_id: string;
}


const Book: FunctionalComponent<Props> = (props: Props) => {
  const [item, setItem] = useState<any>(() => {});
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  console.log(props);

  
  useEffect(() => {
    switch (props.item_id) {
      case "1": {
        removeCanvases() 
        setTitle("My first sketch")
        setDescription("mouse hover below area")
        setItem(() => sketch1);
        break;
      }
      case "2": {
        removeCanvases()
        setTitle("Quicksort")
        setDescription("quicksort animation")
        setItem(() => quicksort);
        break;
      }
      default: {
        removeCanvases()
        setTitle("Not Found")
        break;
      }
    }
  }, [props.item_id]);

  const removeCanvases = () => {
    const canvas = document.getElementById("canvas_area");
    canvas && canvas.childNodes.forEach((el) => el.remove()) 
  }

  return (
    <div class={style.book}>
      <h1>Title: {title}</h1>
      <p>description: {description}</p>
      <P5Wrapper sketch={item} />
    </div>
  );
};

export default Book;
