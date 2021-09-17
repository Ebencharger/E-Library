$(function () {
let k;
if (localStorage.getItem("Rarel")) {
    k = localStorage.getItem('Rarel');
    Rarel = JSON.parse(k);
}
else if (!localStorage.getItem("Rarel")) {
    let Rarel = [{admin: [{ id: "admin", password: "rarelp23admin", userrequest:[], chat:[{id:"ADMIN",message:"", time:"", date:"", day:""}]}], userD: [{ id: "RAREL-ID1", password: "ebencharger23", fulname: "AJAYI OLUWASEUN EBENEZER", email: "ajayioluwaseunebenezer@gmail.com", country: "Nigeria", phoneno: "+2348167302289", filename: "eben.jpg", books: [{ cover: 'JEZEBEL1.jpg', book: 'jez1.pdf', author: "Oluwaseun E.Ajayi", pages: 112, genre: "Christian Novel", isbn: "ISBN-0023-0022-0001" }, { cover: 'JEZEBEL2.JPG', book: 'jez2.pdf', author: "Oluwaseun E.Ajayi", pages: 108, genre: "Christian Novel", isbn: "ISBN-0023-0022-0002" }], favbook: [{ cover: 'JEZEBEL1.jpg', book: 'jez1.pdf', author: "Oluwaseun E.Ajayi", pages: 112, genre: "Christian Novel", isbn: "ISBN-0023-0022-0001" }], chat:[{id:"RAREL-ID1",message:"Admin, I am waiting for my book request", time:"9:00AM", date:"10/08/2021", day:"Wednesday", response:[{message:"RAREL-ID1, we are currently working on your book request", time:"9:30AM", date:"10/08/2021", day:"Wednesday"}]}], request:[]}], books: [{ cover: 'JEZEBEL1.jpg', book: 'jez1.pdf', author: "Oluwaseun E.Ajayi", pages: 112, genre: "Novel", isbn: "ISBN-0023-0022-0001", status:"free"}, {cover: 'JEZEBEL2.JPG', book: 'jez2.pdf', author: "Oluwaseun E.Ajayi", pages: 108, genre: "Novel", isbn: "ISBN-0023-0022-0002", status:"free"}, {cover: 'pdf/richdad.JPG', book: 'pdf/richdad.pdf', author: "Robert T. Kiyosaki", pages: 189, genre: "Business", isbn: "978-0-446-56817-3", status:"$2"}, {cover: 'pdf/purpose.JPG', book: 'pdf/purpose.pdf', author: "Rick Warren", pages: 139, genre: "Life", isbn: "0-310-20571-9", status:"$2.5"}, {cover: 'pdf/fantabulous.JPG', book: 'pdf/fantabulous.pdf', author: "Frances Hunter", pages: 109, genre: "Life", isbn: "None", status:"$1"},{cover: 'pdf/isokene.JPG', book: 'pdf/isokene.pdf', author: "Opeyemi O.Akintunde", pages: 97, genre: "Novel", isbn: "None", status:"$2"}], usno:1, cosoon: [{ cover: 'bigger.jpeg', author: "Rose Rosetree", genre: "Adventure" }],comment: [{id:"RAREL-ID1", message: "I wish I could buy popcorn for everyone and we come together to read JEZEBEL'S ABODE 1, the Author killed it", time: "9:20AM", date: '06-08-2021' }]}]

localStorage.setItem('Rarel', JSON.stringify(Rarel))
}

setInterval(ref,1000);
   function ref(){
    if (localStorage.getItem("Rarel")) {
        k = localStorage.getItem('Rarel');
        Rarel = JSON.parse(k);
        console.log('Hello');
    }
   }
    let idinp, press = 0, fulNam, nation, email, phoneno, pass, cpass, eyeclick = 0, eyeclick2 = 0, faeye = 0, recpass, newid, userindex, comparebook;
    usno = Rarel[0].usno;
    $('#dashboard').hide();
    let passinp;
    let header = `<div id="header" class="pt-4"><div class="logo"><div class="label">RAREL</div><div class="caption text-danger">(Readers are Learners)</div></div><button class="btn btn-danger head" id="login">LOGIN</button></div>`;
    let form = `<div class="form-group card-body" id="form">
    <div class="text-center"><label class="text-center radmin">RAREL USER</label><br>
    </div><label>ID:</label><div><input type="text" class="form-group form-control-lg w-100 inp1"></div>
    <label>PASSWORD:</label>
    <div><input type="password" class="form-group form-control-lg w-100 inp2">
    <i class="fa fa-eye-slash reveal" id="revpass2"></i><i class="fa fa-eye reveal revpass"></i>
    </div>
    <div class="text-center">
     <button class="btn btn-success login access">LOGIN</button><br>
     <button class="btn btn-primary  mt-2 signup login">SIGN UP</button><br>
     <label class="forgot">Forgot Password?</label>
     </div>
    </div>`
    let signu = `<div class="form-group card-body" id="signform">
     <div class="text-center">
     <label class="text-center radmin">NEW USER</label>
     </div>
     <div class="d-flex signinp justify-content-between row">
     <div class="col-sm-5">
         <div>
             <label>FULLNAME:</label>
             <div><input type="text" placeholder="E.g Ebenezer John" class="form-group form-control-lg  sinp1 sim"></div>
         </div>
         <div>
             <label>COUNTRY:</label>
             <div><input type="text" placeholder="E.g Nigeria" class="form-group form-control-lg  sinp2 sim"></div>
         </div>
         <div>
             <label>EMAIL:</label>
             <div><input type="text" placeholder=" E.g eben@gmail.com" class="form-group form-control-lg  sinp3 sim"></div>
         </div>
     </div>
 
     <div class="ml-5 col-sm-5">
         <div>
             <label>PHONE NUMBER:</label>
             <div><input type="text" placeholder="E.g +2348167302289" class="form-group form-control-lg  sinp4 sim"></div>
         </div>
         <div>
             <label>PASSWORD: max 8</label>
             <div><input type="password" class="form-group form-control-lg  sinp5 sim">
             <i class="fa fa-eye reveal"></i>
             </div>
         </div>
         <div>
             <label>CONFIRM PASSWORD:</label>
             <div><input type="password" class="form-group form-control-lg  sinp6 sim">
             <i class="fa fa-eye reveal2"></i>
             </div>
         </div>
     </div>
 </div>
     <div class="text-center">
      <button class="btn btn-primary login becomeU mb-5">SIGN UP</button><br>
      </div>
     </div>`
    $('#body').on('click', '#revpass2', function () {
        faeye++
        console.log(faeye);
        if ($('.inp2').val() != "" && $('.inp2').attr('type', 'password') && faeye == 1) {
            $('.inp2').attr('type', 'text')
            $('.revpass').show();
            $('#revpass2').hide();
            faeye = 0;
        }
    })

    $('#body').on('click', '.revpass', function () {
      if ($('.inp2').val() != "" && $('.inp2').attr('type', 'text')) {
        $('.revpass').hide();
        $('#revpass2').show();
        $('.inp2').attr('type', 'password');
      }
    })


    //add header to body innerhtml
    $('#body').append(header);
    //at the click of login from landing page
    $('#login').on('click', function () {
        $('#signform').remove();
        $('#form').remove();
        $('#recform').remove();
        $('#messageplate1').remove();
        $('#messageplate').remove();
        $('#capt').remove();
        $('#form').show();
        $('#body').append(form);
        $('.revpass').hide();
    })
    //make sure login from for id is not empty
    $('body').on('click', (e) => {
        if (e.target.classList.contains('inp1')) {
            $('.inp1').on('input', (params) => {
                idinp = (params.target.value);
                console.log(idinp);
            })
        }
        else if (e.target.classList.contains('inp2')) {
            $('.inp2').attr('type', 'password');
            $('.inp2').on('input', (params) => {
                if ($('.inp1').val() == "") {
                    $('.inp1').val('PLEASE FILL THIS FIELD!');
                }
                else if ($('inp1').val() != "") {
                    passinp = (params.target.value);
                    console.log(passinp);
                }
            })
        }
    })
    //make sure login form  for password is not empty
    $('#body').on('click', '.access', function () {
        let reg = /[A-Za-z0-9]{8,30}[@$%&]{0,1}[A-Za-z]{0,30}/;
        let newreg = reg.test(passinp);
        console.log(newreg);
        if ($('.inp2').val() == "" && $('.inp1').val() != "") {
            $('.inp2').attr('type', 'text');
            $('.inp2').val('PLEASE FILL THIS FIELD!');
        }
        else if ($('.inp1').val() == "" && $('.inp2').val() == "") {
            $('.inp1').val('PLEASE FILL THIS FIELD!');
            $('.inp2').attr('type', 'text');
            $('.inp2').val('PLEASE FILL THIS FIELD!');
        }
        else if ($('.inp1').val() != "" && $('.inp2').val() != "") {
            for (i = 0; i < Rarel[0].userD.length; i++) {
                console.log($('.inp1').val(), Rarel[0].userD[i].id);
                console.log($('.inp2').val(), Rarel[0].userD[i].password);
                if (($('.inp1').val() == Rarel[0].userD[i].id) && ($('.inp2').val() == Rarel[0].userD[i].password) && newreg != false) {
                    userindex = i
                    console.log(userindex);
                    $('.inp1').val("");
                    $('.inp2').val("");
                    $('#body').hide();  
                    userDetails();
                    $('#dashboard').show();
                    faeye=0;
                    calldashboard();
                    return;
                }
                else if (($('.inp1').val() != Rarel[0].userD[i].id) && ($('.inp2').val() == Rarel[0].userD[i].password) && (newreg != false || newreg==false)) {
                    $('.inp1').val('WRONG ID')
                    return;
                }
                else if (($('.inp1').val() == Rarel[0].userD[i].id) && ($('.inp2').val() != Rarel[0].userD[i].password)) {
                    $('.inp2').attr('type', 'text');
                    $('.inp2').val('WRONG PASSWORD')
                    return;
                }
                else if (!newreg) {
                    $('.inp2').attr('type', 'text');
                    $('.inp2').val('CHECK YOUR PASSWORD')
                }
                else if (i == Rarel[0].userD.length - 1 && (($('.inp1').val() != Rarel[0].userD[i].id)) && (($('.inp2').val() != Rarel[0].userD[i].password)) && (newreg == false || newreg!=false)) {
                    console.log("hrmmm");
                    $('.inp1').val('WRONG ID')
                    $('.inp2').attr('type', 'text');
                    $('.inp2').val('WRONG PASSWORD')
                }
    
            }
        }
        
    })
    //signup from login form
    $('#body').on('click', '.signup', function () {
        $('#signform').remove();
        $('#recform').remove();
        $('#messageplate1').remove();
        $('#form').remove();
        $('#messageplate').remove();
        $('#signform').show();
        $('#body').append(signu)
    })




    //signup form input
    $('body').on('click', (e) => {
        if (e.target.classList.contains('sinp1')) {
            $('.sinp1').on('input', (params) => {
                fulNam = (params.target.value);
                console.log(fulNam);
            })
            $('.sinp1').on('mouseout', (params) => {
                let reg = /[a-z]{4,30}/;
                let newreg = reg.test(fulNam);
                console.log(newreg);
                if (newreg == false) {
                    setTimeout(() => {
                        $('.sinp1').val("")
                        $('.sinp1').val('PLEASE ENTER A VALID NAME!')
                    }, 1000);
                }
                else if (newreg != false) {
                    $('.sinp1').val(fulNam);
                }
            })
        }
        else if (e.target.classList.contains('sinp2')) {
            $('.sinp2').on('input', (params) => {
                    nation = (params.target.value);
                    console.log(nation);
            })
            $('.sinp2').on('mouseout', (params) => {
                let reg = /[a-z]{4,30}/;
                let newreg = reg.test(nation);
                console.log(newreg);
                if (newreg == false) {
                    setTimeout(() => {
                        $('.sinp2').val("")
                        $('.sinp2').val('PLEASE ENTER A VALID COUNTRY!')
                    }, 1000);
                }
                else if (newreg != false) {
                    $('.sinp2').val(nation);
                }
            })
        }
        else if (e.target.classList.contains('sinp3')) {
            console.log($('.sinp2').val());
            $('.sinp3').on('input', (params) => {
                    email = (params.target.value);
                    console.log(email);
            })
            $('.sinp3').on('mouseout', (params) => {
                let reg = /[a-z]{4,30}[0-9]{0,10}[@]{1}[a-z]{5,10}[.]{1}[a-z]{3,8}/;
                let newreg = reg.test(email);
                console.log(newreg);
                for (i = 0; i < Rarel[0].userD.length; i++) {
                    console.log($('.sinp3').val(), Rarel[0].userD[i].email);
                    if ($('.sinp3').val() == Rarel[0].userD[i].email) {
                        $('.sinp3').val("EMAIL EXISTED ALREADY!");
                        seen=true;
                        setTimeout(() => {
                            seen=false;
                        }, 100);
                        return;
                    }
                    else if (i == Rarel[0].userD.length - 1 && $('.sinp3').val() != Rarel[0].userD[i].email) {
                        console.log('not exist');
                        if (newreg == false) {
                            setTimeout(() => {
                                $('.sinp3').val("")
                                $('.sinp3').val('PLEASE ENTER A VALID EMAIL!')
                            }, 1000);
                        }
                        else if (newreg != false &&  $('.sinp3').val() == Rarel[0].userD[i].email) {
                            $('.sinp3').val(email);
                        }
                    }
                }
            })
        }
        else if (e.target.classList.contains('sinp4')) {
            $('.sinp4').on('input', (params) => {
                    phoneno = (params.target.value);
                    console.log(phoneno);
            })
            $('.sinp4').on('mouseout', (params) => {
                let reg = /[+]{1}[1-9]{2,5}[0-9]{10}/;
                let newreg = reg.test(phoneno);
                console.log(newreg);
                seen=true;
                for (i = 0; i < Rarel[0].userD.length; i++) {
                    console.log($('.sinp4').val(), Rarel[0].userD[i].phoneno);
                    if ($('.sinp4').val() == Rarel[0].userD[i].phoneno) {
                        $('.sinp4').val("PHONE NUMBER EXISTED ALREADY!");
                        setTimeout(() => {
                            seen=false;
                        }, 100);
                        return;
                    }
                    else if (i == Rarel[0].userD.length - 1 && seen==false) {
                        console.log('not exist');
                        if (newreg == false) {
                            setTimeout(() => {
                                $('.sinp4').val("")
                                $('.sinp4').val('PLEASE ENTER A VALID NUMBER!')
                            }, 1000);
                        }
                        else if (newreg != false && $('.sinp4').val() == Rarel[0].userD[i].phoneno) {
                            $('.sinp4').val(phoneno);
                        }
                    }
                }
            })
        }
        else if (e.target.classList.contains('sinp5')) {
            console.log('signup5');
            $('.sinp5').on('input', (params) => {
                $('.sinp5').attr('type', 'password');
                    pass = (params.target.value);
                    console.log(pass);
            })

            $('.sinp5').on('mouseout', (params) => {
                let reg = /[A-Za-z0-9]{8,30}[@$%&]{0,1}[A-Za-z]{0,30}/;
                let newreg = reg.test(pass);
                console.log(newreg);
                if (newreg == false) {
                    setTimeout(() => {
                        $('.sinp5').val("")
                        $('.sinp5').attr('type', 'text');
                        $('.sinp5').val('MAX OF 8 WITH @ OR NOT')
                    }, 1000);
                }
                else if (newreg != false) {
                    $('.sinp5').attr('type', 'password');
                    $('.sinp5').val(pass);
                }
            })
        }
        else if (e.target.classList.contains('sinp6')) {
            $('.sinp6').val("")
            console.log('signup6');
            $('.sinp6').on('input', (params) => {
                    $('.sinp6').attr('type', 'password');
                    cpass = (params.target.value);
                    console.log(cpass);
            })
            $('.sinp6').on('mouseout', (params) => {
                if (pass != cpass) {
                    setTimeout(() => {
                        $('.sinp6').val("")
                        $('.sinp6').attr('type', 'text');
                        $('.sinp6').val('PASSWORD DID NOT MATCH')
                    }, 1000);
                }
                else if (pass == cpass) {
                    $('.sinp6').attr('type', 'password');
                    $('.sinp6').val(cpass);
                }
            })
        }
    })



    //signup button in signup form
    $('#body').on('click', '.becomeU', function () {
        if ($('.sinp6').val() != "" && $('.sinp5').val() != "" && $('.sinp4').val() != "" &&
            $('.sinp3').val() != "" && $('.sinp2').val() != "" && $('.sinp1').val() != "") {
            console.log("your form is successfully submitted, write down your login details");
            $('.sinp1').val(""), $('.sinp2').val(""), $('.sinp3').val(""), $('.sinp4').val(""), $('.sinp5').val(""), $('.sinp6').val("");
            $('#signform').remove()
            usno++
            console.log(Rarel[0].usno);
            newid = `RAREL-ID${usno}`
            Rarel[0].usno = usno;
            Rarel[0].userD.push({ id: newid, password: pass, fulname: fulNam, email: email, country: nation, phoneno: phoneno, books: [{ cover: 'JEZEBEL1.jpg', book: 'jez1.pdf', author: "Oluwaseun E.Ajayi", pages: 112, genre: "Christian Novel", isbn: "ISBN-0023-0022-0001" }], comment: [], favbook: [{ cover: 'JEZEBEL1.jpg', book: 'jez1.pdf', author: "Oluwaseun E.Ajayi", pages: 112, genre: "Christian Novel", isbn: "ISBN-0023-0022-0001" }], chat: [], request: [] })
            localStorage.setItem('Rarel', JSON.stringify(Rarel));
            let feed = `<div class="card-body text-center" id="messageplate"><p>Your Form has been successfully submitted, copy down this info <b>ID:${newid}, PASSWORD:${pass}.</b> Thanks for joining RAREL, the unique Library</p><div class="text-center"><button class="btn btn-success w-25 success">OK</button></div></div>`
            console.log(pass);
            $('#body').append(feed);
            console.log(newid);
        }
        else if ($('.sinp6').val() == "") {
            $('.sinp6').val('PLEASE FILL THIS FIELD!');
        }
    })

    $('#body').on('click', '.success', function () {
        $('#messageplate').remove();
        $('#body').append(form)
    })

    //fa fa eye
    $('#body').on('click', '.reveal', function () {
        eyeclick++
        if ($('.sinp5').val() != "" && $('.sinp5').attr('type', 'password') && eyeclick == 1) {
            $('.sinp5').attr('type', 'text')
        }
        else if ($('.sinp5').val() != "" && $('.sinp5').attr('type', 'text') && eyeclick == 2) {
            $('.sinp5').attr('type', 'password');
            eyeclick = 0;
        }
    })
    $('#body').on('click', '.reveal2', function () {
        eyeclick2++
        if ($('.sinp6').val() != "" && $('.sinp6').attr('type', 'password') && eyeclick2 == 1) {
            $('.sinp6').attr('type', 'text')
        }
        else if ($('.sinp6').val() != "" && $('.sinp6').attr('type', 'text') && eyeclick2 == 2) {
            $('.sinp6').attr('type', 'password');
            eyeclick2 = 0;
        }
    })



    $('#body').on('click', '.forgot', function () {
        let retrieve = `<div class="form-group card-body mt-5" id="recform">
        <div class="text-center"><label class="text-center radmin">PASSWORD RECOVERY</label><br>
        </div><label class="recov text-danger">ID OR EMAIL OR FULLNAME</label><div><input type="text" class="form-group form-control-lg w-100 recinp"></div>
        <div class="text-center">
         <button class="btn btn-success recfo recbu">RECOVER PASSWORD</button><br>
         </div>
        </div>`
        $('#form').remove();
        $('#body').append(retrieve);
    })

    $('body').on('click', (e) => {
        if (e.target.classList.contains('recinp')) {
            $('#body').on('input', '.recinp', function (params) {
                console.log(params.target.value);
                recpass = params.target.value;
            })
        }
    })

    $('body').on('click', (e) => {
        if (e.target.classList.contains('recbu')) {
            console.log($('.recinp').val());
            let reg = /[a-z]{4,30}[0-9]{0,10}[@]{1}[a-z]{5,10}[.]{1}[a-z]{3,8}/;
            let newreg = reg.test(recpass);
            if (!newreg) {
                $('.recinp').val("INVALID EMAIL")
            }
            if ($('.recinp').val() == "") {
                console.log("error");
                $('.recinp').val("PLEASE FILL THIS FIELD")
            }
            else if ($('.recinp').val() != "" && newreg) {
                console.log($('#recform'));
                let feed2 = `<div class="card-body text-justify" id="messageplate1">A PASSWORD RESET LINK HAS BEEN SENT TO YOUR EMAIL.</b> Thanks for being part of RAREL, the unique Library</p> <div class="text-center"><button class="btn btn-success w-25 success2">OK</button></div></div>`;
                $('#recform').remove();
                $('#body').append(feed2);
                $('.recinp').val("")
            }
        }
    })

    $('#body').on('click', '.success2', function () {
        $('#messageplate1').remove();
        $('#body').append(form)
    })



    //dashboard


let date = new Date(), day = date.getDay(), month = date.getMonth(), timwzon, a, b, newmonth;
let hour = date.getHours(), minutes = date.getMinutes();
let montharray = [{ month: "01" }, { month: "02" }, { month: "03" },
{ month: "04" }, { month: "05" }, { month: "06" }, { month: "07" }, { month: "08" },
{ month: "09" }, { month: "10" }, { month: "11" }, { month: "12" }];
let dayarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for (let k = 0; k < montharray.length; k++) {
    newmonth = montharray[k];
}
newmonth = montharray[month].month;
let newday = dayarray[day];
let todaysday;
let fulldate = (`${date.getDate()}/${newmonth}/${date.getFullYear()}`);
if (minutes < 10) {
    minutes = `0${minutes}`;
}

if (hour >= 12) {
    timwzon = "PM"
    hour = hour - 12;
}
else if (hour < 12) {
    if (hour == 0) {
        hour = 12
    }
    timwzon = "AM"
    hour = hour;
}
let newtime = `${hour}:${minutes}${timwzon}`;
let pressn = 0, user, i, filename, index, getbook, coming, authorindex;
let id, fulname, password, country;
$('.hidemenu').hide();
$('.msg').hide();

userindex = 0



dashhome();
   function dashhome(){
    removeExcess();
    let tit=`<p class="title text-danger">NEXT WEEK SAGA</p>`
    $('.rightpanel').append(tit);
    for (i = 0; i < Rarel[0].cosoon.length; i++) {
        coming = `<div id="comingbook"><div class="comingbookhold"><p hidden>${i}</p><img src="${Rarel[0].cosoon[i].cover}" class="comingbookc" id="bookc"><div class="d-block comingbookdetail"><div>Author:- ${Rarel[0].cosoon[i].author}</div><div>Genre: ${Rarel[0].cosoon[i].genre}</div></div><div></div>`;
        $('.rightpanel').append(coming);
    }
}





//when you click fa fa-bar
$('.bar').on('click', function () {
    pressn++
    if (pressn == 1) {
        $('.hidemenu').show();
    }
    else if (pressn == 2) {
        $('.hidemenu').hide();
        pressn = 0;
    }
})

//when you log out
$('.logout').on('click', function () {
    removeExcess();
    $('#dashboard').hide();
    $('#body').show();
})

//when i click on dashboard in fa fa-bar
$('.dashbd').on('click', calldashboard)
function calldashboard() {
    removeExcess();
    dashhome();
    pressn = 0;
    feedcount=0;
}

//i get user detail

function userDetails() {
    user = Rarel[0].userD[userindex].id;
    fulname = Rarel[0].userD[userindex].fulname;
    email = Rarel[0].userD[userindex].email;
    country = Rarel[0].userD[userindex].country;
    phoneno = Rarel[0].userD[userindex].phoneno;
    password = Rarel[0].userD[userindex].password;
    $('.usern').html("");
    $('.usern').append(user);
    filename = Rarel[0].userD[userindex].filename;
}
//    console.log( filename = Rarel[0].userD[1].filename);
function removeExcess() {
    for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
        $('#userbook').remove();
        $('nav').remove();
    }
    for (i = 0; i < Rarel[0].comment.length; i++) {
        $('.resp').remove();
    }
    for (i = 0; i < Rarel[0].userD[userindex].favbook.length; i++) {
        $('#favbk').remove();
    }
    for (i = 0; i < Rarel[0].cosoon.length; i++) {
        $('#comingbook').remove();
    }
    for (i = 0; i < Rarel[0].books.length; i++) {
        $('#book').remove();
    }
    for (i = 0; i < Rarel[0].userD[userindex].chat.length; i++) {
        $('.thechat').remove();
    }
    $('.reply').remove();
    $('#userbook').remove();
    $('.very').remove();
    $('#book').remove();
    $('#userhere').remove();
    $('.openpd').remove();
    $('.hidemenu').hide();
    $('#allbooks').remove();
    $('.payment').remove();
    $('.request').remove();
    $('.feed').remove();
    $('.msg').remove();
    $('.chat').remove();
    $('.title').remove();
  
}

// console.log(press);

//when you click on my profile
$('.myprof').on('click', function () {
    removeExcess();
    let userdetail = `<nav><img src=${filename} alt="" class="propic"></nav><div id="userhere"><div>${fulname}</div><div>${email}</div><div> ${country}</div><div>${phoneno}</div><div>${user}</div><div>${password}</div></div>`;
    $('.rightpanel').append(userdetail);
})

//when you click on edit profile
$('.editprof').on('click', editpd)
function editpd() {
    removeExcess();
    let editdetail = `<nav><img src=${filename} alt="" class="propic"><input type="file"  accept="image/*" name="changepp" id="changepp" ></nav><div id="userhere"><div class="info fullname">${fulname}</div><div class="info email">${email}</div><div class="info country">${country}</div><div class="info phoneno">${phoneno}</div><div class="info id">${user}</div><div class="info password">${password}</div><button class="btn btn-primary mr-5 edprof">EDIT</button><button class="btn btn-success saprof">SAVE</button></div>`;
    $('.rightpanel').append(editdetail);
}

//when you click on edit
$('#dashboard').on('click', '.edprof', function () {
    $('.info').attr('contenteditable', 'true');
})

//when you click on save
$('#dashboard').on('click', '.saprof', function () {
    $('.info').attr('contenteditable', 'false');
    for(i=0; i<Rarel[0].userD.length;i++){
        if(Rarel[0].userD[i].id == $('.id').html()){
            $('.id').html("ID EXISTED ALREADY!");
            seen=true;
            setTimeout(() => {
                seen=false;  
            }, 10);
            return;
        }
        else if(i==Rarel[0].userD.length && seen==false){
            Rarel[0].userD[userindex].id == $('.id').html();
            Rarel[0].userD[userindex].password = $('.password').html();
            Rarel[0].userD[userindex].fulname = $('.fullname').html();
            Rarel[0].userD[userindex].email = $('.email').html();
            Rarel[0].userD[userindex].phoneno = $('.phoneno').html();
            Rarel[0].userD[userindex].country = $('.country').html();
            //push to local storage
            localStorage.setItem('Rarel', JSON.stringify(Rarel));
            console.log(Rarel);
            removeExcess();
            userDetails();
            editpd();
        }
    }
})

$('.mybok').on('click', function () {
    removeExcess();
    if ((window.visualViewport.width) == '600') {
        console.log("hello");
        $('.rightpanel').css({ display: 'block' });
    }
    else if (window.visualViewport.width != '600') {
        console.log("yeye");
        $('.rightpanel').css({ display: 'flex' });
    }
    for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
        let mybook = `<div id="userbook"><div class="bookhold"><p hidden>${i}</p><img src="${Rarel[0].userD[userindex].books[i].cover}" class="bookc" id="bookc"><div class="d-block bookdetail"><div>Author:- ${Rarel[0].userD[userindex].books[i].author}</div><div>Pages:- ${Rarel[0].userD[userindex].books[i].pages}</div><div>Genre: ${Rarel[0].userD[userindex].books[i].genre}</div><div>ISBN: ${Rarel[0].userD[userindex].books[i].isbn}</div></div><div></div>`;
        $('.rightpanel').append(mybook);
    }

    getbook = () => {
        let bookc = $('.bookc');
        for (let j = 0; j < bookc.length; j++) {
            bookc[j].addEventListener('click', () => {
                console.log(j);
                let readpdf = `<div class="openpd"><iframe src=${Rarel[0].userD[userindex].books[j].book} frameborder="0" class="iread"></iframe></div>`
                $('.rightpanel').append(readpdf);
            })
        }
    }
    getbook();

    $('body').on('click', (e) => {
        if (e.target.classList.contains('bookc')) {
            console.log("ijghghgh");
            getbook();
        }
    })
})


