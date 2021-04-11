import ImpacterApp, { Color, Unit, Text, Spacer, HStack, VStack } from "../src/Impacter";

// Impacter.js
// Build App without css
ImpacterApp.render(
  new VStack(
    new Text("Start"),
    new Spacer(),
    new Text("Hihi"),
    new HStack(
      new Text("Left"),
      new Spacer(),
      new Text("right")
    )
      .background(Color.Chocolate)
      .width(80, Unit.Percent)
    ,
    new Text("Hihi"),
    new Spacer(),
    new Text("End")
  )
    .width(100, Unit.Percent)
    .height(100, Unit.Percent)
    .background(Color.Coral)
  ,document.getElementById("impacter-app")
);
