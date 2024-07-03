function make_shirt(size: string="L",text: string="I love Typescript"): string {
  return `Shirt is ready for size ${size}, have text "${text}" on it.`;
}
console.log(make_shirt());
console.log(make_shirt("Medium"))
console.log(make_shirt("S", "Love Js"))