$('#dashboard').on('change', '#changepp', function (e) {
    filename = $('#changepp').val();
    console.log(filename);
    if (filename.substring(3, 11) == 'fakepath') {
        filename = filename.substring(12);
        console.log(filename);
    $('.propic').attr('src', filename);
    Rarel[0].userD[userindex].filename = filename;
    localStorage.setItem('Rarel', JSON.stringify(Rarel));
    }
})

$('.response').on('click', getmess)
function getmess() {
    removeExcess();
    for (i = 0; i < Rarel[0].comment.length; i++) {
        let respon = `<div class="resp"><label>Comments</label><p class="id">${Rarel[0].comment[i].id}: says</p>
<p>${Rarel[0].comment[i].message}</p> <span>${Rarel[0].comment[i].time}</span><span>   ${Rarel[0].comment[i].date}</span></div>`
        $('.rightpanel').append(respon);
    }
    let reply = `<div class="reply"><label>Reply: Max of 200</label><span class="charactercount"></span> <div contenteditable="true" class="messagebox card-body"></div><button class="btn btn-success replym">Send</button></div>`
    $('.rightpanel').append(reply);

}

$('#dashboard').on('input', '.messagebox', (e) => {
    let a = ($('.messagebox').html().length);
    $('.charactercount').html(a + "/200")
    if (a == 200) {
        console.log("200");
        let k = $('.messagebox').html();
        k = k.substring(1, 200);
        console.log(k);
        $('.messagebox').html("");
        $('.messagebox').html(k);
    }
})

