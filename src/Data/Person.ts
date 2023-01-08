import type IListItem from './Interfaces/IListItem'

export class Person implements IListItem {

  private _name: string = "Bob";

  public get Name() {
      return this._name;
  }

  public set Name(value) {
      this._name = value;
  }
}