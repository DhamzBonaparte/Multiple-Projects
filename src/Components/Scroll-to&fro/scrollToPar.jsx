import { useRef } from "react"

export default function ScrollToPar(){

    const ref = useRef();

    function Scroll(){
        const now = ref.current.getBoundingClientRect().top;
        window.scrollTo({
            top:now,
            behavior:"smooth"
        })
    }


    return(<>
    <button onClick={()=>Scroll()}>Scroll</button>
       c
    </>)
}