import { Unit } from "../core/material/Unit+Measure"
import { Height, Width } from "../core/material/Width+Height"
import Background from "../core/material/Background"
import Color from "../core/material/color/Color"
import RenderableImpacterObject from "../core/RenderableImpacterObject"
import CornerRadius from "../core/material/CornerRadius"
import Dir from "../core/material/Dir"

/**
 * Circle
 * @Description Circle Component
 * @Author Steve Yu
 * @Date 2021/4/9 00:41
 * @Version 1.0
 */
class Circle extends RenderableImpacterObject<Circle> {
  private $diameter: number
  private $diameterUnit: Unit
  constructor(diameter = 50, unit: Unit = Unit.Pixel) {
    super()
    this.$diameter = diameter
    this.$diameterUnit = unit
    this.$chainSource = this
    this.$width = new Width(diameter, unit)
    this.$height = new Height(diameter, unit)
    this.$background = new Background(Color.defaultColor)
    this.$cornerRadius = new CornerRadius(diameter / 2)
  }

  /**
   * Circle Padding Not Works
   */
  padding(pos = 10, dir: Dir = Dir.all): Circle {
    return this
  }

  width(width: number, unit: Unit = Unit.Pixel): Circle {
    super.width(width, unit)
    super.height(width, unit)
    return this
  }

  height(height: number, unit: Unit = Unit.Pixel): Circle {
    super.width(height, unit)
    super.height(height, unit)
    return this
  }

  render(): HTMLElement {
    return super.render()
  }
}

export default Circle
