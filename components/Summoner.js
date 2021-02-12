import Link from "next/link";
import Image from "next/image";
import * as React from "react";

export const SummonerButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <button className="btn-main-summon">
        <span className="summon">Summon</span>
        <span className="a"> a </span>
        <span className="calming">calming</span>
        <span className="cat"> cat</span>
      </button>
    </a>
  );
});

export const SmallSummonerButton = () => {
  return (
    <button className="btn-small-summon">
      <span className="summon">Summon</span>
      <span className="a"> another </span>
      <span className="calming">calming</span>
      <span className="cat"> cat</span>
    </button>
  );
};

export const Summoner = () => {
  return (
    <Link href="/cat" passHref>
      <div className="container-center">
        <SummonerButton />
      </div>
    </Link>
  );
};

export const SummonedCat = () => {
  let [catId, setCatId] = React.useState(1);
  let catUrl = `/cats/cats (${catId}).jpeg`;

  const summonNewCat = (catId) => {
    setCatId(catId);
  };

  const fixCaptionWidth = () => {
    let imgElem = document.getElementById("summonedCat");
    let capElem = document.getElementById("summonedCat-caption");
    capElem.style.width = `${imgElem.clientWidth}px`;
    capElem.style.bottom = `${
      capElem.clientHeight +
      3 +
      parseInt(
        window.getComputedStyle(imgElem).borderBottomWidth.replace("px", "")
      )
    }px`;
  };

  React.useEffect(()=>{
    setTimeout(fixCaptionWidth,100)
  })

  return (
    <React.Fragment>
      <div className="container-spread">
        <div
          className="container-summonedCat"
          onClick={() => summonNewCat(catId++)}
        >
          <img className="img-cat" id="summonedCat" src={catUrl} onLoad={fixCaptionWidth}/>
          <p className="img-caption" id="summonedCat-caption">
            A calming cat a day makes you happy.
          </p>
          {/*<SmallSummonerButton />*/}
        </div>
      </div>
    </React.Fragment>
  );
};
