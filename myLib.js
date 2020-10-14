function hasCollided(b,w){
    bulletRightEdge=b.x+b.width;
    wallLeftEdge=w.x
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    else{
      return false;
    }
  }