import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() style;
  @HostBinding('class.card-style') cardStyle:boolean = false;
  @HostBinding('class.card-style') valueStyle:boolean = false;
  title = 'Deck Of Cards';
  public deckArray = [];
  public deckArray2= [];
  public deck
  public suitsArray= ["clubs","spades","hearts","diamonds",];
  public valuesArray= ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  public card:any;
  public myCard:any;

  ngOnInit(){
    this.makedeck();
  }

  makedeck() {
    this.deckArray =[];
    for(let i = 0; i<this.suitsArray.length; i++)
	   {
		   for(let j= 0; j<this.valuesArray.length; j++)
		  {
			 let card = {Value: this.valuesArray[j], Suit: this.suitsArray[i]};
			 this.deckArray.push(card);
		  }
	  }
    console.log(this.deckArray);
    return this.deckArray;
  }

  shuffle() {
	for (var i = 0; i <= 100; i++) //100 times shuffle can be done
	{
		let location1 = Math.floor((Math.random() * this.deckArray.length));
    let location2 = Math.floor((Math.random() * this.deckArray.length));
		let newLocation = this.deckArray[location1];
		this.deckArray[location1] = this.deckArray[location2];
    this.deckArray[location2] = newLocation;
    console.log (this.deckArray[location1]);
    console.log(this.deckArray[location2]);
	}
}

  drawCardFromDeck(){

    this.myCard = this.drawCard();
    let deckArray2 = [];
    for(let i = 0; i < this.deckArray.length; i++) {
    deckArray2.push(this.deckArray.length[i] - this.myCard);
    }
    console.log (this.myCard);
    console.log(this.deckArray.length); // cards being removed from the original deck

    if( this.myCard ) {
       this.makeCard(this.myCard.Value, this.myCard.Suit);
    } 
    else {
      alert("No more cards in the deck");
    }
  }

  drawCard(){
    let card;
    if( this.deckArray.length > 0 ) {
      let randIndex = Math.floor(Math.random() * this.deckArray.length);
      card = this.deckArray.splice( randIndex, 1 )[0];
    }
    return card;
  }

  makeCard(value,suit){ // card view : unable to render?? Angular 4 issue with appending style classes.
    {
      let card = document.createElement("div");
      let value = document.createElement("div");
      let suit = document.createElement("div");
      card.className = "card";
      value.className = "value";
      suit.className ="suit"
      card.appendChild(value);
      card.appendChild(suit);
      document.body.appendChild(card);
    }
  }

  sortCard() {
    let sortedCards= this.deckArray.sort(); 
    console.log (sortedCards);
  }

}



