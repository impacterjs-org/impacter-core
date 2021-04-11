import { Text, ZStack, Group, Color, Dir, RGBColor } from "../src/Impacter";
import ImpacterApp from "../src/Impacter";

// Impacter.js
// Build App without css
ImpacterApp.render(
  new ZStack(
    100,
    100,
    new Group()
      .width(100)
      .height(100)
      .background(Color.Coral),
    new Group()
      .padding(20, Dir.leading)
      .width(100)
      .height(100)
      .background(new RGBColor(200, 100, 100))
      .cornerRadius(50),
    new Text("Hello, ZStack")
      .foregroundColor(Color.White)
  )
  ,document.getElementById("impacter-app")
);