$('#dashboard').on('click', '.replym', function () {
    fulldate, newtime;
    Rarel[0].comment.push({ id: user, message: $('.messagebox').html(), time: newtime, date: fulldate });
    localStorage.setItem('Rarel', JSON.stringify(Rarel));
    $('.messagebox').html("");
    getmess();

})

$('.favbook').on('click', function () {
    removeExcess();
    for (i = 0; i < Rarel[0].userD[userindex].favbook.length; i++) {
        let myfav = `<div id="favbk"><div class="favhold"><p hidden>${i}</p><img src="${Rarel[0].userD[userindex].favbook[i].cover}" class="favbc" id="favbc"><div class="d-block favbdetail"><div>Author:- ${Rarel[0].userD[userindex].favbook[i].author}</div><div>Pages:- ${Rarel[0].userD[userindex].favbook[i].pages}</div><div>Genre: ${Rarel[0].userD[userindex].favbook[i].genre}</div><div>ISBN: ${Rarel[0].userD[userindex].favbook[i].isbn}</div></div><div></div>`;
        $('.rightpanel').append(myfav);
    }

    let favbok = () => {
        let bookc = $('.favbc');
        for (let j = 0; j < Rarel[0].userD[userindex].favbook.length; j++) {
            bookc[j].addEventListener('click', () => {
                console.log(j);
                let readpdf = `<div class="openpd"><iframe src=${Rarel[0].userD[userindex].favbook[j].book} frameborder="0" class="iread"></iframe></div>`
                $('.rightpanel').append(readpdf);
            })
        }
    }
    favbok();

    $('body').on('click', (e) => {
        if (e.target.classList.contains('favbc')) {
            console.log("ijghghgh");
            favbok();
        }
    })
})

