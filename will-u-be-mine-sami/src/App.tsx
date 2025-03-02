"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "no i will not.",
      "what..?",
      "are you sure baby :(",
      "but i will love you forever",
      "and ill always keep you safe",
      "you're breaking my heart sami.",
      "PLEASE BUNNYYY",
      "im going to kms",
      "no point in living if you don't want to be with me",
      "im dead now!",
      "vio is rip 💀",
      "baby come onnnn",
      ":((((",
      "last chance to not break my heart.",
      "kidding! you have no choice but to be with me muahahahaha",
      "i love youu hehe 💝",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">yayy!! i promise to be the best boyfriend and to love you forever, also happy birthday my beautiful GIRLFRIENDDD!!! 💕💗🐇🐼 </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media.tenor.com/KDqnVi_7tZoAAAAj/panda-love.gif"
          />
          <h1 className="my-4 text-4xl">will you be my girlfriend Sami? ^_^ 🥰</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              yes i will!!
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "no i will not." : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}