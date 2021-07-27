import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dummy from "../db/data.json";
import useFetch from "../hooks/useFetch";

export default function DayList() {

  const days = useFetch("http://localhost:3001/days")

  // const [days, setDays] = useState([]);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch('http://localhost:3001/days')
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(data => {
  //     setDays(data);
  //   })
  // }, []); 
  // count 배열을 두번째 인자로 넣으면 count가 변경되었을 경우에만 실행된다. 이것을 의존성 배열이라고 함
  // useEffect에서 렌더링 직후 한번만 실행되게 하려면 두번째 인자에 빈 배열을 넣자

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