$('.verify').on('click', function () {
    removeExcess();
    let verify = `<div class="very"><input type="text" placeholder="Enter ISBN of the book" class="form-group form-control-lg w-50 isbn"><br><button class="btn btn-primary ml-5 verynow">Search</button></div>`
    $('.rightpanel').append(verify)
})

$('#dashboard').on('click', '.verynow', function () {
    for (i = 0; i < Rarel[0].books.length; i++) {
        if ($('.isbn').val() == Rarel[0].books[i].isbn) {
            $('.isbn').val("");
            $('#book').remove();
            let mybook = `<div id="book"><div class="hold"><p hidden>${i}</p><img src="${Rarel[0].books[i].cover}" class="bookcov" id="bookcov"><div class="d-block bookde"><div>Author:- ${Rarel[0].books[i].author}</div><div>Pages:- ${Rarel[0].books[i].pages}</div><div>Genre: ${Rarel[0].books[i].genre}</div><div>ISBN: ${Rarel[0].books[i].isbn}</div></div><div></div>`;
            $('.rightpanel').append(mybook);
            return;
        }
        else if (i == Rarel[0].books.length - 1 && $('.isbn').val() != Rarel[0].books[i].isbn) {
            $('.isbn').val("SORRY! NO SUCH BOOK HERE")
        }
    }

})

