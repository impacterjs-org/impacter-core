/**
 * Materialable
 * @Description
 *    One material who implements materialable
 *    can do the material function
 *    a material function can change the dom style
 * @Author Steve Yu
 * @Date 2021/4/8 19:01
 * @Version 1.0
 */
export interface Materialable {
  material(htmlElement: HTMLElement): void
}
