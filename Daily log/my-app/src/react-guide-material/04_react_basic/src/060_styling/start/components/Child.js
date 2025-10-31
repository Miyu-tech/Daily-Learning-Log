/**
 * [注意]レクチャーをプルダウンで選択すると、<head>タグにそのレクチャーでimport "Example.css"のように読み込んだスタイルが挿入されます。このスタイルはプルダウンを切り替えても残りつづけるため、まだcssを記述していないのにスタイルが適用されていると感じた場合にはブラウザを更新してください。
 */

import "./Child.css";
import { List } from "./List";
import React from 'react';

const Example = () => {
  return (
    <React.Fragment>
 <div>
     <div className="component">
      <h3>Hello Component</h3>
      <h3>Hello Fragument</h3>
    </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto blanditiis magni impedit ex rerum aperiam temporibus minima. Totam facere inventore similique rerum harum incidunt adipisci? Doloremque at reprehenderit sunt.</p>
      </ul>
    </div>
    </React.Fragment>
   
  );
};

export default Example;
