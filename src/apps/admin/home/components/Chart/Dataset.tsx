import { DEFAULT_THEME, MantineColor } from "@mantine/core";
import { Random, set } from "@mongez/reinforcements";

export class Dataset {
  /**
   * Dataset label
   */
  protected _label = "";

  /**
   * Dataset id
   */
  public _id = Random.string();

  /**
   * Any other data
   */
  public _moreData: any = {};

  /**
   * Dataset color
   */
  protected _color: MantineColor = "blue";

  /**
   * Background opacity
   */
  protected _opacity = 0.4;

  /**
   * Dataset data
   */
  protected _data: number[] = [];

  /**
   * Make background as gradient
   */
  public gradient() {
    return this.set("gradientBackground", true);
  }

  /**
   * Get dataset data
   */
  public getData() {
    return this._data;
  }

  /**
   * Set background opacity
   */
  public opacity(opacity: number) {
    this._opacity = opacity;

    return this;
  }

  /**
   * Background colors list
   * Usually used with doughnut charts
   */
  public backgroundColors(colors: string[]) {
    return this.set("backgroundColors", colors);
  }

  /**
   * Set more data
   */
  public set(key: string, value: any) {
    this._moreData = set(this._moreData, key, value);

    return this;
  }

  /**
   * Get custom data
   */
  public get(key: string) {
    return this._moreData[key];
  }

  /**
   * Get background Color
   */
  // public get backgroundColor() {
  //   if (this._moreData.gradientBackground) {
  //     const from = DEFAULT_THEME.fn.rgba(
  //       DEFAULT_THEME.colors[this._color][5],
  //       0.9,
  //     );
  //     const to = DEFAULT_THEME.fn.rgba(
  //       DEFAULT_THEME.colors[this._color][5],
  //       0.1,
  //     );

  //     return (context: ScriptableContext<any>) => {
  //       const ctx = context.chart.ctx;

  //       // create a gradient that goes from top to bottom for the entire chart height
  //       // the gradient height is the same as the chart height * 3 / 4
  //       const gradient = ctx.createLinearGradient(
  //         0,
  //         0,
  //         0,
  //         (context.chart.height * 3) / 4,
  //       );

  //       gradient.addColorStop(0, from);
  //       gradient.addColorStop(1, to);
  //       return gradient;
  //     };
  //   }

  //   return DEFAULT_THEME.fn.rgba(
  //     DEFAULT_THEME.colors[this._color][5],
  //     this._opacity,
  //   );
  // }

  /**
   * Set Color
   */
  public color(color: MantineColor) {
    this._color = color;

    return this;
  }

  /**
   * Set area chart Bézier curve
   */
  public curve(value: number) {
    this.set("tension", value);

    return this;
  }

  /**
   * Set label
   */
  public label(label: string) {
    this._label = label;

    return this;
  }

  /**
   * Set data
   */
  public data(data: number[]) {
    this._data = data;

    return this;
  }

  /**
   * Push value to data
   */
  public push(value: number) {
    this._data.push(value);

    return this;
  }

  /**
   * Get border color
   */
  public get borderColor() {
    const color = DEFAULT_THEME.colors[this._color][6];

    return color;
  }

  /**
   * Set id
   */
  public id(id: string) {
    this._id = id;

    return this;
  }

  /**
   * Get final dataset
   */
  public getOptions() {
    return {
      id: this._id,
      label: this._label,
      data: this._data,
      // backgroundColor: this.backgroundColor,
      borderColor: this.borderColor,
      borderWidth: 1,
      borderThickness: 1,
      ...this._moreData,
    };
  }
}

export function dataset(label: string, id?: string) {
  const datasetD = new Dataset().label(label);

  if (id) {
    return datasetD.id(id);
  }

  return datasetD;
}
