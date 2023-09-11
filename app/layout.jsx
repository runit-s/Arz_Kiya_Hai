import '@styles/global.css';
import { Children } from 'react';

export const metadata = {
  title: "आर्ज़  किया है।",
  description: "एक नई शुरुआत, आपके अंदर के कलाकार के लिए।"
}

const RoolLayout = ({children}) => {
  return (
    <html >  {/* lang = 'en*/}
      <body>
        <div className="main">
          <div className='gradient' />
        </div>

        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RoolLayout