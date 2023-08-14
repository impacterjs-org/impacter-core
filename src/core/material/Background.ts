import { Materialable } from "../Icore/Materialable"
import ImpacterImage from "../../graphics/ImpacterImage"
import ImpacterColor from "./color/ImpacterColor"

/**
 * Background
 * @Description A Impact Object of background style
 * @Author Steve Yu
 * @Date 2021/4/8 18:54
 * @Version 1.0
 */
class Background implements Materialable {
  private $content: ImpacterColor | ImpacterImage

  /**
   * construct by ImpacterColor or Image
   * @param content
   */
  constructor(content: ImpacterColor | ImpacterImage) {
    this.$content = content
  }

  /**
   * material by HTMLElement
   * @param htmlElement
   */
  material(htmlElement: HTMLElement): void {
    if (this.$content instanceof ImpacterColor) {
      htmlElement.style.backgroundColor = `${this.$content.toString()}`
    }
  }
}

export default Background
