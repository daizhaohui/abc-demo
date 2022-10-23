export interface IDrawRect {
  x: number,
  y: number,
  w: number,
  h: number
}

export interface IDrawRectOptions {
  strokeStyle: string,
  lineWidth: number,
  selectedRect: {
    strokeStyle: string,
    lineWidth: number,
  }
}

const defaultOptions: IDrawRectOptions = {
  strokeStyle: 'blue',
  lineWidth: 2,
  selectedRect: {
    strokeStyle: 'red',
    lineWidth: 4,
  }
}


export class RectDrawer{
  private options: IDrawRectOptions;
  private ctx: any;
  private cav: any;
  constructor(option?: IDrawRectOptions) {
    this.options = option ? {
      ...defaultOptions,
      ...option
    } : defaultOptions;
  }

  clear() {
    if(this.cav && this.ctx) {
      this.ctx.clearRect(0, 0, this.cav.width, this.cav.height);
    }
  }

  /**
 * 绘制矩形
 * cav 画布， rects：矩形框集合   selectedIndex 选中矩形下标
 */
 drawRect(cav:any, ctx: any, rects: IDrawRect[], selectedIndex?:number) {
  let x = 0; 
  let y = 0; 

  this.ctx = ctx;
  this.cav = cav;
  ctx.strokeStyle = this.options.strokeStyle;
  ctx.lineWidth = this.options.lineWidth;
  /*
   *区分: 无矩形, 已有矩形无选中, 已有选中矩形
   */
  cav.onmousemove = (e:any)=>{
    // 存储当前鼠标所在矩形的下标
    let iem: number | undefined = undefined;
    x = e.offsetX;
    y = e.offsetY;

    if (rects.length === 0) 
    { 
      this.drawNewRect(cav, ctx, rects);
    } 
    else if (selectedIndex === undefined) {
      // 判断鼠标位置
      rects.forEach((value, index)=>{
        // 鼠标在右下方向
        if (value.w > 0 && value.h > 0 && x > value.x && x < value.x + value.w && y > value.y && y < value.y + value.h) {
          iem = index;
          this.drawByJudgement(cav, ctx, rects, iem);
        }
        //  鼠标在左下方向
        if (value.w < 0 && value.h > 0 && x < value.x && x > value.x + value.w && y > value.y && y < value.y + value.h) {
          iem = index;
          this.drawByJudgement(cav, ctx, rects, iem);
        }
        // 鼠标在右上方
        if (value.w > 0 && value.h < 0 && x > value.x && x < value.x + value.w && y < value.y && y > value.y + value.h) {
          iem = index;
          this.drawByJudgement(cav, ctx, rects, iem);
        }
        // 鼠标在左上方向
        if (value.w < 0 && value.h < 0 && x < value.x && x > value.x + value.w && y < value.y && y > value.y + value.h) {
          iem = index;
          this.drawByJudgement(cav, ctx, rects, iem);
        }
        // 鼠标不在矩形中
        if (iem === undefined) {
          this.drawNewRect(cav, ctx, rects);
        }
      })
    } 
    //  已有选中矩形
    else {
      for (let index = 0; index < rects.length; index++) {
        let value = rects[index];
        // 鼠标在起点角
        if (x < value.x + 5 && x > value.x - 5 && y < value.y + 5 && y > value.y - 5) {
          if (index === selectedIndex) {
            this.drawOnChanging(cav, ctx, rects, selectedIndex, 1);
            break;
          }
        } 
        // 起点横向角
        else if (x < value.x + value.w + 5 && x > value.x + value.w - 5 && y < value.y + 5 && y > value.y - 5) {
          if (index === selectedIndex) {
            this.drawOnChanging(cav, ctx, rects, selectedIndex, 2);
            break;
          }
        }
        // 起点纵向角
        else if (x < value.x + 5 && x > value.x - 5 && y < value.y + value.h + 5 && y > value.y + value.h - 5) {
          if (index === selectedIndex) {
            this.drawOnChanging(cav, ctx, rects, selectedIndex, 3);
            break;
          }
        } 
        // 在终点角
        else if (x < value.x + value.w + 5 && x > value.x + value.w - 5 && y < value.y + value.h + 5 && y > value.y + value.h - 5) {
          if (index === selectedIndex) {
            this.drawOnChanging(cav, ctx, rects, selectedIndex, 4);
              break;
          }
        } 
        // 右下方向
        else if (value.w > 0 && value.h > 0 && x > value.x && x < value.x + value.w && y > value.y && y < value.y + value.h) {
          iem = index
          this.drawByJudgement(cav, ctx, rects, index);
          break;
        } 
        // 左下方向
        else if (value.w < 0 && value.h > 0 && x < value.x && x > value.x + value.w && y > value.y && y < value.y + value.h) {
          iem = index
          this.drawByJudgement(cav, ctx, rects, index);
          break;
        } 
        // 右上方向
        else if (value.w > 0 && value.h < 0 && x > value.x && x < value.x + value.w && y < value.y && y > value.y + value.h) {
          iem = index
          this.drawByJudgement(cav, ctx, rects, index);
          break;
        } 
        // 左上方向
        else if (value.w < 0 && value.h < 0 && x < value.x && x > value.x + value.w && y < value.y && y > value.y + value.h) {
          iem = index
          this.drawByJudgement(cav, ctx, rects, index);
          break;
        } 
        else {
          if (iem === undefined) {
            this.drawNewRect(cav, ctx, rects);
          }
        }
      }
    }

    cav.onmouseout = ()=>{
      if (selectedIndex !== undefined) {
        this.drawRect(cav, ctx,rects, selectedIndex);
      }
    };
  }
  return rects;
 }

