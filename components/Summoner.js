import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { quotes } from "./content";

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
        <i className="fas fa-headphones"></i>
      </button>
      <audio preload="auto" id="cat-audio" src="/purring0-short.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};

export const pickOne = (array) => {
  let nb = array.length;
  return array[Math.floor(Math.random() * nb)];
};

export const SummonedCat = ({images}) => {

  //console.log(`Image loaded ${JSON.stringify(images)}`)

  // load two images, but only display one of them
  // when a new cat is summoned, the image was hidden becomes visible,
  // and the image was visible becomes hidden, and replaced by a new image
  let [firstimage, setFirstImage] = React.useState("cats (2).jpeg")
  let [secondImage, setSecondImage] = React.useState(pickOne(images));
  let [showingImageIndex, setShowingImageIndex ] = React.useState(0)

  const summonNewCat = () => {
    let newNextImage = pickOne(images);
    if(showingImageIndex === 0){
      setShowingImageIndex(1)
      setFirstImage(newNextImage)
    }
    if(showingImageIndex === 1){
      setShowingImageIndex(0)
      setSecondImage(newNextImage)
    }
  };


  let quote = pickOne(quotes);
  let imageSrc = `/cats/${firstimage}`;
  let nextImageSrc = `/cats/${secondImage}`
  //console.log(`Loading ${imageSrc}`)

  return (
    <React.Fragment>
      <div className="container-spread">
        <div className="container-summonedCat" onClick={() => summonNewCat()}>
          <Image
            className={`img-cat ${(showingImageIndex === 0)?'':'next-image'}`}
            id="summonedCat"
            layout="fill"
            priority="true"
            objectFit="contain"
            src={imageSrc}
            title="Click to summon another cat"
          />
          <Image
            className={`img-cat ${(showingImageIndex === 1)?'':'next-image'}`}
            layout="fill"
            priority="true"
            objectFit="contain"
            src={nextImageSrc}
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