console.log(Rarel[0].books);

$('.allbooks').on('click', allbkos)
function allbkos() {
    removeExcess();
    pressn = 0;
    feedcount=0;
    let allbkshead = `<div id="allbooks">
   <div class="searchhold"><input type="text" placeholder="Search by Book Author" class="form-group form-control-lg bookser"><i class="fa fa-search searchit"></i>
  <select id="sort" class="form-group form-control-lg">
  <option value="SELECT GENRE">SELECT GENRE</option>
  <option value="BUSINESS">BUSINESS</option>
  <option value="MARITAL">MARITAL</option>
  <option value="SEX LIFE">SEXUAL LIFE</option>
  <option value="NOVEL">NOVEL</option>
  <option value="LIFE">LIFE</option>
  </select>
  </div>`
    $('.rightpanel').append(allbkshead);
    for (i = 0; i < Rarel[0].books.length; i++) {
        let allbks = `<div id="book" style="margin-top:"300px""><div class="hold"><p hidden>${i}</p><img src="${Rarel[0].books[i].cover}" class="bookcov" id="bookcov"><div class="d-block bookde"><div>Author:- ${Rarel[0].books[i].author}</div><div>Pages:- ${Rarel[0].books[i].pages}</div><div>Genre: ${Rarel[0].books[i].genre}</div><div>ISBN: ${Rarel[0].books[i].isbn}</div><div>${Rarel[0].books[i].status}</div></div></div><div><button class="btn btn-danger save">Save</button><button class="btn btn-primary ml-4 read">Read</button><button class="btn btn-success ml-4 download">Download</button></div></div>
       </div>`
        $('.rightpanel').append(allbks);

    }
    savbok();
    readbok();
    downbok();
}

// i want to save book
function savbok() {
    let svbook = $('.save');
    for (let k = 0; k < Rarel[0].books.length; k++) {
        svbook[k].addEventListener('click', function () {
            console.log(k);
            if (Rarel[0].books[k].status == "free") {
                for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                    if (Rarel[0].books[k].cover == Rarel[0].userD[userindex].books[i].cover) {
                        console.log("the same");
                        $(this).attr('disabled', 'true');
                        // $(this).next().next().attr('disabled', 'true');
                        return;
                    }
                    else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[k].cover != Rarel[0].userD[userindex].books[i].cover) {
                        console.log("not same");
                        Rarel[0].userD[userindex].books.push({ cover: Rarel[0].books[k].cover, book: Rarel[0].books[k].book, author: Rarel[0].books[k].author, pages: Rarel[0].books[k].pages, genre: Rarel[0].books[k].genre, isbn: Rarel[0].books[k].isbn });
                        localStorage.setItem('Rarel', JSON.stringify(Rarel));
                    }
                }
            }
            else if (Rarel[0].books[k].status != "free") {
                console.log("not free");
                for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                    if (Rarel[0].books[k].cover == Rarel[0].userD[userindex].books[i].cover) {
                        console.log("the same");
                        $(this).attr('disabled', 'true');
                        // $(this).next().next().attr('disabled', 'true');
                        return;
                    }
                    else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[k].cover != Rarel[0].userD[userindex].books[i].cover) {
                        console.log("not same");
                        removeExcess();
                        let pay = `<div class="payment">
                     <div><p>Make Payment</p></div>
                     <div><span>SELECT ANY PAYMENT TYPE</span></div>
                <div><input type="text" value="${Rarel[0].books[k].status}" class="price"></div>
                <div class="flex paygate">
                <a href="http://www.paypal.com"><img src="paypal.png" alt="" class="paypal"></a> 
                 <a href="http://www.flutterwave.com"><img src="flutter.png" alt="" class="flutter"></a>
                 <a href="http://www.remita.com"><img src="remita.png" alt="" class="remita"></a>
             </div> 
                <div class="buts"><button class="btn btn-danger ml-5 cancel">Cancel</button></div>
                 </div>`
                        $('.rightpanel').append(pay);
                    }
                }
            }

        })
    }
}


$('body').on('click', (e) => {
    if (e.target.classList.contains('save')) {
        console.log("ijghghgh");
        savbok()
    }
})

$('#dashboard').on('click', '.cancel', function (params) {
    allbkos();
})



// i want to read book
function readbok() {
    let rdbook = $('.read');
    for (let k = 0; k < Rarel[0].books.length; k++) {
        rdbook[k].addEventListener('click', function () {
            console.log(k);
            if (Rarel[0].books[k].status == "free") {
                removeExcess();
                let readpdf = `<div class="openpd"><iframe src=${Rarel[0].books[k].book} frameborder="0" class="iread" height="669px"></iframe></div>`
                $('.rightpanel').append(readpdf);
            }
            else if (Rarel[0].books[k].status != "free") {
                console.log("not free");
                for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                    if (Rarel[0].books[k].cover == Rarel[0].userD[userindex].books[i].cover) {
                        console.log("the same");
                        removeExcess();
                        let readpdf = `<div class="openpd"><iframe src=${Rarel[0].books[k].book} frameborder="0" class="iread" height="669px"></iframe></div>`
                        $('.rightpanel').append(readpdf);
                        return;
                    }
                    else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[k].cover != Rarel[0].userD[userindex].books[i].cover) {
                        console.log("not same");
                        removeExcess();
                        let pay = `<div class="payment">
                        <div><p>Make Payment</p></div>
                        <div><span>SELECT ANY PAYMENT TYPE</span></div>
                   <div><input type="text" value="${Rarel[0].books[k].status}" class="price"></div>
                   <div class="flex paygate">
                   <a href="http://www.paypal.com"><img src="paypal.png" alt="" class="paypal"></a> 
                    <a href="http://www.flutterwave.com"><img src="flutter.png" alt="" class="flutter"></a>
                    <a href="http://www.remita.com"><img src="remita.png" alt="" class="remita"></a>
                </div> 
                   <div class="buts"><button class="btn btn-danger ml-5 cancel">Cancel</button></div>
                    </div>`
                        $('.rightpanel').append(pay);
                    }
                }
            }

        })
    }
}

$('body').on('click', (e) => {
    if (e.target.classList.contains('read')) {
        console.log("ijghghgh");
        readbok()
    }
})



