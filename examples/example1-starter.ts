import { Text, Group, VStack, RGBColor, Color } from "../src/Impacter";
import ImpacterApp from "../src/Impacter";


const color = new RGBColor(200, 100, 100);

// Impact.js
// Build App without css
ImpacterApp.render(
  new Group(
    new VStack(
      new Text("Little Component")
        .fontSize(16)
        .bold()
        .foregroundColor(new RGBColor(200, 50, 100))
        .margin(10),
      new Text("Hello World")
        .bold()
        .border(1, color)
        .foregroundColor(color)
        .padding(10)
        .cornerRadius(10)
        .margin(10),
      new Text("Hello World")
        .bold()
        .border(1, color)
        .foregroundColor(Color.White)
        .padding(10)
        .cornerRadius(10)
        .background(new RGBColor(200, 100, 100))
        .margin(10),
    )
      .background(new RGBColor(100, 250, 100))
      .padding(30)
      .margin(20)
      .cornerRadius(20)
    ,
    new Text("Description")
      .bold()
      .foregroundColor(Color.White)
      .background(Color.Gold)
      .border(1, color)
      .padding(10)
      .cornerRadius(10)
      .margin(20)
  )
    .background(Color.Coral)
    .cornerRadius(20)
  ,document.getElementById("impacter-app")
);
