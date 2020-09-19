class Form {

  constructor() {
    this.input = createInput("Name");
    this.input2 = createInput("");
    this.message = createElement("h3");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.image=loadImage('../images/LOGO.PNG');
   
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    
  }

  display(){
   

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 140);
    this.input2.position(displayWidth/2-40, displayHeight/2-60)
    this.message.html("Enter the reason why we need to help people in bad times");
    this.message.position(displayWidth/2-100,displayHeight/2-120);
    this.button.position(displayWidth/2 + 50, displayHeight/2+100);
    this.reset.position(displayWidth-100,20);
    this.input2.size(250,100)
   this.button.position(100,100);
    image(logo,displayWidth/2 - 50, 20,280,280)
    this.button.mousePressed(()=>{
      choice = new Choice ();
      choice.display();
    this.input.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
     
      //player.name = this.input.value();
      //playerCount+=1;
     // player.index = playerCount;
      //player.update();
      //player.updateCount(playerCount);
     // this.greeting.html("Hello " + player.name)
      //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
  });

  //}
    }
  }

