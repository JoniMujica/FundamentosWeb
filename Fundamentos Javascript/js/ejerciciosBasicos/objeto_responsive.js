const d = document,
w = window;

export default function responsiveMedia(id,mediaQuery,mobileContent,desktopContent){
    let breakPoint = w.matchMedia(mediaQuery);
    //console.log(breakPoint);
    

    const responsive = (e) =>{
        if (e.matches) {
            //console.log(e);
            
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }
        //console.log("MQ", breakPoint, e.matches);
        
    }
    breakPoint.addListener(responsive)
    responsive(breakPoint);

}