// i want to download book
function downbok() {
    let downbook = $('.download');
    for (let k = 0; k < Rarel[0].books.length; k++) {
        downbook[k].addEventListener('click', function () {
            console.log(k);
            if (Rarel[0].books[k].status == "free") {
                for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                    if (Rarel[0].books[k].cover == Rarel[0].userD[userindex].books[i].cover) {
                        console.log("the same");
                        $(this).html(`<a href="${Rarel[0].books[k].book}" class="text-white" target="_blank">Download</a>`);
                        return;
                    }
                    else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[k].cover != Rarel[0].userD[userindex].books[i].cover) {
                        console.log("not same");
                        $(this).html(`<a href="${Rarel[0].books[k].book}" class="text-white" target="_blank">Download</a>`);
                    }
                }
            }
            else if (Rarel[0].books[k].status != "free") {
                console.log("not free");
                for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                    if (Rarel[0].books[k].cover == Rarel[0].userD[userindex].books[i].cover) {
                        console.log("the same");
                        $(this).html(`<a href="${Rarel[0].books[k].book}" class="text-white" target="_blank">Download</a>`);
                        return;
                    }
                    else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[k].cover != Rarel[0].userD[userindex].books[i].cover) {
                        console.log("not same");
                        removeExcess();
                        let pay = `<div class="payment">
                        <div><p>Make Payment</p></div>
                        <div><span>SELECT ANY PAYMENT TYPE</span></div>
                   <div><input type="text" value="${Rarel[0].books[k].status}" class="price"></div>
                   <div class="flex paygate">
                   <a href="http://www.paypal.com"><img src="paypal.png" alt="" class="paypal"></a> 
                    <a href="http://www.flutterwave.com"><img src="flutter.png" alt="" class="flutter"></a>
                    <a href="http://www.remita.com"><img src="remita.png" alt="" class="remita"></a>
                </div> 
                   <div class="buts"><button class="btn btn-danger ml-5 cancel">Cancel</button></div>
                    </div>`
                        $('.rightpanel').append(pay);
                    }
                }
            }

        })
    }
}
$('body').on('click', (e) => {
    if (e.target.classList.contains('download')) {
        console.log("ijghghgh");
        downbok()
    }
})



let seen=false;

$('#dashboard').on('input', '.bookser', function (params) {
    comparebook = params.target.value;
    console.log(comparebook);
})

$('#dashboard').on('click', '.searchit', function () {
    removeExcess();
    $('#allbooks').remove();
    let allbkshead = `<div id="allbooks">
    <div class="searchhold"><input type="text" placeholder="Search by Book Author" class="form-group form-control-lg bookser"><i class="fa fa-search searchit"></i>
   <select id="sort" class="form-group form-control-lg">
   <option value="SELECT GENRE">SELECT GENRE</option>
   <option value="BUSINESS">BUSINESS</option>
   <option value="MARITAL">MARITAL</option>
   <option value="SEX LIFE">SEXUAL LIFE</option>
   <option value="NOVEL">NOVEL</option>
   <option value="LIFE">LIFE</option>
   </select>
   </div>`
    $('.rightpanel').append(allbkshead);
    for (i = 0; i < Rarel[0].books.length; i++) {
        let reg = new RegExp(comparebook, 'gi');
        let conreg = Rarel[0].books[i].author.match(reg);
        console.log(conreg, Rarel[0].books[i].author);
        if (conreg) {
            $('.bookser').val("");
            $('.bookser').val("RESULT(s) FOUND");
            authorindex = i;
            seen=true;
            console.log(3 * authorindex);
            let allbks = `<div id="book" style="margin-top:"300px""><div class="hold"><img src="${Rarel[0].books[authorindex].cover}" class="bookcov" id="bookcov"><div class="d-block bookde"><div>Author:- ${Rarel[0].books[authorindex].author}</div><div>Pages:- ${Rarel[0].books[authorindex].pages}</div><div>Genre: ${Rarel[0].books[authorindex].genre}</div><div>ISBN: ${Rarel[0].books[authorindex].isbn}</div><div>${Rarel[0].books[authorindex].status}</div></div></div><div><button class="btn btn-danger sersave" id="${i}">Save</button><button class="btn btn-primary ml-4 serread" id="${i}">Read</button><button class="btn btn-success ml-4 serdownload" id="${i}">Download</button></div></div>
              </div>`
            $('.rightpanel').append(allbks);
            console.log(seen);
            setTimeout(() => {
                seen=false;
            }, 100);
        }

        else if (i == Rarel[0].books.length - 1 && seen==false) {
            $('.bookser').val("NO RESULT FOUND");
            console.log(seen);
            $('#dashboard').on('click', '.bookser', function (params) {
                $('.bookser').val("");
               
            })
        }
    }

})


// i want to save book of search
$('body').on('click', (e) => {
    if (e.target.classList.contains('sersave')) {
        var bookId = e.target.getAttribute('id');
         let thivar=e.target;
        // sersavbok(bookId, e);
        if (Rarel[0].books[bookId].status == "free") {
            for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                if (Rarel[0].books[bookId].cover == Rarel[0].userD[userindex].books[i].cover) {
                    console.log("the same");
                    console.log($(e.target).html());
                    $(e.target).attr('disabled', 'true');
                    // $(this).next().next().attr('disabled', 'true');
                    return;
                }
                else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[bookId].cover != Rarel[0].userD[userindex].books[i].cover) {
                    console.log("not same");
                    Rarel[0].userD[userindex].books.push({ cover: Rarel[0].books[bookId].cover, book: Rarel[0].books[bookId].book, author: Rarel[0].books[bookId].author, pages: Rarel[0].books[bookId].pages, genre: Rarel[0].books[bookId].genre, isbn: Rarel[0].books[bookId].isbn });
                    localStorage.setItem('Rarel', JSON.stringify(Rarel));
                }
            }
        }
        else if (Rarel[0].books[bookId].status != "free") {
            console.log("not free");
            for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                if (Rarel[0].books[bookId].cover == Rarel[0].userD[userindex].books[i].cover) {
                    console.log("the same");
                    $(e.target).attr('disabled', 'true');
                    // $(this).next().next().attr('disabled', 'true');
                    return;
                }
                else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[bookId].cover != Rarel[0].userD[userindex].books[i].cover) {
                    console.log("not same");
                    removeExcess();
                    let pay = `<div class="payment">
                 <div><p>Make Payment</p></div>
                 <div><span>SELECT ANY PAYMENT TYPE</span></div>
            <div><input type="text" value="${Rarel[0].books[bookId].status}" class="price"></div>
            <div class="flex paygate">
            <a href="http://www.paypal.com"><img src="paypal.png" alt="" class="paypal"></a> 
             <a href="http://www.flutterwave.com"><img src="flutter.png" alt="" class="flutter"></a>
             <a href="http://www.remita.com"><img src="remita.png" alt="" class="remita"></a>
         </div> 
            <div class="buts"><button class="btn btn-danger ml-5 cancel">Cancel</button></div>
             </div>`
                    $('.rightpanel').append(pay);
                }
            }
        }
    }
})

// i want to read book of search
$('body').on('click', (e) => {
    if (e.target.classList.contains('serread')) {
        var bookId = e.target.getAttribute('id');
         let thivar=e.target;
        // sersavbok(bookId, e);
        if (Rarel[0].books[bookId].status == "free") {
            removeExcess();
            let readpdf = `<div class="openpd"><iframe src=${Rarel[0].books[bookId].book} frameborder="0" class="iread" height="669px"></iframe></div>`
            $('.rightpanel').append(readpdf);
        }
        else if (Rarel[0].books[bookId].status != "free") {
            console.log("not free");
            for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                if (Rarel[0].books[bookId].cover == Rarel[0].userD[userindex].books[i].cover) {
                    console.log("the same");
                    removeExcess();
                    let readpdf = `<div class="openpd"><iframe src=${Rarel[0].books[bookId].book} frameborder="0" class="iread" height="669px"></iframe></div>`
                    $('.rightpanel').append(readpdf);
                    return;
                }
                else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[bookId].cover != Rarel[0].userD[userindex].books[i].cover) {
                    console.log("not same");
                    removeExcess();
                    let pay = `<div class="payment">
                    <div><p>Make Payment</p></div>
                    <div><span>SELECT ANY PAYMENT TYPE</span></div>
               <div><input type="text" value="${Rarel[0].books[bookId].status}" class="price"></div>
               <div class="flex paygate">
               <a href="http://www.paypal.com"><img src="paypal.png" alt="" class="paypal"></a> 
                <a href="http://www.flutterwave.com"><img src="flutter.png" alt="" class="flutter"></a>
                <a href="http://www.remita.com"><img src="remita.png" alt="" class="remita"></a>
             </div> 
               <div class="buts"><button class="btn btn-danger ml-5 cancel">Cancel</button></div>
                </div>`
                    $('.rightpanel').append(pay);
                }
            }
        }
    }
})

