import { Materialable } from "../Icore/Materialable"

/**
 * CornerRadius
 * @Description A Impact Object of CornerRadius style
 * @Author Steve Yu
 * @Date 2021/4/8 18:57
 * @Version 1.0
 */
class CornerRadius implements Materialable {
  private radius: number

  /**
   * construct by radius value
   * @param radius
   */
  constructor(radius = 0) {
    this.radius = radius
  }

  material(htmlElement: HTMLElement): void {
    htmlElement.style.borderRadius = `${this.radius}px`
  }
}

export default CornerRadius
