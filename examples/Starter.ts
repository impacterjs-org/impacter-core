import ImpacterApp, { Text, Color, HStack, VStack, ZStack, ImpacterImage } from "../src/Impacter";

// Impacter.js
// Build App without css
ImpacterApp.render(
  new VStack(
    new ImpacterImage("./assets/impacter-logo.png", 200, 200)
      .padding(30),
    new Text("Hello, ImpactImage!")
  )
  , document.getElementById("impacter-app")
);
