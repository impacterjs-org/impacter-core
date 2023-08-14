import RawColor from "./RawColor"

/**
 * RGBAColor
 * @Description
 * @Author Steve Yu
 * @Date 2021/4/11 11:38
 * @Version 1.0
 */
class RGBAColor extends RawColor {
  private $red: number
  private $green: number
  private $blue: number
  private $alpha: number

  /**
   * construct by red green blue alpha data
   * @param red
   * @param green
   * @param blue
   * @param alpha
   */
  constructor(red: number, green: number, blue: number, alpha: number) {
    super(`rgba(${red}, ${green}, ${blue}, ${alpha})`)
    this.$red = red
    this.$green = green
    this.$blue = blue
    this.$alpha = alpha
  }
}

export default RGBAColor
