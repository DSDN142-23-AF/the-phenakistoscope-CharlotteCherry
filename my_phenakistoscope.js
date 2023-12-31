const SLICE_COUNT = 18;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 246, 161, 178, 150);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(Heart);
  layer1.mode( SWIRL(2) );
  layer1.set_boundary( 200, 800 );

  
 
  
}

function Heart(x, y, animation, pScope){
  fill(223, 61, 108);
  stroke (223, 61, 108); 
//scale(animation.frame*2);
//scale (animation.wave(1));

  ellipse(66.6,66.6,20,20); 
  ellipse (83.2,66.6,20,20);
  triangle (91.2,72.6,75,95,58.6,72.6);
  
  
}







