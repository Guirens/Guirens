const ScoreEl=document.querySelector('#ScoreEl')
let gamef=document.querySelector('#cabo')
let finals=document.querySelector('#scoreF')
const canvas = document.querySelector('canvas')
const C = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

class Player{
    constructor(){
        this.velocity={
            x:0,
            y:0
        }
        this.rotation=0
        this.opacity=1

        const image =new Image()
        //colocar img/ antes mas criar pasta
        image.src='./img/spaceship.png'
        image.onload= () =>{
            const scale=0.15
            this.image = image
            this.width= image.width *scale
            this.height= image.height *scale
            this.position={
                x:canvas.width/2 - this.width/2,
                y:canvas.height-this.height
            }
        }
    }
    draw(){
        //C.fillStyle= 'red'
        //C.fillRect(this.position.x, this.position.y, this.width, this.height)
        C.save()
        C.globalAlpha=this.opacity
        C.translate(player.position.x + player.width/2, player.position.y + player.height/2)
        C.rotate(this.rotation)
        C.translate(-player.position.x - player.width/2, -player.position.y - player.height/2)
        if(this.image)
            C.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        C.restore()
    }
    update(){
        if(this.image){
            this.draw()
            this.position.x += this.velocity.x
        }
    }
}
class projetil{
    constructor({position, velocity}){
        this.position=position
        this.velocity=velocity
        this.radius=3
    }
    draw(){
        C.beginPath()
        C.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2)
        C.fillStyle='red'
        C.fill()
        C.closePath()
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }

}
class Particle{
    constructor({position, velocity,radius, color,fades}){
        this.position=position
        this.velocity=velocity
        this.radius=radius
        this.color = color
        this.opacity=1
        this.fades=fades
    }
    draw(){
        C.save()
        C.globalAlpha=this.opacity
        C.beginPath()
        C.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2)
        C.fillStyle=this.color
        C.fill()
        C.closePath()
        C.restore()
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if(this.fades){
            this.opacity-= 0.01
        }
    }

}

class invaderprojetil{
    constructor({position, velocity}){
        this.position=position
        this.velocity=velocity
        this.width=3
        this.height=10
    }
    draw(){
        C.fillStyle='white'
        C.fillRect(this.position.x, this.position.y, this.width,this.height)
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }

}

