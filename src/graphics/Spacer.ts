/**
 * Spacer
 * @Description Spacer can make a space open the area between
 * @Author Steve Yu
 * @Date 2021/4/8 23:57
 * @Version 1.0
 */
import RenderableImpacterObject from "../core/RenderableImpacterObject";

class Spacer extends RenderableImpacterObject<Spacer>{
  constructor() {
    super();
    this.$chainSource = this;
  }

  render(): HTMLElement {
    super.render();
    this.$htmlElement.style.width = "100%";
    this.$htmlElement.style.height = "100%";
    return this.$htmlElement;
  }
}

export default Spacer;
