import ImpacterApp, {
  Circle,
  Color,
  HStack,
  VStack,
  ZStack,
} from "../src/Impacter"
import Rectangle from "../src/graphics/Rectangle"
import "./style.css"

const eye = new ZStack(
  50,
  50,
  new Circle().background(Color.FireBrick),
  new Circle(40).background(Color.White),
  new Circle(10).background(Color.Gold),
).margin(10)

const mouth = new Rectangle(40, 20).background(Color.PowderBlue)
const head = new Circle(150).background(Color.Coral)
// Impacter.js
// Build App without css
ImpacterApp.render(
  new ZStack(150, 150, head, new VStack(new HStack(eye, eye), mouth)),
  document.getElementById("impacter-app"),
)
