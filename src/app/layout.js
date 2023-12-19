import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import Nav from '../components/header/nav'


export const metadata = {
  title: 'Hokusai',
  description: 'This is a tribute page of Hokusai',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        <div className='container'>
          {children}
        </div>
      </body>
    </html>
  )
}
