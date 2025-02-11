import Head from "next/head";

function Test() {
  const user = getProps()
  return (  
    <div className="container">
      <Head>
        <title>
          Pi Network Demo 
        </title>
        <script src="https://downloads.minepi.com/sdk/v1/prod.js"></script>
        </Head>
      <main>
        <h1 className="title"> Pi Network Demo</h1>
        <p>{user.username}</p>
      </main>
    </div>
  )
}

// This gets called on every request
async function getProps() {
  // authenticate the current user
  try {
    const user = await PiNetworkClient.Authenticate()
    console.log(`Hello ${user.username}`)
  } catch (err) {
  // Not able to fetch the user
    console.log('Fail to fetch the user.')
  }

  // Pass data to the page via props
  return { user }
}

export default Test