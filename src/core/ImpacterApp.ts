import { Renderable } from "./Icore/Renderable"

/**
 * ImpacterApp
 * @Description Render the Impacter App
 * @Author Steve Yu
 * @Date 2021/4/8 19:12
 * @Version 1.0
 */
class ImpacterApp {
  static initFirstElement(
    renderableObject: Renderable,
    impactRoot: HTMLElement | null,
  ) {
    // not null
    if (impactRoot == null) {
      throw new Error("Fatal Error: can not initialize this HTMLElement")
    }
    // remove all children
    if (impactRoot.children.length != 0) {
      const children = impactRoot.children
      for (let i = 0; i < children.length; i++) children[i].remove()
    }
    // default setting
    impactRoot.style.width = "100%"
    impactRoot.style.height = "100vh"
    impactRoot.style.display = "flex"
    impactRoot.style.justifyContent = "center"
    impactRoot.style.alignItems = "center"
    // render one impact object
    impactRoot.appendChild(renderableObject.render())
  }

  static render(renderableObject: Renderable, impactRoot: HTMLElement | null) {
    // init first element
    this.initFirstElement(renderableObject, impactRoot)
  }
}

export default ImpacterApp
