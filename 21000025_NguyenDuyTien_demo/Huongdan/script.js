
$(document).ready(function () {
    $("#btnOpenDK").click(function (e) {
        $("#myModal").modal();
    });
    
    function kiemTraMa() {
        var mauKT = /[0-9]{9}$/;
        var chuoi = $("#txtMa").val();
        var kq = mauKT.test(chuoi);
        if (kq == false) {
            alert("Nhap sai roi");
        } else {
            alert("Nhap dung roi");
        }
    }
    
    $("#txtMa").blur(kiemTraMa);
    
    function kiemTraHT() {
        var mauKT = /^[A-Z]{1}[a-z]+(\s[A-Z]{1}[a-z]*)+$/;
        var chuoi = $("#txtHT").val();
        var kq = mauKT.test(chuoi);
        if (kq == false) {
            alert("Nhap sai roi");
        } else {
            alert("Nhap dung roi");
        }
    }
    
    $("#txtHT").blur(kiemTraHT);
});
