function bt1() {
    var A = new Date();
    var date = A.getHours() + ':' + A.getMinutes() + '-' + A.getDate() + '/' + A.getMonth() + '/' + A.getFullYear();
    document.getElementById("result1").innerHTML = date;
}

function bt2() {
    var A = new Date();
    document.getElementById("result2").innerHTML =
        'mm-dd-yyyy: ' + A.getMonth() + '-' + A.getDate() + '-' + A.getFullYear() + '<br>' +
        'mm/dd/yyyy: ' + A.getMonth() + '/' + A.getDate() + '/' + A.getFullYear() + '<br>' +
        'dd-mm-yyyy: ' + A.getDate() + '-' + A.getMonth() + '-' + A.getFullYear() + '<br>' +
        'dd/mm/yyyy: ' + A.getDate() + '/' + A.getMonth() + '/' + A.getFullYear() + '<br>';
}

function bt3() {
    var data = document.getElementById("input3").value;
    var A = data.split("");
    var check = 1;
    for (var i = 0; i < A.length - 1; i++) {
        if (A[i + 1] > A[i])
            check = 1;
        else {
            check = 0;
            document.getElementById("result3").innerHTML = 'Chuoi khong tang.';
            break;
        }
    }
    if (check == 1) document.getElementById("result3").innerHTML = 'Chuoi tang.';
}

function bt4() {
    var data = document.getElementById("input4").value;
    var newData = "";
    for (var i = 0; i < data.length; i++)
        newData += String.fromCharCode(data.charCodeAt(i) + 1);
    document.getElementById("result4").innerHTML = newData;
}

function bt5() {
    var data = document.getElementById("input5").value;
    var mid = (data.length - 1)/2;
    var A = "";
    A = data.substr(mid - 1, 3);
    document.getElementById("result5").innerHTML = A;
}
// for (var i = 0; i < length; i++)
//     A += data.charAt(Math.floor(Math.random() * data.length));

function bt6() {
    var data = document.getElementById("input6").value;
    var A = data.split(" ");
    var count = 0, max = 1;
    var maxCount = A[0];
    for (var i = 0; i < A.length - 1; i++) {
        if (A[i] == A[i+1]) {
            count++;
            if (count >= max) {
                max = count;
                maxCount = A[i];
            }
        }
    }
    document.getElementById("result6").innerHTML = " Số xuất hiện nhiều nhất là : " + maxCount;
}

function bt7() {
    var data = document.getElementById("input7").value;
    // var A = data.split(" ");
    if (data.indexOf('java') == -1)
        document.getElementById("result7").innerHTML = ('Chuoi khong chua "java"');
    else
        document.getElementById("result7").innerHTML = ('Chuoi chua "java"');
}

function bt8() {
    var data = document.getElementById("input8").value;
    var avaiData = ['Tháng một', 'Tháng hai', 'Tháng ba', 'Tháng tư', 'Tháng năm', 'Tháng sáu',
        'Tháng bảy', 'Tháng tám', 'Tháng chín', 'Tháng mười', 'Tháng mười một', 'Tháng mười hai'
    ]
    for (var i = 0; i < avaiData.length; i++) {
        if (data == i+1)
            document.getElementById("result8").innerHTML = avaiData[i];
    }
}

function bt9() {
    var data = document.getElementById("input9").value;
    var A = data.split(" ");
    var maxLength = 0;
    for (var i = 0; i < A.length; i++) {
        if (A[i].length > maxLength)
            maxLength = A[i].length;
    }
    for (var i = 0; i < A.length; i++) {
        if (A[i].length == maxLength)
            document.getElementById("result9").innerHTML = 'Tu dai nhat chuoi la: ' + A[i];
    }
}

function bt10() {
    var a = Number(document.getElementById("sothunhat").value);
    var b = Number(document.getElementById("sothuhai").value);
    var check;
    var data = [];
    for (var i = a + 1; i < b; i++) {
        check = 1;
        for (var j = 2; j <= i / 2; j++)
            if (i % j == 0) {
                check = 0;
                break;
            }
        if (check == 1) {
            data.push(i);
            document.getElementById("result10").innerHTML = data.join();
        }
    }
}