//create a class bike having instatnces price Max_speed, miles (miles should get set afetr every instance so set it 0)
class Bike {
  miles: number;
  constructor(public price: number, public max_speed: number) {
     this.miles = 10;
   }

  displayInfo = bike => {
      console.log(`Price: ${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}`);
}

  ride = miles => {
    this.miles += 10;
    console.log(`Riding: ${this.miles}`)
  }

  reverse = miles => {
      this.miles -= 5;
      console.log(`Reversing: ${this.miles}`)
}

}

const Bike1 = new Bike(100, 25);
  Bike1.displayInfo(Bike1);
  Bike1.ride(100);
Bike1.reverse(10);


  const Bike2 = new Bike(1000, 100);
  Bike2.displayInfo(Bike1);
  Bike2.ride(1);
  Bike2.reverse(1);



//    displayInfo() - have this method display the bike's price, maximum speed, and the total miles.
// ride() - have it display "Riding" on the screen and increase the total miles ridden by 10
// reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5...
