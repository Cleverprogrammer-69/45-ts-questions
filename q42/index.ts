function show_magicians(magicians: string[]): void {
  magicians.forEach((magician) =>
    console.log(`${magician}`)
  );
}
function make_great(magicians: string[]): string[] {
  return magicians.map(magician=>{
    return magician + " Great";
  })

}

show_magicians(make_great(["Dynamo", "Andreas", "Monica"]));
