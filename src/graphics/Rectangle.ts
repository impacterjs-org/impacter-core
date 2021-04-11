import RenderableImpacterObject from "../core/RenderableImpacterObject";
import { Unit } from "../core/material/Unit+Measure";
import { Height, Width } from "../core/material/Width+Height";
import Color from "../core/material/color/Color";
import Background from "../core/material/Background";

/**
 * Rectangle
 * @Description Rectangle Component
 * @Author Steve Yu
 * @Date 2021/4/9 00:31
 * @Version 1.0
 */
class Rectangle extends RenderableImpacterObject<Rectangle>{
  constructor(width = 50, height = 50, unit: Unit = Unit.Pixel) {
    super();
    this.$chainSource = this;
    this.$width = new Width(width, unit);
    this.$height = new Height(height, unit);
    this.$background = new Background(Color.defaultColor);
  }

  render(): HTMLElement {
    return super.render();
  }
}

export default Rectangle;
