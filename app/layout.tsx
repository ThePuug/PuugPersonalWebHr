import { Header, Footer, Divider } from './components/layout'
import './globals.css'

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body style={{backgroundImage:"url(/images/background.png)"}} className="bg-fixed bg-cover bg-center">
            <div className="container mx-auto my-8 backdrop-blur">
                <Header />
                <Divider from="header" />
                <div className="py-8 px-4 bg-white bg-opacity-30">
                    <div className="container mx-auto">
                        {children}
                    </div>
                </div>
                <Divider from="section" />
                <Footer />
            </div>
        </body>
      </html>
    )
}