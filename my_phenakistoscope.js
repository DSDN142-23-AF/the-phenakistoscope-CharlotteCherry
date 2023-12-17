const SLICE_COUNT = 18;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 246, 161, 178, 150);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(Heart);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 200, 800 );

  //var layer2 = new PLayer(big heart);
  //layer2.mode( RING );
  //layer2.set_boundary( 0, 400 );

  
}

function Heart(x, y, animation, pScope){
  fill(223, 61, 108);
  stroke (223, 61, 108); 
//scale(animation.frame*2);
scale (1.5)

  ellipse(66.6,66.6,20,20); 
  ellipse (83.2,66.6,20,20);
  triangle (91.2,72.6,75,95,58.6,72.6);
  
  

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}





