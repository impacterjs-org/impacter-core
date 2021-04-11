/**
 * Unit
 * @Description unit
 * @Author Steve Yu
 * @Date 2021/4/8 18:59
 * @Version 1.0
 */
enum Unit {
  Percent, Pixel, REM
}

/**
 * Measure
 * @Description measure the unit and return the unit string
 * @Author Steve Yu
 * @Date 2021/4/8 18:59
 * @Version 1.0
 */
class Measure {
  /**
   * get measure string by unit and size
   * @param unit
   */
  static getMeasureString(unit: Unit, size: number): string {
    switch (unit) {
    case Unit.Percent:
      return `${size}%`;
    case Unit.Pixel:
      return `${size}px`;
    case Unit.REM:
      return `${size}rem`;
    }
  }
}

export {
  Unit,
  Measure
};
