/**
 * Dir
 * @Description Direction
 * @Author Steve Yu
 * @Date 2021/4/8 18:58
 * @Version 1.0
 */
enum Dir {
  /**
   * leading is starting from the left position
   */
  leading,

  /**
   * trailing is starting from the right position
   */
  trailing,

  /**
   * top is starting from the up position
   */
  top,

  /**
   * bottom is starting from the down position
   */
  bottom,

  /**
   * horizontal is both leading and trailing
   */
  horizontal,

  /**
   * vertical is both top and bottom
   */
  vertical,

  /**
   * all is both top, bottom, leading and trailing
   */
  all,
}

export default Dir
