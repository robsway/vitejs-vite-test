import { IPerson } from '../Interfaces/IPerson'

export class Person implements IPerson {

  private _name: string = "Bob";

  public get Name() {
      return this._name;
  }

  public set Name(value) {
      this._name = value;
  }
}