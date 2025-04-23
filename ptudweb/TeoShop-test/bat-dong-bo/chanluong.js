function
chanLuong(){

    console.log("Bắtđầu tác vụ cần nhiều thời gian xử lý");

    let batDau = Date.now();

    while(Date.now()- batDau < 5000){

        //Giả lập chờ 5 giây bằng vòng lặp

    }

    console.log("Tác vụ chạy 5 giây hoàn tất")

}

 

console.log("Trướckhi chạy tác vụ");

chanLuong()
// chặn luồng 5 giây

console.log("Saukhi chạy tác vụ");