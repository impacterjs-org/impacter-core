import RenderableImpacterObject from "../core/RenderableImpacterObject";

/**
 * Text
 * @Description Text Component
 * @Author Steve Yu
 * @Date 2021/4/8 19:11
 * @Version 1.0
 */
class Text extends RenderableImpacterObject<Text>{
  private $text: string;
  private $fontSize: number
  private $fontWeight: number

  constructor(text: string) {
    super();
    this.$chainSource = this;

    this.$text = text;
    this.$fontSize = 20;
    this.$fontWeight = 400;
  }

  fontSize(size: number): Text {
    this.$fontSize = size;
    return this;
  }

  bold(fontWeight = 700): Text {
    this.$fontWeight = fontWeight;
    return this;
  }

  render(): HTMLElement {
    super.render();
    this.$htmlElement.textContent = this.$text;
    this.$htmlElement.style.fontSize = `${this.$fontSize}px`;
    this.$htmlElement.style.fontWeight = `${this.$fontWeight}`;
    return this.$htmlElement;
  }
}

export default Text;
