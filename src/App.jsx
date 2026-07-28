// import { useState } from 'react'
// import './App.css'
// import Register from './pages/register/register';
// import Landing from './pages/landing/landing'
// import PastWinnersPage from "./pages/pastWinners/PastWinnersPage";
// import { Routes, Route } from "react-router-dom";
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//      <Routes>

//       <Route path="/" element={<Landing />} />

//       <Route path="/register" element={<Register />} />
//      <Route
//           path="/past-winners" element={<PastWinnersPage />}
//         />
//     </Routes>
//     </div>
//   )
// }

// export default App;

// import { useState } from "react";
// import "./App.css";

// import { Routes, Route } from "react-router-dom";

// import Landing from "./pages/landing/landing";
// import Register from "./pages/register/register";
// import PastWinnersPage from "./pages/pastWinners/PastWinnersPage";

// import Preloader from "./components/preloader/Preloader";

// function App() {
//   const [loading, setLoading] = useState(true);

//   return (
//     <>
//       {loading ? (
//         <Preloader onFinish={() => setLoading(false)} />
//       ) : (
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/past-winners" element={<PastWinnersPage />} />
//         </Routes>
//       )}
//     </>
//   );
// }

// export default App;


import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Landing from "./pages/landing/landing";
import Register from "./pages/register/register";
import PastWinnersPage from "./pages/pastWinners/PastWinnersPage";

import Preloader from "./components/preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <Preloader setIsLoading={setLoading} />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/past-winners"
        element={<PastWinnersPage />}
      />
    </Routes>
  );
}

export default App;