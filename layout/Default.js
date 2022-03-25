import React from 'react'
import Header from '../components/header/Header'
export default function Default({children}) {
  return (
    <div>
        <Header/>
        <main>
        {  children}
        </main>
    </div>
  )
}
