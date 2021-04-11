/**
 * FlexStack
 * @Description base of the VStack, HStack, ZStack
 * @Author Steve Yu
 * @Date 2021/4/8 19:06
 * @Version 1.0
 */
import ImpacterObject from "../core/ImpacterObject";
import RenderableImpacterObject from "../core/RenderableImpacterObject";
import { Height, Width } from "../core/material/Width+Height";


class FlexStack<T extends ImpacterObject> extends RenderableImpacterObject<T>{
  /**
   * Append All of the RenderableImpacterObject
   * and set the flex layout
   * @param rios
   */
  constructor(...rios: RenderableImpacterObject<any>[]) {
    super();
    for (let i = 0; i < rios.length; i++)
      this.$htmlElement.appendChild(rios[i].render().cloneNode(true));
    this.$htmlElement.style.display = "flex";
    this.$htmlElement.style.justifyContent = "center";
    this.$htmlElement.style.alignItems = "center";
  }

  /**
   * justifyContent to flex-start
   */
  leading(): T {
    this.$htmlElement.style.justifyContent = "flex-start";
    return this.$chainSource as T;
  }

  /**
   * justifyContent to flex-end
   */
  trailing(): T {
    this.$htmlElement.style.justifyContent = "flex-end";
    return this.$chainSource as T;
  }

  /**
   * alignItems to flex-start
   */
  top(): T {
    this.$htmlElement.style.alignItems = "flex-start";
    return this.$chainSource as T;
  }

  /**
   * alignItems to flex-end
   */
  bottom(): T {
    this.$htmlElement.style.alignItems = "flex-end";
    return this.$chainSource as T;
  }

  render(): HTMLElement {
    super.render();
    return this.$htmlElement;
  }
}

/**
 * HStack
 * @Description Adjust the RenderableImpacterObject to horizontal setup
 * @Author Steve Yu
 * @Date 2021/4/8 19:06
 * @Version 1.0
 */
class HStack extends FlexStack<HStack>{
  constructor(...rios: RenderableImpacterObject<any>[]) {
    super(...rios);
    this.$chainSource = this;
  }

  render(): HTMLElement {
    super.render();
    this.$htmlElement.style.flexDirection = "row";
    return this.$htmlElement;
  }
}

/**
 * Group
 * @Description the alias of HStack
 * @Author Steve Yu
 * @Date 2021/4/8 19:06
 * @Version 1.0
 */
class Group extends FlexStack<Group>{
  constructor(...rios: RenderableImpacterObject<any>[]) {
    super(...rios);
    this.$chainSource = this;
  }

  render(): HTMLElement {
    super.render();
    return this.$htmlElement;
  }
}

/**
 * VStack
 * @Description Adjust the RenderableImpacterObject to vertical setup
 * @Author Steve Yu
 * @Date 2021/4/8 19:06
 * @Version 1.0
 */
class VStack extends FlexStack<VStack> {
  constructor(...rios: RenderableImpacterObject<any>[]) {
    super(...rios);
    this.$chainSource = this;
  }

  render(): HTMLElement {
    super.render();
    this.$htmlElement.style.flexDirection = "column";
    return this.$htmlElement;
  }
}

/**
 * ZStack
 * @Description Adjust the RenderableImpacterObject to front setup
 * @Author Steve Yu
 * @Date 2021/4/8 19:06
 * @Version 1.0
 */
class ZStack extends FlexStack<ZStack>{
  /**
   * the default width and height using pixel unit
   * @param width
   * @param height
   * @param rios
   */
  constructor(width: number, height: number, ...rios: RenderableImpacterObject<any>[]) {
    super(...rios);
    this.$chainSource = this;
    this.$width = new Width(width);
    this.$height = new Height(height);
    this.zSetting();
  }

  /**
   * zSetting needs to change the child position absolute and
   * this ZStack change the position relative
   * Since the ZStack default width and height is zero,
   * so we calculate the children's maximum width and height to
   * the ZStack width and height
   */
  zSetting(): void {
    // change the position
    const children: HTMLCollection = this.$htmlElement.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      child.style.position = "absolute";
    }
    this.$htmlElement.style.position = "relative";
    // change the width and height
    // because the constructor have the width and height
    // the exclamation mark is security.
    this.$htmlElement.style.width = this.$width!.texture();
    this.$htmlElement.style.height = this.$height!.texture();
  }
  render(): HTMLElement {
    super.render();
    return this.$htmlElement;
  }
}

export {
  HStack,
  VStack,
  ZStack,
  Group
};