 /**
 * 编辑矩形四个角
 * position：操作矩形角的位置, 1-起点 2-起点横向 3-起点纵向 4-终点
 */
private drawOnChanging(cav:any, ctx:any, rects: IDrawRect[], i: number, position: number){
  cav.style.cursor = 'pointer'
  let mark = rects[i];

  /* 按下鼠标左键 */
  cav.onmousedown =  (e:any) => {
    let x = e.offsetX;
    let y = e.offsetY; 
    /* 移动鼠标 */
    cav.onmousemove = (em: any)=>{
      // 计算绘制数据
      let iframe: IDrawRect;
      switch (position) {
        case 1:
          iframe = {
            x: em.offsetX,
            y: em.offsetY,
            w: mark.w - (em.offsetX - x),
            h: mark.h - (em.offsetY - y)
          }
          break;
        case 2:
          iframe = {
            x: mark.x,
            y: mark.y + (em.offsetY - y),
            w: mark.w + (em.offsetX - x),
            h: mark.h - (em.offsetY - y)
          }
          break;
        case 3:
          iframe = {
            x: mark.x + (em.offsetX - x),
            y: mark.y,
            w: mark.w - (em.offsetX - x),
            h: mark.h + (em.offsetY - y)
          }
          break;
        case 4:
          iframe = {
            x: mark.x,
            y: mark.y,
            w: mark.w + (em.offsetX - x),
            h: mark.h + (em.offsetY - y)
          }
          break;
        }
        rects.splice(i, 1, iframe!);
        this.reDrawRect(cav, ctx, rects, i);
      }
      cav.onmouseout =  ()=> {
        this.reDrawRect(cav, ctx, rects);
        this.drawRect(cav,ctx,rects)
      };
      this.deleteDraw(cav, ctx, rects, i);
  }

}

/* 绘制新矩形 */
private drawNewRect (cav:any, ctx:any, rects: IDrawRect[]){
  cav.style.cursor = 'crosshair'
  // 画框状态, false时不执行画框操作
  let start = false; 
  let x = 0;
  let y = 0; 

  /* 按下鼠标左键 */
  cav.onmousedown = (e:any) => {
    start = true;
    x = e.offsetX;
    y = e.offsetY;
    this.deleteDraw(cav, ctx, rects, null)

    /* 鼠标移动 */
    cav.onmousemove = (e:any) => {
      if (start) {
        this.reDrawRect(cav, ctx, rects);
        // 设置边框为虚线
        ctx.beginPath();
        ctx.setLineDash([8, 4]);
        ctx.rect(x, y, e.offsetX - x, e.offsetY - y);
        ctx.stroke();
      }
    }
    /* 鼠标抬起 */
    cav.onmouseup = (eu: any) => {
      if (start && Math.abs(eu.offsetX - x) > 10 && Math.abs(eu.offsetY - y) > 10) {
        let frame = {
          x: x, y: y, w: eu.offsetX - x, h: eu.offsetY - y
        };
        rects.push(frame);
        this.reDrawRect(cav, ctx, rects);
        start = false
        this.drawRect(cav,ctx,rects)
      } 
      else {
        this.reDrawRect(cav, ctx, rects);
        start = false
        this.drawRect(cav, ctx,rects)
      }
    };
    cav.onmouseout = (eo: any)=>{
      if (start && Math.abs(eo.offsetX - x) > 10 && Math.abs(eo.offsetY - y) > 10) {
        // 改变矩形数组
        let frame = {
           x: x, y: y, w: eo.offsetX - x, h: eo.offsetY - y
        };
        rects.push(frame);
        this.reDrawRect(cav, ctx, rects);
        start = false;
        this.drawRect(cav, ctx,rects)
      }
      else {
        this.reDrawRect(cav, ctx, rects);
        start = false
        this.drawRect(cav,ctx,rects)
      }
    };
  }
}

/* 选中矩形, 重绘矩形, 并分发后续事件 */
private drawByJudgement(cav:any, ctx:any, rects: IDrawRect[], iem:any){
  cav.style.cursor = 'default';
  let x = 0; 
  let y = 0; 
  // 按下鼠标左键
  cav.onmousedown = (e:any)=>{
    x = e.offsetX;
    y = e.offsetY;
    this.reDrawRect(cav, ctx, rects, iem);
    cav.onmouseup = () => {
      this.reDrawRect(cav, ctx, rects, iem);
      this.drawRect(cav, ctx,rects, iem);
    };
    this.moveDrawRect(cav, ctx, rects, iem, x, y);
    this.deleteDraw(cav, ctx, rects, iem);
  }
}

/* 移动矩形 */
private moveDrawRect(cav:any, ctx:any, rects:IDrawRect[], i:number, x:number, y:number){
  let mark = rects[i]
  cav.onmousemove = (em:any) =>{
      let iframe = {
        x: mark.x + (em.offsetX - x),
        y: mark.y + (em.offsetY - y),
        w: mark.w,
        h: mark.h
      }
      rects.splice(i, 1, iframe);
      this.deleteDraw(cav, ctx, rects, i);
      this.reDrawRect(cav, ctx, rects, i);
  }
  cav.onmouseup = ()=> {
    this.reDrawRect(cav, ctx, rects, i);
    this.drawRect(cav, ctx, rects, i);
  };
}

/* 删除矩形 */
private deleteDraw(cav:any, ctx:any, rects:IDrawRect[], i?: number|null){
  // 按键事件
  if (i === null) {
    // 阻止按键监听事件冒泡
    document.onkeydown = () => {
      // return false;
    }
  } 
  else {
    document.onkeydown =  (event) => {
      let key = event.keyCode || event.which;
      if ((key == 46 || key == 8 ) && i !== null) {
        if (rects.length >= 1) {
          rects.splice(i!, 1);
          this.reDrawRect(cav, ctx, rects);
        }
        else {
          // 矩形框全部删除
          ctx.clearRect(0, 0, cav.width, cav.height);
        }
        this.deleteDraw(cav, ctx, rects, null)
        this.reDrawRect(cav, ctx, rects);
        this.drawRect(cav, ctx, rects);
      }
    }
  }
}

/* 重绘所有矩形 */
private reDrawRect(cav:any, ctx:any, rects: IDrawRect[], i?: number){
  ctx.setLineDash([8, 0]);
  ctx.clearRect(0, 0, cav.width, cav.height);
  // 未选中部分
  rects.forEach((value, index)=> {
    if (i === undefined || index != i) {
      ctx.beginPath();
      ctx.strokeStyle = this.options.strokeStyle;
      ctx.rect(value.x, value.y, value.w, value.h);
      ctx.stroke();
    }
  });
  // 已选中部分
  rects.forEach((value, index, array)=>{
    if (index === i) {
      // 方框 
      const lineWidth = this.options.selectedRect.lineWidth;
      ctx.beginPath();
      ctx.strokeStyle = this.options.selectedRect.strokeStyle;
      ctx.rect(value.x, value.y, value.w, value.h);
      ctx.fillStyle = 'RGBA(102,102,102,0.2)'
      ctx.fillRect(value.x, value.y, value.w, value.h);
      ctx.stroke();
      // 四个角的圆圈
      ctx.beginPath();
      ctx.strokeStyle = this.options.selectedRect.strokeStyle;
      ctx.arc(value.x, value.y, lineWidth, 0, Math.PI * 2)
      ctx.fillStyle = this.options.selectedRect.strokeStyle;
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(value.x, value.y + value.h, lineWidth, 0, Math.PI * 2);
      ctx.fillStyle = this.options.selectedRect.strokeStyle;
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(value.x + value.w, value.y + value.h, lineWidth, 0, Math.PI * 2);
      ctx.fillStyle = this.options.selectedRect.strokeStyle;
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(value.x + value.w, value.y, lineWidth, 0, Math.PI * 2);
      ctx.fillStyle = this.options.selectedRect.strokeStyle;
      ctx.fill();
      ctx.stroke();
    }
  })
}

}





