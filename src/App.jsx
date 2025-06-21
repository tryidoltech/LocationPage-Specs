import { useState } from 'react'

import './App.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router-dom'
import Booknow from './componets/Booknow'
import Whyus from './componets/Whyus'
import Faq from './componets/Faq'
import Testimonial from './componets/Testimonial'
import Service from './componets/Service'
import Area from './componets/Area'
import Form from './componets/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=''>
      <Whyus/>
      <Faq/>
       <Booknow/>
      <Testimonial/>
      <Service/>
      <Area/>
      <Form/>
    </div>
     
    </>
  )
}

export default App
