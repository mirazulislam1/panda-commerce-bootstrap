const h2Color = document.getElementsByTagName('h2');
    for(const h2 of h2Color){
      h2.style.color = 'lightblue';  
    }
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';

const cardTitle = document.querySelectorAll('.card');
for(const card of cardTitle){
    card.style.borderRadius = '30px';
}
 function handleClick(){
    console.log('click button');

 }
 function removeDummy() {
    var elem = document.getElementById('dummy');
    elem.parentNode.removeChild(elem);
 }
 document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
    const text = event.target.value;
    // console.log(text);
    const submitButton = document.getElementById('submit-btn');
    if(text === 'email'){
        submitButton.removeAttribute('disabled');
    }else{
        submitButton.setAttribute('disabled', true);
    }
 })

 const images = document.getElementById("image");
images.addEventListener('mouseover', function(){
  images.src = "images/bags/bag-1.png" 
})
// image.addEventListener('mouseout', function(){
//     image.src = "path/to/otherimage"
//   })

const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', function(){
    subscribe.style.backgroundColor = 'lightgray';
})