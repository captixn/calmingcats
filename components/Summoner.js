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
  const playAudio = () => {
    let audioElm = document.getElementById("cat-audio");
    audioElm.play();
  };

  return (
    <div className="btn-purring">
      {/** Disabled for now, instead controls are used
      <button title="Summon purring" onClick={playAudio}>
        {" "}
        <i className="fas fa-headphones"></i>
      </button>
       */}
      <audio controls preload="auto" id="cat-audio" src="/purring1.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};

export const pickOne = (array, exclude = []) => {
  let filteredArray = array.filter( v => ! exclude.includes(v))
  let pickedOne = filteredArray[Math.floor(Math.random() * filteredArray.length)]
  if(pickedOne === undefined){
    throw new Error(`Couldn't select the next image with newNextImage -- excluding ${JSON.stringify(exclude)}, among ${JSON.stringify(array)}`)
  }
  return pickedOne;
};

export const SummonedCat = ({images}) => {

  //console.log(`Image loaded ${JSON.stringify(images)}`)

  // load two images, but only display one of them
  // when a new cat is summoned, the image was hidden becomes visible,
  // and the image was visible becomes hidden, and replaced by a new image
  let firstImageDefault =  pickOne(images)
  let calmingCatStateDefault = {
    firstImage : firstImageDefault,
    secondImage : pickOne(images,[firstImageDefault]),
    seenPic : [],
    seenQuote: [],
    showingImageIndex : 0,
    quote : pickOne(quotes)
  }
  let [s, setState] = React.useState(calmingCatStateDefault)

  const summonNewCat = () => {
    let newSeenPic = s.seenPic
    let newSeenQuote = s.seenQuote

    if(s.seenPic.length == images.length){
      // reset seenPic
      newSeenPic = [] 
    }
    if(s.seenQuote.length == quotes.length){
      // reset seenQuote
      newSeenQuote = []
    }
    let newNextImage = pickOne(images,newSeenPic);
    let newQuote = pickOne(quotes, newSeenQuote)
    s.seenPic.push(newNextImage)
    s.seenQuote.push(newQuote)

    if(s.showingImageIndex === 0){
      setState({
        ...s,
        seenPic : newSeenPic,
        seenQuote: newSeenQuote,
        showingImageIndex: 1,
        firstImage : newNextImage,
        quote : newQuote
      })
    }
    if(s.showingImageIndex === 1){
      setState({
        ...s,
        seenPic : newSeenPic,
        seenQuote: newSeenQuote,
        showingImageIndex: 0,
        secondImage : newNextImage,
        quote : newQuote
      })
    }

  };


  let imageSrc = `/cats/${s.firstImage}`;
  let nextImageSrc = `/cats/${s.secondImage}`

  return (
    <React.Fragment>
      <div className="container-spread">
        <div className="container-summonedCat" onClick={() => summonNewCat()}>
          <Image
            className={`img-cat ${(s.showingImageIndex === 0)?'':'next-image'}`}
            id="summonedCat"
            layout="fill"
            priority="true"
            objectFit="contain"
            src={imageSrc}
            title="Click to summon another cat"
          />
          <Image
            className={`img-cat ${(s.showingImageIndex === 1)?'':'next-image'}`}
            layout="fill"
            priority="true"
            objectFit="contain"
            src={nextImageSrc}
            title="Click to summon another cat"
          />
          <p className="img-caption" id="summonedCat-caption">
            {s.quote}
          </p>
        </div>
        <Purring />
      </div>
    </React.Fragment>
  );
};
