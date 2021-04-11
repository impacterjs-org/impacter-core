import { Materialable } from "../../Icore/Materialable";
/**
 * ImpacterColor
 * @Description ImpacterColor is an ancestor of all color class
 * @Author Steve Yu
 * @Date 2021/4/8 18:49
 * @Version 1.0
 */
class ImpacterColor implements Materialable{
  material(htmlElement: HTMLElement): void {
    throw new Error("Method not implemented.");
  }
}

export default ImpacterColor;
