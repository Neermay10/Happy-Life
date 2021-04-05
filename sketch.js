var name, girl, boy, girlImage, boyImage;
var healthPoints, healthImage, healthImage1, progressBar;
var cash, cashImage, cashImage1;
var workProfileImage, Workprofile, dishWasherImage, dishWasher, deliveryImage, delivery, clerkImage, clerk, policeOfficerImage, policeOfficer, businessImage, business;
var foodProfileImage, junkFoodImage, fruitsImage, regularMealImage, organicMealImage, foodProfile, junkFood, fruits, regularMeal, organicMeal;
var database;
var gameState = 1;
var click = 0;

function preload(){
    girlImage = loadImage("./image/girlImage.png");
    boyImage = loadImage("./image/boyImage.png");
    healthImage1 = loadImage("./image/healthImage.png");
    cashImage1 = loadImage("./image/cash.png");
    workProfileImage = loadImage("./image/workProfile.png");
    dishWasherImage = loadImage("./image/dishWasher.png");
    deliveryImage = loadImage("./image/delivery.png");
    clerkImage = loadImage("./image/clerk.png");
    policeOfficerImage = loadImage("./image/policeOfficer.png");
    businessImage = loadImage("./image/businessMan.png");
    foodProfileImage = loadImage("./image/foodProfile.png");
    junkFoodImage = loadImage("./image/junkFood.png");
    fruitsImage = loadImage("./image/fruit.png");
    regularMealImage = loadImage("./image/regularMeal.png");
    organicMealImage = loadImage("./image/organicMeal.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    database = firebase.database();
    /*boy = createSprite(windowWidth/2+200,400);
    boy.addImage(boyImage);
    boy.scale = 0.43;*/

    if(gameState === 1){
        text1= createElement('h1');
        input = createInput('Name');
        button1 = createButton('Start');
        

        text1.position(windowWidth/2-190,200);
        text1.html("Enter Name & Select Gender");
        input.position(windowWidth/2-75,400);
        button1.position(windowWidth/2-15,450);

        radio = createRadio();
        radio.option('Girl',1);
        radio.option('Boy',2);
        radio.style('height', '10px');
        textAlign(CENTER);
        radio.position(windowWidth/2-45,370)
    }
    button1.mousePressed(gameOn);
    cash = 100
    healthPoints = 100
    
    
}

function draw(){
    background(235);
    inputName=database.ref('Username')
    inputName.on('value',function(data){
        Username=data.val();
    })
    drawSprites();

    let val = radio.value();
    console.log(val)
    if(gameState === 2){
        text1.hide();
        input.hide();
        button1.hide();
        radio.hide();
        //update();
        if(val === '2'){
            boy = createSprite(60,60);
            boy.addImage(boyImage);
            boy.scale = 0.20;
        }else if(val === '1'){
            girl = createSprite(60,60);
            girl.addImage(girlImage);
            girl.scale = 0.1;
        }
        name = input.value();
        textSize(20)
        text(name,160,70)

        healthImage =createSprite(60,160);
        healthImage.addImage(healthImage1);
        healthImage.scale = 0.09;
        textSize(20)
        text("Health Points",160,150);
        text(healthPoints,140,175);

        cashImage =createSprite(60,260);
        cashImage.addImage(cashImage1);
        cashImage.scale = 0.16;
        textSize(20)
        text("Cash",140,250);
        text("$"+cash,140,275);
        
        line(300,0,300,windowHeight);

        workProfile =createSprite(380,130);
        workProfile.addImage(workProfileImage);
        workProfile.scale = 0.16;
        textSize(20)
        text("Work Profile",490,130);

        dishWasher =createSprite(380,260);
        dishWasher.addImage(dishWasherImage);
        dishWasher.scale = 0.04;
        textSize(20)
        text("Dishwasher",490,245);
        text("$1",450,285);

        clerk =createSprite(380,350);
        clerk.addImage(clerkImage);
        clerk.scale = 0.16;
        textSize(20)
        text("Clerk",460,340);
        text("$10",455,370);

        delivery =createSprite(380,440);
        delivery.addImage(deliveryImage);
        delivery.scale = 0.16;
        textSize(20)
        text("Delivery",470,430);
        text("$8-$20",465,460);

        policeOfficer =createSprite(380,530);
        policeOfficer.addImage(policeOfficerImage);
        policeOfficer.scale = 0.16;
        textSize(20)
        text("Police Officer",490,520);
        text("$100",455,550);

        business =createSprite(380,625);
        business.addImage(businessImage);
        business.scale = 0.21;
        textSize(20)
        text("Business",470,615);
        text("$1000",460,645);

        foodProfile =createSprite(780,130);
        foodProfile.addImage(foodProfileImage);
        foodProfile.scale = 0.16;
        textSize(20)
        text("Food Profile",890,130);

        junkFood =createSprite(780,260);
        junkFood.addImage(junkFoodImage);
        junkFood.scale = 0.16;
        textSize(20)
        text("Junk Food",880,245);
        text("$10",855,285);

        fruits =createSprite(780,350);
        fruits.addImage(fruitsImage);
        fruits.scale = 0.16;
        textSize(20)
        text("Fruits",860,340);
        text("$25",855,370);

        regularMeal =createSprite(780,440);
        regularMeal.addImage(regularMealImage);
        regularMeal.scale = 0.18;
        textSize(20)
        text("Regular Meal",890,430);
        text("$50",855,460);

        organicMeal =createSprite(780,530);
        organicMeal.addImage(organicMealImage);
        organicMeal.scale = 0.16;
        textSize(20)
        text("Organic Meal",890,520);
        text("$100",860,550);
        
    }
    if(healthPoints >0 && healthPoints<=10){
        textSize(50);
        text("Eat Food To Be Alive",windowWidth/2,50)
    }
    if(healthPoints <= 0 ){
        button2.hide();
        button3.hide();
        textSize(50);
        text("You Are Dead!!!",windowWidth/2,50);
        textSize(30);
        text("Reload page to Start again",windowWidth/2,80);
    }
}

function update(input){
    database.ref('/').update({
        Username:input
    });
}

function gameOn(){
    gameState = 2
    textAlign(CENTER);
    sel1 = createSelect();
    sel1.position(435, 140);
    sel1.option('Dishwasher');
    sel1.option('Clerk');
    sel1.option('Delivery');
    sel1.option('Police Officer');
    sel1.option('Business');
    
    button2 = createButton('Work');
    button2.position(435, 160);
    button2.mousePressed(mySelectEvent1);

    sel2 = createSelect();
    sel2.position(835, 140);
    sel2.option('Junk Food');
    sel2.option('Fruits');
    sel2.option('Regular Meal');
    sel2.option('Organic Meal');
    
    button3 = createButton('Eat');
    button3.position(835, 160);
    button3.mousePressed(mySelectEvent2);


    //update();

}

function mySelectEvent1() {
    let job = sel1.value();
    click = click + 1;
    
    if(job === 'Dishwasher'){
        cash = cash + 1
        healthPoints = healthPoints - 5
    } else if(job === 'Clerk'){
        cash = cash + 10
        healthPoints = healthPoints - 10
    } else if(job === 'Delivery'){
        cash = cash + Math.round(random(8,20))
        healthPoints = healthPoints - 15
    } else if(job === 'Police Officer'){
        cash = cash + 100
        healthPoints = healthPoints - 20
    } else if(job === 'Business'){
        cash = cash + 1000
        healthPoints = healthPoints - 30
    }
}

function mySelectEvent2() {
    let food = sel2.value();
    
    if(healthPoints<100 && healthPoints>=0){
        if(food === 'Junk Food' && cash >=10){
            cash = cash - 10
            healthPoints = healthPoints + 10
        } else if(food === 'Fruits' && cash >=25){
            cash = cash - 25
            healthPoints = healthPoints + 14
        } else if(food === 'Regular Meal' && cash >=50){
            cash = cash - 50
            healthPoints = healthPoints + 25
        } else if(food === 'Organic Meal' && cash >=100){
            cash = cash - 100
            healthPoints = healthPoints + 50
        }
    }
}
