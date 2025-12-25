import { useState } from "react";
export default function LikeCounter(){
    const [thumbsUp,setThumbsUP]=useState(0);
      const [heart,setHeart]=useState(0);
        const [haha,setHaha]=useState(0);
          const [sad,setSad]=useState(0);
            const [angry,setAngry]=useState(0);

    return(

<>
<h1>This is Deepika Bhandari</h1>
<img src="https://media.licdn.com/dms/image/v2/D4E03AQH7jrUxzG9Urw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719282747625?e=2147483647&v=beta&t=S2SlGMSRp0roIkDxnGnmRlsHmtq9HBBcaPykmlGzQas"/>
<h3>Reactions:</h3>
<button onClick={()=>setThumbsUP(thumbsUp+1)}>👍🏻{thumbsUp}</button>
<button onClick={()=>setHeart(heart+1)}>❤️{heart}</button>
<button onClick={()=>setHaha(haha+1)}>😂{haha}</button>
<button onClick={()=>setSad(sad+1)}>😢{sad}</button>
<button onClick={()=>setAngry(angry+1)}>😡{angry}</button>
</>
    )
}