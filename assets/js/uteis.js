let pathname = location.pathname.split('/')[2]
pathname === 'index.html' || pathname === "" ? pathname = 'home' : ''



let GetHTML = (url, method, callback, params = null)=>{
    let obj;
    try { 
        obj = new XMLHttpRequest();  
    }catch(e){   
        try {     
            obj = new ActiveXObject("Msxml2.XMLHTTP");     
        } catch(e) {     
            try { 
            obj = new ActiveXObject("Microsoft.XMLHTTP");       
            } catch(e) {       
            console.log("Your browser does not support Ajax.");       
            return false;       
            }     
        }   
    }
    obj.open(method, url, true);
    obj.setRequestHeader("Content-Type", "text/html");
    obj.onreadystatechange = function() {
        if(obj.readyState == 4) {
            callback(obj);
        } 
    }
    obj.send(JSON.stringify(params));
    return obj; 
}