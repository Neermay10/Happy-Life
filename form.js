class Form{
    constructor(){
        this.text1= createElement('h2');
        this.input = createInput('Name');
        this.button1 = createButton('Start');
    }
    display(){
        this.text1.position(windowWidht/2,200)
        this.text1.html("Enter Name & Select Gender")
        this.input.position(windowWidht/2,600)
        this.button1.position(windowWidht/4*3,700)
    }
}