import {customElement, property, query, queryAll, observe} from '../../../node_modules/@polymer/polymer/src/typescript/decorators.js';

@customElement('app-element')
export class AppElement extends Polymer.Element {

  @property({notify: true})
  aNum: number = 42;

  @property({notify: true})
  aString: string = 'yes';

  @property()
  aBool: boolean = true;

  lastNumChange: number;

  lastMultiChange: any[];

  @query('#num')
  numDiv: HTMLDivElement;

  @queryAll('div')
  divs: HTMLInputElement[];

  @observe('aNum')
  private _aNumChanged(newNum: number) {
    this.lastNumChange = newNum;
  }

  @observe(['aNum', 'aString'])
  private _numStringChanged(newNum: number, newString: string) {
    this.lastMultiChange = [newNum, newString];
  }

}