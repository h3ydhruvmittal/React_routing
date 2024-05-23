import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Suspense, useState, React, lazy, useContext } from "react";
import { CountContext } from "./context";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Messages = lazy(() => import("./pages/Messages"));

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <AppBar />
//         <Routes>
//           <Route
//             path="/messages"
//             element={
//               <Suspense fallback={"Loading..."}>
//                 <Messages />
//               </Suspense>
//             }
//           />
//           <Route
//             path="/"
//             element={
//               <Suspense fallback={"Loading..."}>
//                 <Dashboard />
//               </Suspense>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function AppBar() {
//   const navigate = useNavigate();
//   return (
//     <div style={{ background: "Cyan", height: 50 }}>
//       <button
//         onClick={() => {
//           navigate("/");
//         }}
//       >
//         Dashboard
//       </button>

//       <button
//         onClick={() => {
//           navigate("/messages");
//         }}
//       >
//         Messages
//       </button>
//     </div>
//   );
// }

//PropDrilling
function App() {
  const [count, setCount] = useState(0);
  return (
    //wrap anyone that wants to use the teleported value inside a provider
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({setCount }) {
  console.log("count re-render");
  return (
    <div>
      <CountRenderer />
      <Button setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count=useContext(CountContext);
  return <div>{count}</div>;
}

function Button({setCount }) {
  const count=useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Count
      </button>
    </div>
  );
}

export default App;
