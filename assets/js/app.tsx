/**
 * The base app.tsx file
 * TODO: Address issues with type errors with phoenix Socket module.
 */
// If you want to use Phoenix channels, run `mix help phx.gen.channel`
// to get started and then uncomment the line below.
// import "./user_socket.js"

// You can include dependencies in two ways.
//
// The simplest option is to put them in assets/vendor and
// import them using relative paths:
//
//     import "../vendor/some-package.js"
//
// Alternatively, you can `npm install some-package --prefix assets` and import
// them using a path starting with the package name:
//
//     import "some-package"
//

// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html"
// Establish Phoenix Socket and LiveView configuration.
// @ts-expect-error 
import {Socket} from "phoenix"
// @ts-expect-error 
import {LiveSocket} from "phoenix_live_view"
import React from "react"
import {createRoot} from "react-dom/client"
import App from "./src"

const Main = document.getElementById('main') // Grabs root element from home.html.ex

// Render React Elements
const root = createRoot(Main);
root.render(<App />);

// Phoenix stuff
let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {
  longPollFallbackMs: 2500,
  params: {_csrf_token: csrfToken}
})

// connect if there are any LiveViews on the page
liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()
// @ts-expect-error 
window.liveSocket = liveSocket

