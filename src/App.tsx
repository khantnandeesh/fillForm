import { BrowserRouter, Route, Routes } from 'react-router-dom'


import GarbaCommitteeForm from './pages/Signup'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GarbaCommitteeForm />} />
          {/* // <Route path="/*" element={<Signin />} />
          // <Route path="/blog/:id" element={<Blog />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
