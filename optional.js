//3.
function myFunction(){
    var x = document.getElementById("myTable").rows[0].cells;
    var y = document.getElementById("myTable").rows[1].cells;
    var z = document.getElementById("myTable").rows[2].cells;
    
    let answerRownumber = prompt("Số hàng mà bạn muốn chọn?");
    let answerColumnnumber = prompt("Số cột mà bạn muốn chọn?");
    let answerContent = prompt("Nội dung là?");

    if(answerRownumber === "1"){
        if(answerColumnnumber === "1"){
           x[0].innerHTML = answerContent 
        }else(x[1].innerHTML = answerContent)
    }else if(answerRownumber === "2"){
        if(answerColumnnumber === "1")
        {
            y[0].innerHTML = answerContent
        }
    else(y[1].innerHTML = answerContent)
    }else if(answerRownumber === "3"){
        if(answerColumnnumber ==="1"){
            z[0].innerHTML = answerContent
        }else(z[1].innerHTML = answerContent)
    };

    ;
};

//chưa tổng quát nếu đưa ra 1 bảng lớn
//người dùng nhập vào là số