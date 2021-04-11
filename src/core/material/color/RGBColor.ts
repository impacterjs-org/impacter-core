import { Materialable } from "../../Icore/Materialable";
import RawColor from "./RawColor";
import HexColor from "./HexColor";

/**
 * RGBColor
 * @Description make color from (red, green, blue) value
 * @Author Steve Yu
 * @Date 2021/4/8 18:50
 * @Version 1.0
 */
class RGBColor extends RawColor implements Materialable{
  private $red: number;
  private $green: number;
  private $blue: number;

  /**
   * construct by red green blue data
   * @param red
   * @param green
   * @param blue
   */
  constructor(red: number, green: number, blue: number) {
    super(`rgb(${red}, ${green}, ${blue})`);
    this.$red = red;
    this.$green = green;
    this.$blue = blue;
  }

  toHexColor(): HexColor {
    return new HexColor("#a83838");
  }
}

export default RGBColor;
