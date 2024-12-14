import { response } from "../server/ApiRequest"
function App() {
  response();
  // eslint-disable-next-line no-undef
  console.log(process.env["NASA_API_URL"])
  return (
    <div>
      hello world
     
    </div>
  )
}

export default App
