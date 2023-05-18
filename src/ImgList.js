import'./imgList.css'
import Img from './Img';
import { useState,useTransition } from 'react';
const fs = require('./img.json');
const ImgList=()=>{
    const [isPending, startTransition] = useTransition();
    const [arr, setArr] = useState();

  
    const someEventHandler = (event) => {
        fs.readFile("products.json", "utf-8", (err, data) => {
setArr(JSON.parse(data))})
      startTransition(() => {
        // updates as transitions
        setArr(event.target.value);
      });
    }
  
    return <dive>
        <ui>
        {someEventHandler.map(item=><li className="list" key={item.id}><Img item={item} /></li>)}

        </ui>
    </dive>;
  }
export default ImgList;