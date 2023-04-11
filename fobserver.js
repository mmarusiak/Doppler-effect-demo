class fobserver{
  constructor(x, y, vx, vy, ts = 0.01){
    this.xs = x;
    this.ys = y;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.t = 0;
    this.ts = ts
  }
  
  render(){
    this.t += this.ts;
    this.x += this.vx * this.ts;
    this.y += this.vy * this.ts;
    
    fill(200, 0, 0);
    circle(this.x, this.y, 10);
  }
  
  reset(){
    this.x = this.xs;
    this.y = this.ys;
  }
}