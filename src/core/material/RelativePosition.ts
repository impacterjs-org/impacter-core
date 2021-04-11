import { Materialable } from "../Icore/Materialable";

/**
 * RelativePosition
 * @Description contains top, bottom, leading and trailing
 * @Author Steve Yu
 * @Date 2021/4/8 18:59
 * @Version 1.0
 */
class RelativePosition {
  public $top: number;
  public $bottom: number;
  public $leading: number;
  public $trailing: number;

  constructor(top: number, bottom: number, left: number, right: number) {
    this.$top = top;
    this.$bottom = bottom;
    this.$leading = left;
    this.$trailing = right;
  }
}

/**
 * Padding
 * @Description extends RelativePosition and add the material method
 * @Author Steve Yu
 * @Date 2021/4/8 18:59
 * @Version 1.0
 */
class Padding extends RelativePosition implements Materialable{
  constructor(top: number, bottom: number, left: number, right: number) {
    super(top, bottom, left, right);
  }

  material(htmlElement: HTMLElement): void {
    htmlElement.style.paddingTop = `${this.$top}px`;
    htmlElement.style.paddingBottom = `${this.$bottom}px`;
    htmlElement.style.paddingLeft = `${this.$leading}px`;
    htmlElement.style.paddingRight = `${this.$trailing}px`;
  }

  copy(): Padding {
    return new Padding(this.$top, this.$bottom, this.$leading, this.$trailing);
  }
}

/**
 * Margin
 * @Description extends RelativePosition and add the margin method
 * @Author Steve Yu
 * @Date 2021/4/8 18:59
 * @Version 1.0
 */
class Margin extends RelativePosition implements Materialable{
  constructor(top: number, bottom: number, left: number, right: number) {
    super(top, bottom, left, right);
  }

  material(htmlElement: HTMLElement): void {
    htmlElement.style.marginTop = `${this.$top}px`;
    htmlElement.style.marginBottom = `${this.$bottom}px`;
    htmlElement.style.marginLeft = `${this.$leading}px`;
    htmlElement.style.marginRight = `${this.$trailing}px`;
  }

  copy(): Margin {
    return new Margin(this.$top, this.$bottom, this.$leading, this.$trailing);
  }
}

export {
  Padding,
  Margin
};
