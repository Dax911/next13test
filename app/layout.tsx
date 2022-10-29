import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <h1>this is the header</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          &copy; blabla
        </footer>
      </body>
    </html>
  )
}
