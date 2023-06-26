$(function (){
  $('#sidebar').on('hidden.bs.collapse', function (e) {
     if(e.target == this){
      $('#container-right').removeClass('col-md-9');
     }  
      
    });
    $('#sidebar').on('hidden.bs.collapse', function (e) {
      if(e.target == this){
       $('#container-right').addClass('col-md-11');
      }  
       
     });
     $('#sidebar').on('show.bs.collapse', function (e) {
      if(e.target == this){
       $('#container-right').removeClass('col-md-11');
      }  
       
     });
  $('#sidebar').on('show.bs.collapse', function (e) {
    if(e.target == this){
      $('#container-right').addClass('col-md-9');
    } 
    
  });
  $('#sidebar').on('hidden.bs.collapse', function (f) {
    if(f.target == this){
      $('#main-col1').removeClass('style');
    }
    
  });
  $('#sidebar').on('show.bs.collapse', function (f) {
    if(f.target == this){
      $('#main-col1').addClass('style');
    }
    
  });
  
   $('#sidebar').on('hidden.bs.collapse', function (e) {
    if(e.target == this){
     $('#sidebar1').addClass('colredius');
    }  
     
   });
   $('#sidebar').on('show.bs.collapse', function (e) {
    if(e.target == this){
     $('#sidebar1').removeClass('colredius');
    }  
     
   });
   
   var ch1=$('#chart1');

   var chart1 = new Chart(ch1,{
     type:'line',
     data:{
       labels:['samstag','sonntag','montag','dienstag','mittwoch','donnerstag','freitag'],
       datasets:[{
         data:[15000,12000,14800,11900,17000,19600,16000],
        backgroundColor:'#f9e096',
        borderColor:'#fff',
        pointBackgroundColor:'#fff',
       }]
     },
     options:{
       scales:{
        yAxes:[{
          display:false,
        }],
        xAxes:[{
          display:false,
        }],
       },
       legend:{
         display:false,
       },
       layout:{
         padding:{
           left:5,
           right:5,
           top:5,
           bottom:5,
         }
       }
     }

   });

   var ch2=$('#chart2');

   var chart2 = new Chart(ch2,{
     type:'bar',
     data:{
       labels:['samstag','sonntag','montag','dienstag','mittwoch','donnerstag','freitag'],
       datasets:[{
         data:[10000,19000,17800,12900,13000,11600,19000],
        backgroundColor:'#8bc0f9',
        borderColor:'#fff',
        pointBackgroundColor:'#fff',
       }]
     },
     options:{
       scales:{
        yAxes:[{
          display:false,
        }],
        xAxes:[{
          display:false,
        }],
       },
       legend:{
         display:false,
       },
       layout:{
         padding:{
           left:5,
           right:5,
           top:5,
           bottom:5,
         }
       }
     }

   });
   
   var ch3=$('#chart3');

   var chart3 = new Chart(ch3,{
     type:'pie',
     data:{
       labels:['samstag','sonntag','montag','dienstag','mittwoch','donnerstag','freitag'],
       datasets:[{
         data:[10000,19000,17800,12900,13000,11600,19000],
        backgroundColor:'#ffaab2',
        borderColor:'#fff',
        pointBackgroundColor:'#fff',
       }]
     },
     options:{
       scales:{
        yAxes:[{
          display:false,
        }],
        xAxes:[{
          display:false,
        }],
       },
       legend:{
         display:false,
       },
       layout:{
         padding:{
           left:5,
           right:5,
           top:5,
           bottom:5,
         }
       }
     }

   });

   var ch4=$('#chart4');

   var chart4 = new Chart(ch4,{
     type:'line',
     data:{
       labels:['samstag','sonntag','montag','dienstag','mittwoch','donnerstag','freitag'],
       datasets:[{
         data:[13000,19000,12800,15900,13000,11600,17000],
        backgroundColor:'#94ffad',
        borderColor:'#fff',
        pointBackgroundColor:'#fff',
       }]
     },
     options:{
       scales:{
        yAxes:[{
          display:false,
        }],
        xAxes:[{
          display:false,
        }],
       },
       legend:{
         display:false,
       },
       layout:{
         padding:{
           left:5,
           right:5,
           top:5,
           bottom:5,
         }
       }
     }

   });

   var vis=$('#visit');

   var visit = new Chart(vis,{
     type:'line',
     data:{
       labels:['samstag','sonntag','montag','dienstag','mittwoch','donnerstag','freitag'],
       datasets:[{
         data:[15000,12000,14800,11900,17000,19600,16000],
        backgroundColor:'',
        borderColor:'#4a31ea',
        pointBackgroundColor:'#4a31ea',
       },
       {
       data:[11000,19000,12800,16900,12000,16600,14000],
       backgroundColor:'',
       borderColor:'#fd7e14',
       pointBackgroundColor:'#fd7e14',
      }]
       
     },
     options:{
       scales:{
        yAxes:[{
          display:true,
        }],
        xAxes:[{
          display:true,
        }],
       },
       legend:{
         display:false,
       },
       layout:{
         padding:{
           left:5,
           right:5,
           top:5,
           bottom:5,
         }
       }
     }

   });



})