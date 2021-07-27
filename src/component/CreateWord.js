import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory(); // useHistory는 리액트 라우터에서 제공하는 기능으로
  const [isLoading, setIsLoading] = useState(false); // 통신 중에 버튼을 여러번 클릭하는 경우를 방지하기 위해서 isLoading 추가

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료 되었습니다.");
          history.push(`/day/${dayRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  }

  const engRef = useRef(null);
  // useRef는 돔에 접근할 수 있게 해준다. 예를 들어 스크롤 위치를 확인하거나, 포커스를 주거나 할때 사ㅏ용 가능
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? "Saving..." : "저장"}
      </button>
    </form>
  );
}
