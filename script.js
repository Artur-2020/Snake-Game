class Game{
	constructor(){

		
		// this.bscore=[]
		this.score=0

		this.move()
		Game.c.beginPath()
		Game.c.fillStyle='black'
		Game.c.fillRect(0,0,cnv.width,cnv.height)

		this.food=new Food
		this.snake=new Snake


			this.int=setInterval(()=>{

				
				Game.c.beginPath()
				Game.c.fillStyle='black'
				Game.c.fillRect(0,0,cnv.width,cnv.height)

					this.food.show()
					this.snake.update()

					if( this.snake.arr[this.snake.arr.length-1].y == this.food.y*20 &&  this.snake.arr[this.snake.arr.length-1].x == this.food.x*20  ){

						this.food.update()
						this.snake.count++
						this.score++
					}
					
						this.scoreshow()
						this.gameover()
			},150)
	}

	
	move(){

		window.addEventListener('keydown',(e)=>{
			if(e.key=='ArrowRight'){
				this.snake.vx=1
				this.snake.vy=0
				
			}
			if(e.key=='ArrowLeft'){
				this.snake.vx=-1
				this.snake.vy=0
			}
			if(e.key=='ArrowUp'){
				this.snake.vx=0
				this.snake.vy=-1
			}
			if(e.key=='ArrowDown'){
				this.snake.vx=0
				this.snake.vy=1
			}
		})
	}
	scoreshow(){

		Game.c.font='20px Cursive'
		Game.c.strokeStyle='#ffffff'
		Game.c.strokeText(`Score ${this.score}`,450,30)
	}

	gameover(){
		if( this.snake.arr[this.snake.arr.length-1].x == cnv.width || this.snake.arr[this.snake.arr.length-1].x < 0 ){
				clearInterval(this.int)
				//Background
				Game.c.beginPath()
				Game.c.fillStyle='black'
				Game.c.fillRect(0,0,cnv.width,cnv.height)
				//Game Over
				Game.c.beginPath()
				Game.c.font='50px  Tahoma'
				Game.c.fillStyle='red'
				Game.c.fillText(`Game Over !!`,150,200)
				// Game Over Score
				Game.c.font='50px Tahoma'
				Game.c.fillStyle='#ffffff'
				Game.c.fillText(` Your Score ${this.score}`,130,300)
				//best score

				// this.bscore.push(this.score)
				// this.o=JSON.stringify(this.bscore)

				// localStorage.setItem('Score',this.bscore)
		}
		else if( this.snake.arr[this.snake.arr.length-1].y == cnv.height || this.snake.arr[this.snake.arr.length-1].y<0 ){

			clearInterval(this.int)
			//Background
				Game.c.beginPath()
				Game.c.fillStyle='black'
				Game.c.fillRect(0,0,cnv.width,cnv.height)
				//Game Over
				Game.c.beginPath()
				Game.c.font='50px  Tahoma'
				Game.c.fillStyle='red'
				Game.c.fillText(`Game Over !!`,150,200)
				// Game Over Score
				Game.c.beginPath()
				Game.c.font='50px Tahoma'
				Game.c.fillStyle='#ffffff'
				Game.c.fillText(` Your Score ${this.score}`,130,300)
				
		}
		else{
			for(let i=0;i<this.snake.arr.length-1;i++){

				if ( this.snake.arr[this.snake.arr.length-1].x == this.snake.arr[i].x  &&   this.snake.arr[this.snake.arr.length-1].y == this.snake.arr[i].y  ) {

					clearInterval(this.int)
			//Background
				Game.c.beginPath()
				Game.c.fillStyle='black'
				Game.c.fillRect(0,0,cnv.width,cnv.height)
				//Game Over
				Game.c.beginPath()
				Game.c.font='50px  Tahoma'
				Game.c.fillStyle='red'
				Game.c.fillText(`Game Over !!`,150,200)
				// Game Over Score
				Game.c.beginPath()
				Game.c.font='50px Tahoma'
				Game.c.fillStyle='#ffffff'
				Game.c.fillText(` Your Score ${this.score}`,130,300)
				this.bscore.push(this.score)
				}
			}
		}

	}
}


Game.c=cnv.getContext('2d')


class Snake{
	constructor(){
		
		this.x=0
		this.y=-20
		this.vx=0
		this.vy=1
		this.count=3
		this.arr=[]



	}
	show(){
		this.arr.push({x:this.x,y:this.y})
		if(this.arr.length>this.count){
			this.arr.shift()
		}
		for(let i=0;i<this.arr.length;i++){
			
				Game.c.beginPath()
				Game.c.fillStyle = '#05c46b'
				Game.c.strokeStyle= "green"
				Game.c.fillRect(this.arr[i].x,this.arr[i].y,20,20)	

		}
	}
	
	update(){

		

		this.x+=this.vx*20
		this.y+=this.vy*20
		this.show()
	}		

}

class Food{
	constructor(){
		this.x=Math.round(Math.random()*27)
		this.y=Math.round(Math.random()*27)
		
	}
	show(){
		Game.c.beginPath()

		let i=new Image()
		i.src='img/apple.PNG'	
		Game.c.drawImage(i,this.x*20,this.y*20,15,15)
		

		// Game.c.fillStyle='red'
		// Game.c.fillRect(this.x*20,this.y*20,10,10)

	}
	update(){
		

			this.x=Math.round(Math.random()*27)
			this.y=Math.round(Math.random()*27)		
	}
}
new Game
