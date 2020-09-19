class Choice{

    constructor(){
        this.greeting = createElement('h2');
        this.button = createButton('SUBMIT');
        this.input1 = createRadio();
        this.input1.option('Yes');
        this.input1.option('No');
    }

    display(){
        this.greeting.position(200,150);
        this.greeting.html("Do you want to help or skip to next level?");
        this.input1.position(730,100);
        this.button.position(200,100);
        this.button.mousePressed(()=>{
             var ans=this.input1.value()
            
             if(ans==='No'){
                alert("next level coming soon")
             }

             else{
                alert("Game Over")
             }

        })}
        

    
}