class Invasor{
    constructor({position}){
        this.velocity={
            x:0,
            y:0
        }
        const image =new Image()
        //colocar img/ antes mas criar pasta
        image.src='./img/invader.png'
        image.onload= () =>{
            const scale=1
            this.image = image
            this.width= image.width *scale
            this.height= image.height *scale
            this.position={
                x:position.x,
                y:position.y
            }
        }
    }
    draw(){
        //C.fillStyle= 'red'
        //C.fillRect(this.position.x, this.position.y, this.width, this.height)
        if(this.image)
            C.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
    update({velocity}){
        if(this.image){
            this.draw()
            this.position.x += velocity.x
            this.position.y += velocity.y
        }
    }
    shoot(invaderprojetils){
        invaderprojetils.push(new invaderprojetil({
            position:{
                x:this.position.x+this.width/2,
                y:this.position.y+this.height
            },
            velocity:{
                x:0,
                y:5
            }
        }))

    }
}
class Grid{
    constructor(){
        this.position={
            x:0,
            y:0
        }
        this.velocity={
            x:3,
            y:0
        }
        this.invasors=[]
        const colunas=Math.floor( Math.random()*10 + 5)
        const rolls=Math.floor( Math.random()*5 + 2)
        this.width=colunas*30
        for(let x=0; x< colunas ;x++){
            for(let y=0; y< rolls ;y++){
                this.invasors.push(new Invasor({position:{
                    x:x*30,
                    y:y*30
                }}))
            }
        }
    }
    update(){
        this.position.x+=this.velocity.x
        this.position.y+=this.velocity.y
        this.velocity.y=0

        if(this.position.x+this.width >= canvas.width || this.position.x<=0){
            this.velocity.x= -this.velocity.x
            this.velocity.y=30
        }

    }
}


const player = new Player()
const projeteis = []
//const invasor = new Invasor()
const grids =[]
const invaderprojetils=[]
const particles=[]
const keys = {
    a:{
        pressed: false
    },
    d:{
        pressed: false
    },
    space:{
        pressed: false
    }
}
let frames=0
let intervalo=Math.floor(Math.random()*666+ 500)
//console.log(intervalo)
let game={
    over:false,
    active:true

}
let score=0


//não remova esse comentario peca de fps por nada
/*for(let i=0;i<45;i++){   
    particles.push(new Particle({
        position:{
            x:Math.random()*canvas.width,
            y:Math.random()* canvas.height
            },
        velocity:{
            x:0,
            y:1
            },
        radius:Math.random()*2,
        color:'white'
    }))
}*/

function createParticulas({object,colo,fades}){
    for(let i=0;i<15;i++){   
        particles.push(new Particle({
            position:{
                x:object.position.x+object.width/2,
                y:object.position.y+object.height/2
                },
            velocity:{
                x:(Math.random()-0.5)*2,
                y:(Math.random()-0.5)*2
                },
            radius:Math.random()*3,
            color:colo,
            fades:fades
        }))
    } 
}

function animate(){
    if(!game.active)return
    requestAnimationFrame(animate)
    C.fillStyle='black'
    C.fillRect(0,0, canvas.width, canvas.height)
    //invasor.update()
    player.update()
    particles.forEach((particle,ind)=>{

        /*if(particle.position.y-particle.radius>=canvas.height){
            particle.position.x=Math.random()*canvas.width
            particle.position.y=-particle.radius

        }*/


        if(particle.opacity<=0){
            setTimeout(()=>{
                particles.splice(ind,1)

            },0)
            
        }else{
            particle.update()

        }
        console.log(particles)
    })
    invaderprojetils.forEach((invaderprojetil,index)=>{
        invaderprojetil.update()
        if(invaderprojetil.position.y+invaderprojetil.height>=canvas.height){
            setTimeout(()=>{
                invaderprojetils.splice(index,1)
            },0)
        }else{
            invaderprojetil.update()
        }
        if(invaderprojetil.position.y+invaderprojetil.height>=player.position.y&&invaderprojetil.position.x+invaderprojetil.width>=player.position.x && invaderprojetil.position.x<= player.position.x+player.width){
            console.log("you lose")
            setTimeout(()=>{
                invaderprojetils.splice(index,1)
                gamef.innerHTML=" Game Over "
                finals.innerHTML="socre final: "+score
                player.opacity=0
                game.over=true
            },0)

            setTimeout(()=>{
                game.active=false
            },2000)
            createParticulas({

                object:player,
                 colo:'white',
                 fades:true
                })

        }
    })
    projeteis.forEach((projetil, index) => {
        if(projetil.position.y+projetil.radius<=0){
            setTimeout(()=>{
                projeteis.splice(index, 1)
            },0)
        }else{
            projetil.update()
        }
        
    })
    grids.forEach((grid,gridIndex)=>{
        grid.update()
        if(frames%100===0 && grid.invasors.length>0){
            grid.invasors[Math.floor(Math.random()*grid.invasors.length)].shoot(invaderprojetils)
        }
        grid.invasors.forEach((invasor,i)=>{
            invasor.update({velocity: grid.velocity})
            //
            projeteis.forEach((projetil,j)=>{
                if(projetil.position.y-projetil.radius<=invasor.position.y+invasor.height && 
                    projetil.position.x+projetil.radius>= invasor.position.x &&
                    projetil.position.x-projetil.radius<=invasor.position.x+invasor.width && 
                    projetil.position.y+projetil.radius >= invasor.position.y ){
                       
                    setTimeout(()=>{
                        const invasorAchado = grid.invasors.find((invasor2)=>invasor2 === invasor)
                        const projetilAchado = projeteis.find((projetil2)=>projetil2 === projetil)
                        if(invasorAchado && projetilAchado){
                            score+=15
                            ScoreEl.innerHTML=score
                            createParticulas({
                                object:invasor,
                                colo:'#BAA0DE',
                                fades:true
                            })
                            grid.invasors.splice(i , 1)
                            projeteis.splice(j , 1)
                            if(grid.invasors.length > 0){
                                const primeiroInvader = grid.invasors[0]
                                const ultimoInvader = grid.invasors[grid.invasors.length-1]

                                grid.width=ultimoInvader.position.x-primeiroInvader.position.x+ultimoInvader.width
                                grid.position.x=primeiroInvader.position.x
                                    
                                

                            }
                        }else{
                            grid.splice(gridIndex,1)
                        }
                    }, 0)
                }
            })

        })
    })
    if(keys.a.pressed && player.position.x>=0){
        player.velocity.x=-7
        player.rotation = -.15
    }else if(keys.d.pressed && player.position.x+player.width<=canvas.width ){
        player.velocity.x=7
        player.rotation = .15
    }
    else{
        player.velocity.x=0
        player.rotation = 0
    }
    if(frames % intervalo === 0){
        grids.push(new Grid())
        intervalo=Math.floor(Math.random()*666+ 500)
        frames=0
    }


    frames++
}
animate()
addEventListener('keydown', ({key})=>  {
    //console.log(key)
    if(game.over) return
    switch(key){
        case 'a':
            
            //console.log('esquerda')
            keys.a.pressed=true
            break
        case 'd':
            //console.log('direita')
            keys.d.pressed=true
            break
        case ' ':
            //console.log('tiro')
            projeteis.push(new projetil({
                position:{
                    x:player.position.x+player.width/2,
                    y:player.position.y
                },
                velocity:{
                    x:0,
                    y:-10
                }
            }))
            keys.space.pressed=true
            break
    }
}   )
addEventListener('keyup', ({key})=>  {
    //console.log(key)
    switch(key){
        case 'a':

            //console.log('esquerda')
            keys.a.pressed=false
            break
        case 'd':
            //console.log('direita')
            keys.d.pressed=false
            break
        case ' ':
            //console.log(projeteis)
            keys.space.pressed=false
    }
}   )