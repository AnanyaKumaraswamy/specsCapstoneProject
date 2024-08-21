export default function Menucategory()
{
    let category = document.getElementById('Category').value;
    var elems ;
    if(category == '1')
    {
    elems = document.getElementsByClassName('1');
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'flex';
      }
      elems = document.getElementsByClassName('2');
      for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
      }
      elems = document.getElementsByClassName('3');
      for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
      }
      elems = document.getElementsByClassName('4');  
      for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
      }             
    }
    else if(category == '2')
    {
        elems = document.getElementsByClassName('1');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'none';
          }
        elems = document.getElementsByClassName('2');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'flex';
          }
        elems = document.getElementsByClassName('3');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'none';
          }
        elems = document.getElementsByClassName('4');  
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'none';
          }
    }
    else if(category == '3')
    {
        elems = document.getElementsByClassName('1');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'none';
          }
        elems = document.getElementsByClassName('2');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'none';
          }
        elems = document.getElementsByClassName('3');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'flex';
          }
        elems = document.getElementsByClassName('4'); 
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'none';
          } 
    }
    else if(category == '4')
    {
        elems = document.getElementsByClassName('1');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'none';
          }
        elems = document.getElementsByClassName('2');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'none';
          }
        elems = document.getElementsByClassName('3');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'none';
          }
        elems = document.getElementsByClassName('4');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'flex';
          }  
    }
    else{
        elems = document.getElementsByClassName('1');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'flex';
          }
        elems = document.getElementsByClassName('2');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'flex';
          }
        elems = document.getElementsByClassName('3');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'flex';
          }
     elems = document.getElementsByClassName('4'); 
     for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'flex';
      } 
    }
}