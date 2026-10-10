// import { useState, useEffect, useRef } from "react";

// export default function DraftEditor() {
//   const [text, setText] = useState("");
//   const inputRef = useRef(null);
//   const renderCount = useRef(0);
//   const prevTextRef = useRef(""); // stretch challenge

 
//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   // TODO 2: 
//   useEffect(() => {
//     console.log("Draft saved: " + text);

   
//     return () => {
//       prevTextRef.current = text;
//     };
//   }, [text]);

//   // TODO 3: 
//   renderCount.current += 1;
//   console.log("Render count: " + renderCount.current);

//   return (
//     <div>
//       <h2>Draft Editor</h2>
//       <input
//         ref={inputRef}
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Start typing your draft..."
      
//       />
//       <p>Character count: {text.length}</p>
//       <p>Previous text (stretch): "{prevTextRef.current}"</p>

//       {/* TODO 4: Display renderCount.current below this comment */}
//       <p>Render count: 0</p>
//     </div>
//   );
// }


//I thought it was error here but when i checked the console it was working fine.
//The typing triggers a render for a text state it is not because incrementing the ref itself request an update.
//If you want to stop typing, the ref would keep no further counting and if you increment the ref without ever changing the state 
//the screen never reflect the new number at all.
