import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { quotes, images } from "./content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

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

export const Purring = () => {
  const playRandomAudio = () => {
    let audioElm = document.getElementById("cat-audio");
    audioElm.play();
  };

  return (
    <div className="btn-purring">
      <button title="Summon purring" onClick={playRandomAudio}>
        {" "}
        <FontAwesomeIcon icon={faHeadphones} />
      </button>
      <audio preload="auto" id="cat-audio" src="/purring0-short.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};

export const SummonedCat = () => {

  let [image,setImage] = React.useState('cats (2).jpeg')

  const summonNewCat = () => {
    let newImage = pickOne(images)
    //console.log(`Summoning a new cat with ${newImage}`)
    setImage(newImage)
  };

  const fixCaptionWidth = () => {
    /*
    let imgElem = document.getElementById("summonedCat");
    let capElem = document.getElementById("summonedCat-caption");
    capElem.style.width = `${imgElem.clientWidth}px`;
    capElem.style.bottom = `${
      capElem.clientHeight +
      parseInt(
        window.getComputedStyle(imgElem).borderBottomWidth.replace("px", "")
      )
    }px`;
    */
  };

  React.useEffect(() => {
    setTimeout(fixCaptionWidth, 100);
  });

  const pickOne = (array) => {
    let nb = array.length;
    return array[Math.floor(Math.random() * nb)];
  };


  let quote = pickOne(quotes);
  let imageSrc = `/cats/${image}`
  //console.log(`Loading ${imageSrc}`)

  return (
    <React.Fragment>
      <div className="container-spread">
        <div
          className="container-summonedCat"
          onClick={() => summonNewCat()}
        >
          <Image
            className="img-cat"
            id="summonedCat"
            layout="fill"
            objectFit="contain"
            loading="eager"
            src={imageSrc}
            onLoad={fixCaptionWidth}
            title="Click to summon another cat"
          />
          <p className="img-caption" id="summonedCat-caption">
            {quote}
          </p>
        </div>
        <Purring />
      </div>
    </React.Fragment>
  );
};
