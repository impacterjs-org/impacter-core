import { Measure, Unit } from "./Unit+Measure";
import { Materialable } from "../Icore/Materialable";

/**
 * WidthHeightBase
 * @Description base of the width and height
 * @Author Steve Yu
 * @Date 2021/4/8 18:59
 * @Version 1.0
 */
class WidthHeightBase {
  $raw: string

  constructor(raw: string) {
    this.$raw = raw;
  }

  texture(): string {
    return this.$raw;
  }
}

/**
 * Width
 * @Description extends the WidthHeightBase and add a material function
 * @Author Steve Yu
 * @Date 2021/4/8 18:59
 * @Version 1.0
 */
class Width extends WidthHeightBase implements Materialable{
  constructor(value: number, unit: Unit = Unit.Pixel) {
    super(Measure.getMeasureString(unit, value));
  }
  material(htmlElement: HTMLElement) {
    htmlElement.style.width = this.$raw;
  }
}

/**
 * Height
 * @Description extends the WidthHeightBase and add a material function
 * @Author Steve Yu
 * @Date 2021/4/8 18:59
 * @Version 1.0
 */
class Height extends WidthHeightBase implements Materialable{
  constructor(value: number, unit: Unit = Unit.Pixel) {
    super(Measure.getMeasureString(unit, value));
  }
  material(htmlElement: HTMLElement) {
    htmlElement.style.height = this.$raw;
  }
}

export {
  Width,
  Height
};
