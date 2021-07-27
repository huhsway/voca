// import dummy from "../db/data.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Word from "./Word";
// App.js에서 :day의 값이 useParams 통해서 들어옴

export default function Day() {

  const {day} = useParams();
  // const wordList = dummy.words.filter((word) => word.day === Number(day));
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setWords(data);
    })
  }, [day]);
  // 의존성 배열에 day를 넣어줘야지 최신 값을 받아올 수 있음

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word = {word} key = {word.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
}