$('body').on('click', (e) => {
    if (e.target.classList.contains('serdownload')) {
        var bookId = e.target.getAttribute('id');
        if (Rarel[0].books[bookId].status == "free") {
            for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                if (Rarel[0].books[bookId].cover == Rarel[0].userD[userindex].books[i].cover) {
                    console.log("the same");
                    $(e.target).html(`<a href="${Rarel[0].books[bookId].book}" class="text-white" target="_blank">Download</a>`);
                    return;
                }
                else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[bookId].cover != Rarel[0].userD[userindex].books[i].cover) {
                    console.log("not same");
                    $(e.target).html(`<a href="${Rarel[0].books[bookId].book}" class="text-white" target="_blank">Download</a>`);
                }
            }
        }
        else if (Rarel[0].books[bookId].status != "free") {
            console.log("not free");
            for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                if (Rarel[0].books[bookId].cover == Rarel[0].userD[userindex].books[i].cover) {
                    console.log("the same");
                    $(e.target).html(`<a href="${Rarel[0].books[bookId].book}" class="text-white" target="_blank">Download</a>`);
                    return;
                }
                else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[bookId].cover != Rarel[0].userD[userindex].books[i].cover) {
                    console.log("not same");
                    removeExcess();
                    let pay = `<div class="payment">
                    <div><p>Make Payment</p></div>
                    <div><span>SELECT ANY PAYMENT TYPE</span></div>
               <div><input type="text" value="${Rarel[0].books[bookId].status}" class="price"></div>
               <div class="flex paygate">
               <a href="http://www.paypal.com"><img src="paypal.png" alt="" class="paypal"></a> 
                <a href="http://www.flutterwave.com"><img src="flutter.png" alt="" class="flutter"></a>
                <a href="http://www.remita.com"><img src="remita.png" alt="" class="remita"></a>
            </div> 
               <div class="buts"><button class="btn btn-danger ml-5 cancel">Cancel</button></div>
                </div>`
                    $('.rightpanel').append(pay);
                }
            }
        }
    }
})


$('#dashboard').on('change', '#sort', function (params) {
    removeExcess();
    $('#allbooks').remove();
    console.log(params.target.value);
    let allbkshead = `<div id="allbooks">
    <div class="searchhold"><input type="text" placeholder="Search by Book Author" class="form-group form-control-lg bookser"><i class="fa fa-search searchit"></i>
   <select id="sort" class="form-group form-control-lg">
   <option value="SELECT GENRE">SELECT GENRE</option>
   <option value="BUSINESS">BUSINESS</option>
   <option value="MARITAL">MARITAL</option>
   <option value="SEX LIFE">SEXUAL LIFE</option>
   <option value="NOVEL">NOVEL</option>
   <option value="LIFE">LIFE</option>
   </select>
   </div>`
    $('.rightpanel').append(allbkshead);
    for (i = 0; i < Rarel[0].books.length; i++) {
        let reg = new RegExp(params.target.value, 'gi');
        let conreg = Rarel[0].books[i].genre.match(reg);
        console.log(conreg, Rarel[0].books[i].genre);
        if (conreg) {
            $('.bookser').val("");
            $('.bookser').val("RESULT FOUND");
            authorindex = i;
            seen=true;
            console.log(3 * authorindex);
            let allbks = `<div id="book" style="margin-top:"300px""><div class="hold"><img src="${Rarel[0].books[authorindex].cover}" class="bookcov" id="bookcov"><div class="d-block bookde"><div>Author:- ${Rarel[0].books[authorindex].author}</div><div>Pages:- ${Rarel[0].books[authorindex].pages}</div><div>Genre: ${Rarel[0].books[authorindex].genre}</div><div>ISBN: ${Rarel[0].books[authorindex].isbn}</div><div>${Rarel[0].books[authorindex].status}</div></div></div><div><button class="btn btn-danger sortsave" id="${i}">Save</button><button class="btn btn-primary ml-4 sortread" id="${i}">Read</button><button class="btn btn-success ml-4 sortdownload" id="${i}">Download</button></div></div>
              </div>`
            $('.rightpanel').append(allbks);
            setTimeout(() => {
                seen=false;
            }, 100);
        }

        else if (i == Rarel[0].books.length - 1 && seen==false) {
            $('.bookser').val("NO RESULT FOUND");
            $('#dashboard').on('click', '.bookser', function (params) {
            })
        }
    }
})


   // i want to save book of search
   $('body').on('click', (e) => {
    if (e.target.classList.contains('sortsave')) {
        console.log(e);
        var bookId = e.target.getAttribute('id');
         let thivar=e.target;
        // sersavbok(bookId, e);
        if (Rarel[0].books[bookId].status == "free") {
            for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                if (Rarel[0].books[bookId].cover == Rarel[0].userD[userindex].books[i].cover) {
                    console.log("the same");
                    console.log($(e.target).html());
                    $(e.target).attr('disabled', 'true');
                    // $(this).next().next().attr('disabled', 'true');
                    return;
                }
                else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[bookId].cover != Rarel[0].userD[userindex].books[i].cover) {
                    console.log("not same");
                    Rarel[0].userD[userindex].books.push({ cover: Rarel[0].books[bookId].cover, book: Rarel[0].books[bookId].book, author: Rarel[0].books[bookId].author, pages: Rarel[0].books[bookId].pages, genre: Rarel[0].books[bookId].genre, isbn: Rarel[0].books[bookId].isbn });
                    localStorage.setItem('Rarel', JSON.stringify(Rarel));
                }
            }
        }
        else if (Rarel[0].books[bookId].status != "free") {
            console.log("not free");
            for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                if (Rarel[0].books[bookId].cover == Rarel[0].userD[userindex].books[i].cover) {
                    console.log("the same");
                    $(e.target).attr('disabled', 'true');
                    // $(this).next().next().attr('disabled', 'true');
                    return;
                }
                else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[bookId].cover != Rarel[0].userD[userindex].books[i].cover) {
                    console.log("not same");
                    removeExcess();
                    let pay = `<div class="payment">
                 <div><p>Make Payment</p></div>
                 <div><span>SELECT ANY PAYMENT TYPE</span></div>
            <div><input type="text" value="${Rarel[0].books[bookId].status}" class="price"></div>
            <div class="flex paygate">
            <a href="http://www.paypal.com"><img src="paypal.png" alt="" class="paypal"></a> 
             <a href="http://www.flutterwave.com"><img src="flutter.png" alt="" class="flutter"></a>
             <a href="http://www.remita.com"><img src="remita.png" alt="" class="remita"></a>
         </div> 
            <div class="buts"><button class="btn btn-danger ml-5 cancel">Cancel</button></div>
             </div>`
                    $('.rightpanel').append(pay);
                }
            }
        }
    }
})

// i want to read book of search
$('body').on('click', (e) => {
    if (e.target.classList.contains('sortread')) {
        var bookId = e.target.getAttribute('id');
         let thivar=e.target;
        // sersavbok(bookId, e);
        if (Rarel[0].books[bookId].status == "free") {
            removeExcess();
            let readpdf = `<div class="openpd"><iframe src=${Rarel[0].books[bookId].book} frameborder="0" class="iread" height="669px"></iframe></div>`
            $('.rightpanel').append(readpdf);
        }
        else if (Rarel[0].books[bookId].status != "free") {
            console.log("not free");
            for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                if (Rarel[0].books[bookId].cover == Rarel[0].userD[userindex].books[i].cover) {
                    console.log("the same");
                    removeExcess();
                    let readpdf = `<div class="openpd"><iframe src=${Rarel[0].books[bookId].book} frameborder="0" class="iread" height="669px"></iframe></div>`
                    $('.rightpanel').append(readpdf);
                    return;
                }
                else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[bookId].cover != Rarel[0].userD[userindex].books[i].cover) {
                    console.log("not same");
                    removeExcess();
                    let pay = `<div class="payment">
                    <div><p>Make Payment</p></div>
                    <div><span>SELECT ANY PAYMENT TYPE</span></div>
               <div><input type="text" value="${Rarel[0].books[bookId].status}" class="price"></div>
               <div class="flex paygate">
               <a href="http://www.paypal.com"><img src="paypal.png" alt="" class="paypal"></a> 
                <a href="http://www.flutterwave.com"><img src="flutter.png" alt="" class="flutter"></a>
                <a href="http://www.remita.com"><img src="remita.png" alt="" class="remita"></a>
             </div> 
               <div class="buts"><button class="btn btn-danger ml-5 cancel">Cancel</button></div>
                </div>`
                    $('.rightpanel').append(pay);
                }
            }
        }
    }
})

