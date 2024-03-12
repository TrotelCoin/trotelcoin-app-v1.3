import React, { useEffect, useState } from "react";

const Card = ({ text }: { text: string | JSX.Element }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const delay: number = 10;

  useEffect(() => {
    setTimeout(() => {
      setIsTyping(true);
    }, 1000);
    if (isTyping && typeof text === "string") {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
        }, delay);

        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [currentIndex, text, isTyping]);

  useEffect(() => {
    setIsTyping(true);
    setCurrentIndex(0);
  }, [text]);

  return (
    <>
      <p className="text-xl text-gray-900 dark:text-gray-100 break-words whitespace-normal">
        {typeof text === "string"
          ? text.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  transition: "opacity 0.1s",
                  opacity: index < currentIndex ? 1 : 0,
                }}
              >
                {char}
              </span>
            ))
          : text}
      </p>
    </>
  );
};

export default Card;
