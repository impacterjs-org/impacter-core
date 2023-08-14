import ImpacterApp, { Text, VStack, ImpacterImage } from "../src/Impacter"
import "./style.css"

// Impacter.js
// Build App without css
ImpacterApp.render(
  new VStack(
    new ImpacterImage("/impacter.png", 200, 200).padding(30),
    new Text("Hello, ImpactImage!"),
  ),
  document.getElementById("impacter-app"),
)
