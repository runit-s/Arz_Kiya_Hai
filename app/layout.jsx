import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { SessionProvider } from 'next-auth/react';

export const metadata = {
  title: "आर्ज़  किया है।",
  description: "एक नई शुरुआत, आपके अंदर के कलाकार के लिए।"
}

const RoolLayout = ({children}) => {
  return (
    <html >  {/* lang = 'en*/}
      <body>
        <Provider>
          <div className="main">
            <div className='gradient' />
          </div>

          <main className='app'>
            <Nav/>
            {children}
          </main>
        </Provider>
        
      </body>
    </html>
  )
}

export default RoolLayout