$('body').on('click', (e) => {
    if (e.target.classList.contains('sortdownload')) {
        var bookId = e.target.getAttribute('id');
        if (Rarel[0].books[bookId].status == "free") {
            for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                if (Rarel[0].books[bookId].cover == Rarel[0].userD[userindex].books[i].cover) {
                    console.log("the same");
                    $(e.target).html(`<a href="${Rarel[0].books[bookId].book}" class="text-white" target="_blank">Download</a>`);
                    return;
                }
                else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[bookId].cover != Rarel[0].userD[userindex].books[i].cover) {
                    console.log("not same");
                    $(e.target).html(`<a href="${Rarel[0].books[bookId].book}" class="text-white" target="_blank">Download</a>`);
                }
            }
        }
        else if (Rarel[0].books[bookId].status != "free") {
            console.log("not free");
            for (i = 0; i < Rarel[0].userD[userindex].books.length; i++) {
                if (Rarel[0].books[bookId].cover == Rarel[0].userD[userindex].books[i].cover) {
                    console.log("the same");
                    $(e.target).html(`<a href="${Rarel[0].books[bookId].book}" class="text-white" target="_blank">Download</a>`);
                    return;
                }
                else if (i == Rarel[0].userD[userindex].books.length - 1 && Rarel[0].books[bookId].cover != Rarel[0].userD[userindex].books[i].cover) {
                    console.log("not same");
                    removeExcess();
                    let pay = `<div class="payment">
                    <div><p>Make Payment</p></div>
                    <div><span>SELECT ANY PAYMENT TYPE</span></div>
               <div><input type="text" value="${Rarel[0].books[bookId].status}" class="price"></div>
               <div class="flex paygate">
               <a href="http://www.paypal.com"><img src="paypal.png" alt="" class="paypal"></a> 
                <a href="http://www.flutterwave.com"><img src="flutter.png" alt="" class="flutter"></a>
                <a href="http://www.remita.com"><img src="remita.png" alt="" class="remita"></a>
            </div> 
               <div class="buts"><button class="btn btn-danger ml-5 cancel">Cancel</button></div>
                </div>`
                    $('.rightpanel').append(pay);
                }
            }
        }
    }
})



//contact
let requestbook, bookdesc,feedcount=0, chatcont;
$('.msg').hide();
$('.reqBooks').on('click',mybook) 
function mybook(){
  removeExcess();
  pressn = 0;
  let reqbok=`<div class="request">
  <div class="form-group"><input type="text" name="" id="" placeholder="ENTER BOOK AUTHOR OR NAME" class="form-control-lg reqbook"></div>
  <div class="description ">
      <p>Write a little description of the book</p>
      <textarea name="" id="" cols="30" rows="10" maxlength="500" class="desc"></textarea>
  </div>
  <div><button class="btn btn-primary sendreq">SEND REQUEST</button></div>
</div>`
$('.rightpanel').append(reqbok);
let feed=`<div class="feed"><i class="fa fa-comment"></i><span>+</span></div>`
$('.rightpanel').append(feed);
} 

$('#dashboard').on('input', '.reqbook', function(params){
requestbook=params.target.value;
console.log(requestbook);
})
$('#dashboard').on('input', '.desc', function(params){
bookdesc=params.target.value;
console.log(bookdesc);
})
$('#dashboard').on('click', '.sendreq', function(){
  $('.reqbook').val("")
  $('.desc').val("")
  if (Rarel[0].userD[userindex].request=="") {
    Rarel[0].userD[userindex].request.push({id:user,bookname:requestbook, time:newtime, date:fulldate, message:bookdesc});
    localStorage.setItem('Rarel', JSON.stringify(Rarel)); 
  }
  else if (Rarel[0].userD[userindex].request[0]!="") {
    Rarel[0].userD[userindex].request[0].id=user;
    Rarel[0].userD[userindex].request[0].bookname=requestbook;
    Rarel[0].userD[userindex].request[0].time=newtime;
    Rarel[0].userD[userindex].request[0].date=fulldate;
    Rarel[0].userD[userindex].request[0].message=bookdesc;
    localStorage.setItem('Rarel', JSON.stringify(Rarel)); 
  }
  
  removeExcess();
  mybook();
  fed();
  
  
})

$('#dashboard').on('click', '.feed', fed)
function fed(){
  removeExcess();
  mybook();
pressn = 0;
  let fedmsg=`<div class="msg">
  <p>DEAR ${user}, your request is being processed, kindly exercise patient while we get your request for you. to know that we have received your request, below are the details of the book you requested for... We would get back to you shortly.</p>
  <p>BOOK NAME:${Rarel[0].userD[userindex].request[0].bookname}</p>
  <p>TIME :${Rarel[0].userD[userindex].request[0].time}</p>
  <p>DATE:${Rarel[0].userD[userindex].request[0].date}</p>
  <p>Thanks for being part of RAREL, the unique Library</p>
</div>`
$('.rightpanel').append(fedmsg);
feedcount++;
  console.log(feedcount);
  if (feedcount==1 && Rarel[0].userD[userindex].request[0].bookname!="") {
     removeExcess();
     pressn=0;
     mybook();
     let fedmsg=`<div class="msg">
     <p>DEAR ${user}, your request is being processed, kindly exercise patient while we get your request for you. to know that we have received your request, below are the details of the book you requested for... We would get back to you shortly.</p>
     <p>BOOK NAME:${Rarel[0].userD[userindex].request[0].bookname}</p>
     <p>TIME :${Rarel[0].userD[userindex].request[0].time}</p>
     <p>DATE:${Rarel[0].userD[userindex].request[0].date}</p>
     <p>Thanks for being part of RAREL, the unique Library</p>
 </div>`
 $('.rightpanel').append(fedmsg);
  }
  else if(feedcount==2 && Rarel[0].userD[userindex].request[0].bookname!=""){
    $('.msg').hide();
    feedcount=0;
  }
}

$('.contadm').on('click', adminchat)
function adminchat(){
pressn = 0;
feedcount=0;
 removeExcess();
 for(i=0;i<Rarel[0].userD[userindex].chat.length;i++){
    let mymess=`<div class="thechat"><div class="me"><p class="mere">ME:</p>
    <p>${Rarel[0].userD[userindex].chat[i].message}</p>
    <span>${Rarel[0].userD[userindex].chat[i].time}</span>
    <span>${Rarel[0].userD[userindex].chat[i].date}</span>
    <span>${Rarel[0].userD[userindex].chat[i].day}</span>
    </div>
    <div class="admin"><p class="adminre">ADMIN:</p>
    <p>${Rarel[0].userD[userindex].chat[i].response[0].message}</p>
    <span>${Rarel[0].userD[userindex].chat[i].response[0].time}</span>
    <span>${Rarel[0].userD[userindex].chat[i].response[0].date}</span>
    <span>${Rarel[0].userD[userindex].chat[i].response[0].day}</span>
    </div>
    </div>`
    $('.rightpanel').append(mymess);
 }
 let adminC=` <div class="chat">
 <div class="chatadm">
     <p>What is on your mind?</p>
     <textarea name="" id="" cols="30" rows="10" maxlength="1000" class="chata"></textarea>
 </div>
 <div><button class="btn btn-primary sendmess">SEND MESSAGE</button></div>
</div>`
$('.rightpanel').append(adminC);
}

$('#dashboard').on('input', '.chata', function(params){
  chatcont=params.target.value;
  console.log(chatcont);
})
$('#dashboard').on('click', '.sendmess', function(){
Rarel[0].userD[userindex].chat.push({id:user,message:chatcont, time:newtime, date:fulldate, day:newday, response:[{message:"", time:"", date:"", day:""}]});
localStorage.setItem('Rarel', JSON.stringify(Rarel));
removeExcess();
adminchat();
})
})
