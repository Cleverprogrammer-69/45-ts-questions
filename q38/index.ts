function describe_city(city:string,country:string="Pakistan"):string{
    return `${city} is in ${country}`
}
console.log(describe_city("Lahore"))
console.log(describe_city("Peshawar"));
console.log(describe_city("Paris","France"));
