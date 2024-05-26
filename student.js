class QLStudent {
        constructor(fullname, birthday, Class, major, msv, address, email, number, gender) {
            this.fullname = fullname;
            this.birthday = birthday;
            this.Class = Class;
            this.major = major; 
            this.msv = msv;
            this.address = address;
            this.email = email;
            this.number = number;
            this.gender = gender;
        }
            getname(){
                return this.fullname
            }
            setname (fullname){
                this.fullname = fullname;
            }
            getage(){
                return this.birthday;
            }
            setnage(birthday){
                this.birthday = birthday;
            }
            getclass(){
                return this.Class;
            }
            setclass (Class){
                this.Class = Class;
            }
            getmajor(){
                return this.major;
            }
            setmajor(major){
                this.major = major; 
            }
            getmsv(){
                return this.msv;
            }
            setmsv(msv){
                this.msv = msv; 
            }
            getaddress(){
                return this.address;
            }
            setaddress(address){
                this.address= address; 
            }
            getemail(){
                return this.email;
            }
            setemail(email){
                this.email= email; 
            }
            getnumber(){
                return this.number;
            }
            setnumber(number){
                this.number= number; 
            }
            getgender(){
                return this.gender;
            }
            setgender(gender){
                this.gender= gender; 
            }
            
            edit(fullname, birthday, Class, major, msv, address, email, number, gender) {
                this.fullname = fullname;
                this.birthday = birthday;
                this.Class = Class;
                this.major = major; 
                this.msv = msv;
                this.address = address;
                this.email = email;
                this.number = number;
                this.gender = gender;
            }
        }  
    let student1 = new QLStudent("Nguyễn Thảo Ly","22/09/2003","K22.1","Quản trị công nghệ AI","2211242397","k197/1 Ngũ Hành Sơn, Đà Nẵng","thaoly@gmail.com","0973412347","Nữ");
    let student2 = new QLStudent("Hà Hồng Thảo","19/03/2003","K22.3","Quản trị dự án","2211242467","Số 52 An Thượng, Ngũ Hành Sơn, Đà Nẵng","hongthao@gmail.com","0934560912","Nữ");
    let student3 = new QLStudent("Nguyễn Văn Bảo","01/12/2003","K22.3","Quản trị dự án","2211242467","k123 Cẩm lệ, Đà Nẵng","bao@gmail.com","0395667321","Nam");
    let arr =[student1, student2, student3];

    function display(){
        let str = " ";
        for (let i = 0; i < arr.length ; i++) {
            str += "<tr>"
            str += "<td>" + (i+1) + "</td>"
            str += "<td>"+ arr[i].fullname + "</td>"
            str += "<td>" + arr[i].birthday + "</td>"
            str += "<td>" + arr[i].Class+ "</td>"
            str += "<td>" + arr[i].major+ "</td>"
            str += "<td>" + arr[i].msv+ "</td>"
            str += "<td>" + arr[i].address + "</td>"
            str += "<td>" + arr[i].email + "</td>"
            str += "<td>" + arr[i].number+ "</td>"
            str += "<td>" + arr[i].gender + "</td>"
            str += "<td> <button onclick='updateFix("+ i + ")'>Sửa</button><button onclick='deleteFix(" + i + ")'>Xóa</button></td>"
            str += "</tr>"

        }
        document.getElementById("display").innerHTML = str;
    }

    display();
    function save() {
        let fullname = document.getElementById("Fullname").value;
        let birthday = document.getElementById("Datetime").value;
        let Class = document.getElementById("class1").value;
        let major = document.getElementById("Major").value;
        let msv = document.getElementById("MSV").value;
        let address = document.getElementById("Address").value;
        let email = document.getElementById("Email").value;
        let number = document.getElementById("Number").value;
        let gender = document.getElementById("Gender").value;
      
        let isValid = true;
      
        if (_.isEmpty(fullname) || fullname.length <= 3) {
          document.getElementById("FullnameError").innerHTML = "Vui lòng nhập lại họ và tên!";
          isValid = false;
        } else {
          document.getElementById("FullnameError").innerHTML = "";
        }
      
        if (_.isEmpty(birthday)) {
          document.getElementById("DatetimeError").innerHTML = "Vui lòng nhập lại ngày sinh!";
          isValid = false;
        } else {
          document.getElementById("DatetimeError").innerHTML = "";
        }
        if (_.isEmpty(Class)) {
            document.getElementById("ClassError").innerHTML = "Vui lòng chọn lớp";
            isValid = false;
          } else {
            document.getElementById("ClassError").innerHTML = "";
          }
        if (_.isEmpty(major)) {
            document.getElementById("MajorError").innerHTML = "Vui lòng chọn chuyên ngành!";
            isValid = false;
          } else {
            document.getElementById("MajorError").innerHTML = "";
          }
      
        if (_.isEmpty(msv)) {
          document.getElementById("MSVError").innerHTML = "Vui lòng nhập lại mã sinh viên!";
          isValid = false;
        } else {
          document.getElementById("MSVError").innerHTML = "";
        }

        if (_.isEmpty(address)) {
          document.getElementById("AddressError").innerHTML = "Vui lòng nhập lại địa chỉ!";
          isValid = false;
        } else {
          document.getElementById("AddressError").innerHTML = "";
        }
      
        if (_.isEmpty(email) || !email.includes("@gmail.com")) {
          document.getElementById("EmailError").innerHTML = "Vui lòng nhập lại email!";
          isValid = false;
        } else {
          document.getElementById("EmailError").innerHTML = "";
        }
      
        if (_.isEmpty(number) || isNaN(number)) {
          document.getElementById("NumberError").innerHTML = "Vui lòng nhập lại số điện thoại!";
          isValid = false;
        } else {
          document.getElementById("NumberError").innerHTML = "";
        }
        if (_.isEmpty(gender)) {
            document.getElementById("GenderError").innerHTML = "Vui lòng chọn giới tính!";
            isValid = false;
          } else {
            document.getElementById("GenderError").innerHTML = "";
          }
        if (isValid) {
          let addStudent = new QLStudent(fullname, birthday, Class, major, msv, address, email, number, gender);
          arr.push(addStudent);
          display();
      
          document.getElementById("Fullname").value = "";
          document.getElementById("Datetime").value = "";
          document.getElementById("class1").value = "";
          document.getElementById("Major").value = "";
          document.getElementById("MSV").value = "";
          document.getElementById("Address").value = "";
          document.getElementById("Email").value = "";
          document.getElementById("Number").value = "";
          document.getElementById("Gender").value = "";
          document.getElementById("currentIndex").value = "";
        } else {
          alert("Vui lòng nhập chính xác thông tin!");
        }
      }
    function deleteFix(index){
        let student = arr[index];
        let check = confirm("Bạn có muốn xóa " + student.fullname + "?");
        if (check){
            arr.splice(index, 1);
            display();
            document.getElementById("Fullname").value = "";
            document.getElementById("Datetime").value = "";
            document.getElementById("class1").value = "";
            document.getElementById("Major").value = "";
            document.getElementById("MSV").value = "";
            document.getElementById("Address").value = "";
            document.getElementById("Email").value = "";
            document.getElementById("Number").value = "";
            document.getElementById("Gender").value = "";
            document.getElementById("currentIndex").value = ""
        } else {
            alert("Bạn đã hủy thao tác xóa.");
        }
    }

    function updateFix(index){
        let student = arr[index];
        document.getElementById("Fullname").value = student.fullname;
        document.getElementById("Datetime").value = student.birthday;
        document.getElementById("class1").value = student.Class;
        document.getElementById("Major").value = student.major;
        document.getElementById("MSV").value = student.msv;
        document.getElementById("Address").value = student.address;
        document.getElementById("Email").value = student.email;
        document.getElementById("Number").value = student.number;
        document.getElementById('Gender').value = student.gender;
        document.getElementById("currentIndex").value = index;
    }

    function update() {
        let index = document.getElementById("currentIndex").value;
        let newName = document.getElementById("Fullname").value
        let newBirthday = document.getElementById("Datetime").value;
        let newClass = document.getElementById("class1").value;
        let newMajor = document.getElementById("Major").value;
        let newMSV = document.getElementById("MSV").value;
        let newAddress = document.getElementById("Address").value;
        let newEmail= document.getElementById("Email").value;
        let newNumber = document.getElementById("Number").value;
        let newGender = document.getElementById("Gender").value;
        let isValid = true;
        if (_.isEmpty(newName) || newName.length <= 3) {
            document.getElementById("FullnameError").innerHTML = "Vui lòng nhập lại họ và tên!";
            isValid = false;
        } else {
            document.getElementById("FullnameError").innerHTML = "";
          }
        
        if (_.isEmpty(newBirthday)) {
            document.getElementById("DatetimeError").innerHTML = "Vui lòng nhập lại ngày sinh!";
            isValid = false;
          } else {
            document.getElementById("DatetimeError").innerHTML = "";
          }
        if (_.isEmpty(newClass)) {
              document.getElementById("ClassError").innerHTML = "Vui lòng chọn lớp";
              isValid = false;
        } else {
              document.getElementById("ClassError").innerHTML = "";
        }
        if (_.isEmpty(newMajor)) {
              document.getElementById("MajorError").innerHTML = "Vui lòng chọn chuyên ngành!";
              isValid = false;
            } else {
              document.getElementById("MajorError").innerHTML = "";
            }
        
          if (_.isEmpty(newMSV)) {
            document.getElementById("MSVError").innerHTML = "Vui lòng nhập lại mã sinh viên!";
            isValid = false;
          } else {
            document.getElementById("MSVError").innerHTML = "";
          }
  
          if (_.isEmpty(newAddress)) {
            document.getElementById("AddressError").innerHTML = "Vui lòng nhập lại địa chỉ!";
            isValid = false;
          } else {
            document.getElementById("AddressError").innerHTML = "";
          }
        
          if (_.isEmpty(newEmail) || !newEmail.includes("@gmail.com")) {
            document.getElementById("EmailError").innerHTML = "Vui lòng nhập lại email!";
            isValid = false;
          } else {
            document.getElementById("EmailError").innerHTML = "";
          }
        
          if (_.isEmpty(newNumber) || isNaN(newNumber)) {
            document.getElementById("NumberError").innerHTML = "Vui lòng nhập lại số điện thoại!";
            isValid = false;
          } else {
            document.getElementById("NumberError").innerHTML = "";
          }
          if (_.isEmpty(newGender)) {
              document.getElementById("GenderError").innerHTML = "Vui lòng chọn giới tính!";
              isValid = false;
            } else {
              document.getElementById("GenderError").innerHTML = "";
            }
            if(isValid && index >= 0 && index < arr.length){
                arr[index].edit(newName, newBirthday, newClass, newMajor, newMSV, newAddress, newEmail, newNumber, newGender);
                display();
                document.getElementById("Fullname").value = "";
                document.getElementById("preview").value = "";
                document.getElementById("Datetime").value = "";
                document.getElementById("class1").value = "";
                document.getElementById("Major").value = "";
                document.getElementById("MSV").value = "";
                document.getElementById("Address").value = "";
                document.getElementById("Email").value = "";
                document.getElementById("Number").value = "";
                document.getElementById("Gender").value = "";
                document.getElementById("currentIndex").value = "";
            }
    }   
    update();
    deleteFix();
    display();
    document.getElementById("currentIndex").value = "";