import { Materialable } from "../Icore/Materialable";
import ImpacterColor from "./color/ImpacterColor";
import Color from "./color/Color";

/**
 * Border
 * @Description A Impact Object of Border style
 * @Author Steve Yu
 * @Date 2021/4/8 18:55
 * @Version 1.0
 */
class Border implements Materialable{
  private _$size: number
  private _$color: ImpacterColor

  /**
   * construct by size and color
   * @param size
   * @param color
   */
  constructor(size: number, color: ImpacterColor = Color.Black) {
    this._$size = size;
    this._$color = color;
  }

  material(htmlElement: HTMLElement): void {
    htmlElement.style.border = `${this._$size}px solid ${this._$color.toString()}`;
  }


  get $size(): number {
    return this._$size;
  }

  set $size(value: number) {
    this._$size = value;
  }

  get $color(): ImpacterColor {
    return this._$color;
  }

  set $color(value: ImpacterColor) {
    this._$color = value;
  }
}

export default Border;
