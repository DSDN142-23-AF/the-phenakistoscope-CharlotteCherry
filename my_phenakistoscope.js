const SLICE_COUNT = 13;

function setup_pScope(pScope){
    pScope.output_mode(      OUTPUT_GIF(1000)    );
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("ted" , "png",27);
  pScope.load_image("pinkgun","png")
pScope.load_image("flame0","png");

}

function setup_layers(pScope){

  new PLayer(null, 246, 161, 178, );  //lets us draw the whole circle background, ignoring the boundaries


  var layer2 = new PLayer(ted);
 layer2.mode(RING);
 layer2.set_boundary( 900, 700 );
  
 var layer1 = new PLayer(Heart2);
 layer1.mode( SWIRL(3) );
 layer1.set_boundary( 700, 8 );

var layer4 = new PLayer (outsidering);
layer4.mode(RING);
layer4. set_boundary (970,1000);

let CenterImage = new PLayer(pinkgun);
  CenterImage.mode(RING);
  CenterImage.set_boundary(0,30);

let layer5 = new PLayer (flame0);
layer5.mode(RING);
layer5.set_boundary(970,1000);
}




function Heart2(x, y, animation, pScope){
  fill(0);
  stroke (0);
scale(animation.frame*2);
//scale (animation.wave(1));
  ellipse(66.6,66.6,20,20); 
  ellipse (83.2,66.6,20,20);
  triangle (91.2,72.6,75,95,58.6,72.6);}

  

function ted(x, y, animation, pScope){
  scale(2);
  pScope.draw_image_from_sequence("ted" , 100, 300, animation.frame);
  
}


function outsidering(x, y, animation, pScope){
 
  pScope.fill_background(233,61,108);

}

function pinkgun (x,y,animation,pScope){
  scale(0.5);
  if (animation.frame ==0 ){

pScope.draw_image("pinkgun",0,30);
  }
  
  
}

function flame0 (x,y,animation,pScope){
pScope.draw_image("flame0",900,y);
scale(0.5)
scale(animation.frame*2);
}





