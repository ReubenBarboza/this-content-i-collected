import React, { useEffect, useRef, useState } from "react";

import { proverbsMap } from "../data/proverbs";

const Home = () => {
  const proverbSection = useRef(null);
  const MAX_CHAPTERS = 31;
  function getRandomChapterAndVerse() {
    const chapter = Math.floor(Math.random() * MAX_CHAPTERS + 1);
    const maxVersesInChapter = parseInt(proverbsMap[chapter]);
    const verse = Math.floor(Math.random() * maxVersesInChapter + 1);
    return { chapter: chapter.toString(10), verse: verse.toString(10) };
  }
  const [proverbData, setProverbData] = useState(null);
  useEffect(() => {
    const fetchVerse = async function () {
      console.log("called");
      const chapterAndVerse = getRandomChapterAndVerse();
      const response = await fetch(
        `https://bible-api.com/Proverbs+${chapterAndVerse.chapter}:${chapterAndVerse.verse}?translation=bbe`
      );
      return await response.json();
    };

    if (parseInt(localStorage.getItem("today")) !== new Date().getDate()) {
      const setVerseInStorage = async () => {
        const data = await fetchVerse();
        localStorage.setItem("dailyVerse", JSON.stringify(data));
      };
      setVerseInStorage().then(() => {
        const data = JSON.parse(localStorage.getItem("dailyVerse"));
        setProverbData(data);
      });
    }
    localStorage.setItem("today", new Date().getDate());
    if (localStorage.getItem("dailyVerse")) {
      const verseData = JSON.parse(localStorage.getItem("dailyVerse"));
      setProverbData(verseData);
    }
  }, []);

  return (
    <div className='h-[calc(100vh-theme(height.navHeight))] bg-cyan-200'>
      <section className='h-full grid place-items-center relative'>
        <blockquote
          className='relative w-full md:w-[60vw] px-6 text-center text-[clamp(1rem,1rem+1vw,3rem)]  text-cyan-900 after:absolute after:-top-16 after:left-[50%] after:-translate-x-1/2 after:w-1/2 after:h-[0.1rem] after:bg-cyan-900/10 before:absolute before:-bottom-16 before:left-[50%] before:-translate-x-1/2 before:w-1/2 before:h-[0.1rem] before:bg-cyan-900/10'
          cite='https://www.biblegateway.com/passage/?search=1+Peter+3&version=NLT'
        >
          "And if someone asks about your hope as a believer, always be ready to
          explain it."
          <br />
          <span className='inline-block w-full text-center mt-3 text-[clamp(0.45rem,0.45rem+1vw,1.5rem)] font-thin text-cyan-800'>
            &mdash; 1 Peter 3:15b
          </span>
        </blockquote>
        <button
          className='absolute bottom-14 text-lg  text-cyan-900 border border-cyan-900 rounded-xl py-3 px-6'
          onClick={() => {
            proverbSection.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Daily Bible Proverb
        </button>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          fill='currentColor'
          className='text-cyan-900 absolute bottom-6  animate-bounce'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
          />
        </svg>
      </section>
      {proverbData ? (
        <section
          ref={proverbSection}
          className='h-full bg-cyan-300 grid place-items-center relative'
        >
          <blockquote className='relative w-full md:w-[60vw] px-6 text-center text-[clamp(1rem,1rem+1vw,3rem)]  text-cyan-900 after:absolute after:-top-16 after:left-[50%] after:-translate-x-1/2 after:w-1/2 after:h-[0.1rem] after:bg-cyan-900/10 before:absolute before:-bottom-16 before:left-[50%] before:-translate-x-1/2 before:w-1/2 before:h-[0.1rem] before:bg-cyan-900/10'>
            "{proverbData?.verses[0].text}"
            <br />
            <span className='inline-block w-full text-center mt-3 text-[clamp(0.45rem,0.45rem+1vw,1.5rem)] font-thin text-cyan-800'>
              &mdash; {proverbData?.reference} BBE
            </span>
          </blockquote>
        </section>
      ) : (
        <section
          ref={proverbSection}
          className='h-full bg-cyan-300 grid place-items-center relative'
        >
          Loading...
        </section>
      )}
    </div>
  );
};

export default Home;
