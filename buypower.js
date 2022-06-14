/*Function to enable a button after dropdown menu have been selected*/
function fun() {
    if (document.getElementById('disco').value!="") {
        document.getElementById('buy-electricity-btn').disabled=false;
    } else {
        document.getElementById('buy-electricity-btn').disabled=true;
    }
}
