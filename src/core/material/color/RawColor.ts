import { Materialable } from "../../Icore/Materialable"
import ImpacterColor from "./ImpacterColor"

/**
 * RawColor
 * @Description RawColor extends ImpacterColor, material the HTML5 raw strings
 * @Author Steve Yu
 * @Date 2021/4/8 18:50
 * @Version 1.0
 */
class RawColor extends ImpacterColor implements Materialable {
  protected $raw: string

  /**
   * construct by raw string
   * @param raw
   */
  constructor(raw: string) {
    super()
    this.$raw = raw
  }

  /**
   * material by raw string
   * @param htmlElement
   */
  material(htmlElement: HTMLElement): void {
    htmlElement.style.color = this.$raw
  }

  /**
   * return the raw value
   */
  toString(): string {
    return this.$raw
  }
}

export default RawColor
