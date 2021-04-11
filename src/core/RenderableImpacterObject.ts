import { Renderable } from "./Icore/Renderable";
import ImpacterObject from "./ImpacterObject";
import { Margin, Padding } from "./material/RelativePosition";
import Border from "./material/Border";
import CornerRadius from "./material/CornerRadius";
import Background from "./material/Background";
import ImpacterColor from "./material/color/ImpacterColor";
import Color from "./material/color/Color";
import { Height, Width } from "./material/Width+Height";
import { Unit } from "./material/Unit+Measure";
import Dir from "./material/Dir";
import ImpacterImage from "../graphics/ImpacterImage";

/**
 * ImpacterObject
 * @Description
 *    RenderableImpacterObject supports
 *    the basis of ImpacterObject to rend
 * @Author Steve Yu
 * @Date 2021/4/8 19:12
 * @Version 1.0
 */
class RenderableImpacterObject<T extends ImpacterObject> extends ImpacterObject implements Renderable {
  protected $background?: Background;
  protected $border?: Border;
  protected $textColor?: ImpacterColor;
  protected $cornerRadius?: CornerRadius;
  protected $margin?: Margin;
  protected $padding?: Padding;
  protected $width?: Width;
  protected $height?: Height;

  constructor(tagName = "div", create = true) {
    super(tagName, create);
  }

  render(): HTMLElement {
    this.material(this.$htmlElement);
    return this.$htmlElement;
  }

  /**
   * chain source is for the chain calls
   * chain function will return the $renderableImpactObject
   * @protected
   */
  protected $chainSource: T | undefined;

  margin(pos = 10, dir: Dir = Dir.all): T {
    // copy last margin
    let newMargin;
    if(this.$margin) {
      newMargin = this.$margin.copy();
    } else {
      newMargin = new Margin(0, 0, 0, 0);
    }
    // switch direction
    switch (dir) {
    case Dir.all:
      newMargin.$top = newMargin.$bottom = newMargin.$leading = newMargin.$trailing = pos;
      break;
    case Dir.horizontal:
      newMargin.$leading = newMargin.$trailing = pos;
      break;
    case Dir.vertical:
      newMargin.$top = newMargin.$bottom = pos;
      break;
    case Dir.top:
      newMargin.$top = pos;
      break;
    case Dir.bottom:
      newMargin.$bottom = pos;
      break;
    case Dir.leading:
      newMargin.$leading = pos;
      break;
    case Dir.trailing:
      newMargin.$trailing = pos;
      break;
    }
    this.$margin = newMargin;
    return this.$chainSource as T;
  }

  padding(pos = 10, dir: Dir = Dir.all): T {
    // copy last padding
    let newPadding;
    if(this.$padding) {
      newPadding = this.$padding.copy();
    } else {
      newPadding = new Padding(0, 0, 0, 0);
    }
    // switch direction
    switch (dir) {
    case Dir.all:
      newPadding.$top = newPadding.$bottom = newPadding.$leading = newPadding.$trailing = pos;
      break;
    case Dir.horizontal:
      newPadding.$leading = newPadding.$trailing = pos;
      break;
    case Dir.vertical:
      newPadding.$top = newPadding.$bottom = pos;
      break;
    case Dir.top:
      newPadding.$top = pos;
      break;
    case Dir.bottom:
      newPadding.$bottom = pos;
      break;
    case Dir.leading:
      newPadding.$leading = pos;
      break;
    case Dir.trailing:
      newPadding.$trailing = pos;
      break;
    }
    this.$padding = newPadding;
    return this.$chainSource as T;
  }

  foregroundColor(color: ImpacterColor): T {
    this.$textColor = color;
    return this.$chainSource as T;
  }

  cornerRadius(radius: number): T {
    this.$cornerRadius = new CornerRadius(radius);
    return this.$chainSource as T;
  }

  border(size: number, color: ImpacterColor = Color.defaultColor): T {
    this.$border = new Border(size, color);
    return this.$chainSource as T;
  }

  background(background: ImpacterColor|ImpacterImage): T {
    this.$background = new Background(background);
    return this.$chainSource as T;
  }

  width(width: number, unit: Unit = Unit.Pixel): T {
    this.$width = new Width(width, unit);
    return this.$chainSource as T;
  }

  height(height: number, unit: Unit = Unit.Pixel): T {
    this.$height = new Height(height, unit);
    return this.$chainSource as T;
  }

  material(htmlElement: HTMLElement): void {
    if(this.$textColor) this.$textColor.material(this.$htmlElement);
    if(this.$padding) this.$padding.material(this.$htmlElement);
    if(this.$margin) this.$margin.material(this.$htmlElement);
    if(this.$border) this.$border.material(this.$htmlElement);
    if(this.$cornerRadius) this.$cornerRadius.material(this.$htmlElement);
    if(this.$background) this.$background.material(this.$htmlElement);
    if(this.$width) this.$width.material(htmlElement);
    if(this.$height) this.$height.material(htmlElement);
  }
}

export default RenderableImpacterObject;
