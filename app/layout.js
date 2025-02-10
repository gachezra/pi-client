import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://sdk.minepi.com/pi-sdk.js"><Script/>
        <Script id="pi-sdk-init">
          {`
            window.Pi ? window.Pi.init({ 
              version: "2.0", 
              sandbox: process.env.NODE_ENV !== 'production'
            }) : null;
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
