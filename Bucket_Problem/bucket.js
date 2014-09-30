var queue=new Array()
var seen={}
function playgame(amax,bmax,goal){
  
  addstate("",[0,0])
  while (true){
    oldstate=getstate()
    ahas=oldstate[0]
    bhas=oldstate[1]
    if(test(oldstate,[amax,bhas],goal)){break}
    if(test(oldstate,[0,bhas],goal)){break}
    if(test(oldstate,[ahas,bmax],goal)){break}
    if(test(oldstate,[ahas,0],goal)){break}
    howmuch=Math.min(ahas,bmax-bhas)
    if(test(oldstate,[ahas-howmuch,bhas+howmuch],goal)){break}
    howmuch=Math.min(bhas,amax-ahas)
    if(test(oldstate,[ahas+howmuch,bhas-howmuch],goal)){break}
}
  console.log("solution is")
  a=getsolution()
  for (i in a)
    console.log(a[i])
   
}

function addstate(parentstate,newstate){
  if (newstate in seen)
    return
  seen[newstate]=parentstate
  queue.push(newstate)
}
function getstate(){
  len=queue.length
  if(len==0)
    return
  state=queue[0]
  queue=queue.slice(1)
  return(state)
}
function test(oldstate,newstate,goal){
  newa=newstate[0]
  newb=newstate[1]
  won=(newa==goal || newb==goal)
  addstate(oldstate,newstate)
  return(won)
}
function getsolution(){
  solution=new Array()
  state=queue.pop()
  while(state){
    solution.push(state)
    state=getparent(state)
}
  solution.reverse()
  return solution
}
function getparent(childstate){
  try{
    return seen[childstate]
}
  catch(e){
    return
}
}
playgame(7,11,5)
