import { Text, VStack, RGBColor, Color, HStack, Unit } from "../src/Impacter"
import ImpacterApp from "../src/Impacter"
import "./style.css"

const TitleComponent = new VStack(
  new Text("Hello, Impact App").bold(),
  new Text("Designed By Steve Yu").fontSize(16),
)
  .foregroundColor(Color.White)
  .padding(20)
  .cornerRadius(10)
  .background(new RGBColor(200, 100, 100))

const SecondaryComponent = new Text("Hello World")
  .background(Color.Beige)
  .padding(20)
  .cornerRadius(10)
  .margin(10)

// Impact.js
// Build App without css
ImpacterApp.render(
  new HStack(
    new HStack(
      new VStack(TitleComponent, SecondaryComponent),
      new Text("Description")
        .foregroundColor(Color.White)
        .background(Color.Coral)
        .padding(10)
        .cornerRadius(5)
        .margin(20),
    )
      .background(Color.Tan)
      .padding(50)
      .cornerRadius(20),
  )
    .width(100, Unit.Percent)
    .height(100, Unit.Percent)
    .background(Color.Chocolate),
  document.getElementById("impacter-app"),
)
