/**
 * ImpacterObject
 * @Description Tag Maker Object
 * @Author Steve Yu
 * @Date 2021/4/8 19:12
 * @Version 1.0
 */
abstract class ImpacterObject {
  protected $htmlElement!: HTMLElement;

  constructor(tagName: string, create: boolean) {
    if(create) this.$htmlElement = document.createElement(tagName);
  }
}

export default ImpacterObject;
