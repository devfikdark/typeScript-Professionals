# Section 5.1: Enums with explicit values

By default all enum values are resolved to numbers. Let's say if you have something 
like

```ts
enum myEnum {
  JPEG,
  PNG,
  PDF
}
console.log(myEnum.PDF); // 2

enum myEnumLink {
  JPEG = <any>'image/jpeg',
  PNG = <any>'image/png',
  PDF = <any>'application/pdf'
}
console.log(myEnum.PNG); // 1

enum myEnumOnlyLink {
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  PDF = 'application/pdf',
}
console.log(myEnum.JPEG); // 0

enum MyType {
  Value = 3,
  ValueEx = 30,
  ValueEx2 = 300
}
console.log(MyType.ValueEx); // 30

enum FancyType {
  OneArr = <any>[1],
  TwoArr = <any>[2, 2],
  ThreeArr = <any>[3, 3, 3]
}
console.log(FancyType.ThreeArr); // [ 3, 3, 3 ]
```