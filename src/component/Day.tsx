// import dummy from "../db/data.json";
// import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Word, { IWord } from "./Word";
// App.js에서 :day의 값이 useParams 통해서 들어옴
import useFetch from "../hooks/useFetch";

export default function Day() {
  const { day } = useParams<{day: string}>(); // 꺽쇠는 제네릭임
  const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
