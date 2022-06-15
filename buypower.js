function fun() {
    if (document.getElementById('disco').value!="") {
        document.getElementById('buy-electricity-btn').disabled=false;
    } else {
        document.getElementById('buy-electricity-btn').disabled=true;
    }
}
