import RawColor from "./RawColor";

/**
 * HSLColor
 * @Description using (HUE, SATURATION, LIGHTNESS) to represent color
 * @Author Steve Yu
 * @Date 2021/4/11 11:24
 * @Version 1.0
 */
class HSLColor extends RawColor{
  private $hue: number
  private $saturation: number
  private $lightness: number

  constructor(hue = 0, saturation = 0, lightness = 0) {
    super(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    this.$hue = hue;
    this.$saturation = saturation;
    this.$lightness = lightness;
  }
}

export default HSLColor;
