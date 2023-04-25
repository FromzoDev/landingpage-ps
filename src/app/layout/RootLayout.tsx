
interface RootLayoutProps {
  children: React.ReactNode
}

import Head from "../head"



export default function RootLayout({children}: RootLayoutProps) {

  

  return (
    <div>
      <Head/>
      
      {children}
      
    </div>
  )
}
