import Header from '../components/Header'

import "../globals.css"
import 'prismjs/themes/prism-okaidia.css' 

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">      
      <body>
        <Header />
        <main  className='m-auto'>
          {children}
        </main>                
      </body>
    </html>
  )
}
