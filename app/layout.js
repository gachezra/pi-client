
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://sdk.minepi.com/pi-sdk.js"></script>
        <script>
          Pi.init({ version: "2.0", sandbox: true });
        </script>`
      </head>
      <body>{children}</body>
    </html>
  )
}
