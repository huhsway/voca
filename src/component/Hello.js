import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}) {
    // props.age = 100; // 넘겨 받은 값을 수정하려면 useState 통해서 하자 오류남
    const [name, setName] = useState('Mike');
    // const [age, setAge] = useState(props.age);
    const msg = age > 19 ? '성인입니다.' : '미성년자 입니다.'
 

    return (
        <div>
            <h2 id="name"> 
                {name}({age} : {msg}) 
            </h2>
            <UserName name = {name}/>
            <button onClick={()=>{
                setName(name === "Mike" ? "Jane" : "Mike")
            }}>Change</button>
        </div>
    );
}