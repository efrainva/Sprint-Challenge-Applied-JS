class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab; 
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    // // Check to see if this.tabData is equal to 'all'
     if(this.tabData === 'all'){
       // If `all` is true, select all cards regardless of their data attribute values
       this.cards = ;
     } else {
       // else if `all` is false, only select the cards with matching this.tabData values
       this.cards = this.tabData;
     }
     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map();
    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => {
      this.selectTab();
    });
  };

  selectTab(){
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
      tab.classList.remove('.active-tab')
    });
  
    const cards = document.querySelectorAll('.card')
    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => {
      card.classList.style.display = 'none';
    })
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('.active-tab');
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = 'flex';
  }
}

let tabs = document.querySelectorAll('.tab').forEach(tab => new TabLink(tab));