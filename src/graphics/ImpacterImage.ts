import RenderableImpacterObject from "../core/RenderableImpacterObject";
import { Unit } from "../core/material/Unit+Measure";
import { Height, Width } from "../core/material/Width+Height";

/**
 * Image
 * @Description
 * @Author Steve Yu
 * @Date 2021/4/11 13:25
 * @Version 1.0
 */
class ImpacterImage extends RenderableImpacterObject<ImpacterImage>{
  // the copy of $htmlElement
  private $htmlImageElement!: HTMLImageElement;

  constructor(url: string, width: number, height: number, alt = "", unit: Unit = Unit.Pixel) {
    // not init in ImpacterObject
    super();
    this.$chainSource = this;
    this.$htmlImageElement = new Image(width, height);
    this.$htmlElement.append(this.$htmlImageElement);
    this.$width = new Width(width, unit);
    this.$height = new Height(height, unit);
    this.$htmlImageElement.src = url;
    this.$htmlImageElement.alt = alt;
  }
  width(width: number, unit: Unit = Unit.Pixel): ImpacterImage {
    super.width(width, unit);
    this.$htmlImageElement.width = width;
    return this;
  }
  height(height: number, unit: Unit = Unit.Pixel): ImpacterImage {
    super.height(height, unit);
    this.$htmlImageElement.height = height;
    return this;
  }
  render(): HTMLElement {
    super.render();
    return this.$htmlElement;
  }
}

export default ImpacterImage;
