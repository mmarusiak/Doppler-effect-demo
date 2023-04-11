class fsource{
  constructor(x, y, f, fv, s){
    this.x = x;
    this.y = y;
    this.f = f;
    this.fv = fv;
    this.s = s;
    this.t = 0;
    this.circles = []
    this.makeNewWave();
  }
  
  render(){
    this.t += 0.01;
    if(this.lastoccursion + this.f <= this.t){
      this.makeNewWave();
    }
    for (let i = 0; i < this.circles.length; i++){
      this.circles[i] += 0.01 * this.fv;
      if(this.circles[i] > 500){
        this.circles.splice(i, 1);
        continue;
      }
      noFill()
      circle(this.x, this.y, this.circles[i]);
    }
    fill(180);
    circle(this.x, this.y, this.s);
    
    // (x-a)^2 + (y-b)^2 = r^2
    // where a is x centre and b is y centre
  }
  makeNewWave(){
    this.circles.push(0)
    this.lastoccursion = this.t;
  }
}