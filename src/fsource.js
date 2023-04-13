class fsource{
  constructor(x, y, f, fv, s, vx = 0, vy = 0, ts = 0.01){
    this.x0 = x;
    this.y0 = y;
    this.x = x;
    this.y = y;
    this.f = f;
    this.fv = fv;
    this.s = s;
    this.t = 0;
    this.vx = vx;
    this.vy = vy;
    this.ts = ts;
    this.circles = []
    this.makeNewWave();
  }
  
  render(){
    this.t += this.ts;
    this.y += this.vy * this.ts;
    this.x += this.vx * this.ts
    if(this.lastoccursion + (1/this.f) <= this.t){
      this.makeNewWave();
    }
    for (let i = 0; i < this.circles.length; i++){
      this.circles[i][2] += this.ts * this.fv;
      if(this.circles[i] > 500){
        this.circles.splice(i, 1);
        continue;
      }
      noFill()
      circle(this.circles[i][0], this.circles[i][1], this.circles[i][2]);
    }
    fill(180);
    circle(this.x, this.y, this.s);
    
    // (x-a)^2 + (y-b)^2 = r^2
    // where a is x centre and b is y centre
  }
  makeNewWave(){
    let newWave = [this.x, this.y, 0]
    this.circles.push(newWave)
    this.lastoccursion = this.t;
  }
  
  reset(){
    this.x = this.x0;
    this.y = this.y0;
    this.circles = []
  }
}