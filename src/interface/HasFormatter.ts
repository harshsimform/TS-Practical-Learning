// every class that implements HasFormatter must have property format()
export interface HasFormatter {
  format(): string;
}
