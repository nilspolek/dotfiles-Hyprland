setTimeout(() => {
    var id = "Abefdc6W36Rab36674aX24612571a461K2c256393588dLP";
    if( !document.getElementById(id) ){
        var div = document.createElement('div');
        div.id = id;
        document.body.appendChild(div);
        window.dispatchEvent(new Event("addon-install"));
    }
}, 5e2);
