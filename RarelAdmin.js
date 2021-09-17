
$(function(){
    let k;
    if (localStorage.getItem("Rarel")) {
        k = localStorage.getItem('Rarel');
        Rarel = JSON.parse(k);
    }
    
    setInterval(ref,1000);
       function ref(){
        if (localStorage.getItem("Rarel")) {
            k = localStorage.getItem('Rarel');
            Rarel = JSON.parse(k);
            console.log('Hello');
        }
       }
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
    let pressn = 0, user, i, j, filename, index, getbook, coming, newevent, authorindex;
    let id, fulname, password, country, cover, eventsch, chatcont,usermesdex,userind;
    $('.hidemenu').hide();

dashhome();
   function dashhome(){
       removeExcess();
    let tit=`<p class="title text-danger">NEXT WEEK SAGA</p>`
    $('.rightpanel').append(tit);
    for (i = 0; i < Rarel[0].cosoon.length; i++) {
        coming = `<div id="comingbook"><div class="comingbookhold"><p hidden>${i}</p><img src="${Rarel[0].cosoon[i].cover}" class="comingbookc" id="bookc"><div class="d-block comingbookdetail"><div>Author:- ${Rarel[0].cosoon[i].author}</div><div>Genre: ${Rarel[0].cosoon[i].genre}</div></div><div></div>`;
        $('.rightpanel').append(coming);
    }
    newevent=`<div class="addevent form-group">
        <div>
        <input type="file" name="event" id="event" class="mb-2">
        <input type="text" class="form-control-lg mb-2 bookauth" placeholder="BOOK AUTHOR">
        <input type="text" class="form-control-lg mb-2 bookgen" placeholder="BOOK GENRE">
        </div>
        <div>
            <button class="btn btn-primary schedule">SCHEDULE</button>
        </div>
      </div>`
      $('.rightpanel').append(newevent);
   }
    
    $('#dashboard').on('change', '#event', function (e) {
        eventsch= $('#event').val();
        console.log(eventsch);
        if (eventsch.substring(3, 11) == 'fakepath') {
            eventsch = eventsch.substring(12);
            console.log(eventsch);
        }
    })

    $('#dashboard').on('click', '.schedule', function (e) {
        Rarel[0].cosoon.push({ cover: eventsch, author: $('.bookauth').val(), genre: $('.bookgen').val()})
        localStorage.setItem('Rarel', JSON.stringify(Rarel));
        removeExcess();
        dashhome();
    })
    
    
    
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
        user = Rarel[0].admin[0].id;
        $('.usern').html("");
        $('.usern').append(user);
    }
    //    console.log( filename = Rarel[0].userD[1].filename);
    function removeExcess() {
        for (i = 0; i < Rarel[0].cosoon.length; i++) {
            $('#comingbook').remove();
        }
        for (i = 0; i < Rarel[0].books.length; i++) {
            $('#book').remove();
        }
        for (i = 0; i < Rarel[0].userD.length; i++) {
            $('.table').remove();
        }
        for(i=0;i<Rarel[0].userD.length;i++){
            $('.thechat').remove();
            
        }
        for(i=0;i<Rarel[0].admin[0].userrequest.length;i++) {
            $('.adhere').remove();
        }
        // for (i = 0; i < Rarel[0].userD[userindex].chat.length; i++) {
        //     $('.thechat').remove();
        // }
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
        $('.uploadBook').remove();
        $('.addevent').remove();
        $('.title').remove();
        $('.adhere').remove();
    }
    




    let idinp, press = 0, fulNam, nation, email, phoneno, pass, cpass, eyeclick = 0, eyeclick2 = 0, faeye = 0, recpass, newid, userindex, comparebook;
    usno = Rarel[0].usno;
    $('#dashboard').hide();
    let passinp;
    let header = `<div id="header" class="pt-4"><div class="logo"><div class="label">RAREL</div><div class="caption text-danger">(Readers are Learners)</div></div><button class="btn btn-danger head" id="login">LOGIN</button></div>`;
    let form = `<div class="form-group card-body" id="form">
    <div class="text-center"><label class="text-center radmin">RAREL ADMINISTRATOR</label><br>
    </div><label>ID:</label><div><input type="text" class="form-group form-control-lg w-100 inp1"></div>
    <label>PASSWORD:</label>
    <div><input type="password" class="form-group form-control-lg w-100 inp2">
    <i class="fa fa-eye-slash reveal" id="revpass2"></i><i class="fa fa-eye reveal revpass"></i>
    </div>
    <div class="text-center">
     <button class="btn btn-success login access">LOGIN</button><br>
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
        for (i = 0; i < Rarel[0].admin.length; i++) {
            console.log($('.inp1').val(), Rarel[0].admin[0].id);
            console.log($('.inp2').val(), Rarel[0].admin[0].password);
            if (($('.inp1').val() == Rarel[0].admin[0].id) && ($('.inp2').val() == Rarel[0].admin[0].password) && newreg != false) {
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
            else if (($('.inp1').val() != Rarel[0].admin[0].id) && ($('.inp2').val() == Rarel[0].admin[0].password) && (newreg != false || newreg==false)) {
                $('.inp1').val('WRONG ID')
            }
            else if (($('.inp1').val() == Rarel[0].admin[0].id) && ($('.inp2').val() != Rarel[0].admin[0].password)) {
                $('.inp2').attr('type', 'text');
                $('.inp2').val('WRONG PASSWORD')
            }
            else if (!newreg) {
                $('.inp2').attr('type', 'text');
                $('.inp2').val('CHECK YOUR PASSWORD')
            }
            else if (i == Rarel[0].admin.length - 1 && ($('.inp1').val() != Rarel[0].admin[0].id) && ($('.inp2').val() != Rarel[0].admin[0].password) && (newreg == false || newreg!=false)) {
                console.log("hrmmm");
                $('.inp1').val('WRONG ID')
                $('.inp2').attr('type', 'text');
                $('.inp2').val('WRONG PASSWORD')
            }

        }
    })

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
    }

    let seen=false;

$('#dashboard').on('input', '.bookser', function (params) {
    comparebook = params.target.value;
    console.log(comparebook);
})

$('#dashboard').on('click', '.searchit', function () {
    removeExcess();
    pressn = 0;
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

$('#dashboard').on('change', '#sort', function (params) {
    removeExcess();
    pressn = 0;
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
        }

        else if (i == Rarel[0].books.length - 1 && seen==false) {
            $('.bookser').val("NO RESULT FOUND");
            $('#dashboard').on('click', '.bookser', function (params) {
            })
        }
    }
})





$('.uploab').on('click', function(){
    removeExcess();
    pressn = 0;
    let uploa=` <div class="uploadBook">
    <div class="ubookcov">
    <img src="" alt="" class="propic">
   <div class="oyo">
   <label>SELECT BOOK COVER</label>
   <input type="file" name="bookcover" id="bookcover">
   </div>
   <div class="oyotwo">
    <label>SELECT BOOK</label>
    <input type="file" name="book" id="bookfile">
    </div>
    </div>
    <div class="otherdetails form-group d-flex">
        <input type="text" placeholder="BOOK AUTHOR" class="uploadauthor form-control-lg">
        <input type="text" placeholder="BOOK PAGES" class="uploadpages form-control-lg">
        <input type="text" placeholder="BOOK GENRE" class="uploadgenre form-control-lg">
        <input type="text" placeholder="BOOK ISBN" class="uploadisbn form-control-lg">
        <input type="text" placeholder="BOOK STATUS" class="uploadstatus form-control-lg">
    </div>
    <button class="btn btn-primary uploadbook">UPLOAD</button>
</div>`
$('.rightpanel').append(uploa)
})

$('#dashboard').on('change', '#bookcover', function (e) {
    cover= $('#bookcover').val();
    console.log(cover);
    if (cover.substring(3, 11) == 'fakepath') {
        cover = cover.substring(12);
        console.log(cover);
    $('.propic').attr('src', cover);
    }
})
$('#dashboard').on('change', '#bookfile', function (e) {
    filename = $('#bookfile').val();
    console.log(filename);
    if (filename.substring(3, 11) == 'fakepath') {
        filename = filename.substring(12);
        console.log(filename);
    }
})

$('#dashboard').on('click', '.uploadbook', ()=>{
   Rarel[0].books.push({cover:cover, book: filename, author: $('.uploadauthor').val(), pages: $('.uploadpages').val(), genre: $('.uploadgenre').val(), isbn: $('.uploadisbn').val(), status:$('.uploadstatus').val()})
   localStorage.setItem('Rarel', JSON.stringify(Rarel));
   removeExcess();
   allbkos();

})

$('.users').on('click', function(){
   removeExcess();
   pressn = 0;
   let tab=`<table class="table">
   <th>S/N</th>
   <th>ID</th>
   <th>NAME</th>
   <th>EMAIL</th>
   <th>PHONE NO</th>
  </table>`
  $('.rightpanel').append(tab)
  for(i=0;i<Rarel[0].userD.length;i++){
      let row=`  <tr>
      <td>${i+1}</td>
      <td>${Rarel[0].userD[i].id}</td>
      <td>${Rarel[0].userD[i].fulname}</td>
      <td>${Rarel[0].userD[i].email}</td>
      <td>${Rarel[0].userD[i].phoneno}</td>
  </tr>`
$('.table').append(row);
  }

})
  $('.reqBooks').on('click', mean)
 function mean (){
      removeExcess();
      pressn = 0;
  for(let i=0;i<Rarel[0].userD.length;i++) {
      console.log(Rarel[0].userD[i].request[0]);
        let adhere=`<div class="adhere">
  <p>${Rarel[0].userD[i].request[0].id}</p>
  <p>${Rarel[0].userD[i].request[0].bookname}</p>
  <p>${Rarel[0].userD[i].request[0].date}</p>
  <button class="btn btn-primary accept" id="${i}">Accept</button>
  <button class="btn btn-primary decline" id="${i}">Decline</button>
  </div>`
  $('.rightpanel').append(adhere);
  }  
  }


  $('body').on('click', (e)=>{
    if (e.target.classList.contains('accept')) {
        console.log(e.target.getAttribute('id'));
        let num=e.target.getAttribute('id')
        console.log(num);
        $(e.target).html("APPROVED")
        Rarel[0].userD[num].request[0].date="GRANTED";
        localStorage.setItem('Rarel', JSON.stringify(Rarel));
        console.log(Rarel);
        removeExcess();
        mean();
    }
  })
  $('body').on('click', (e)=>{
    if (e.target.classList.contains('decline')) {
        console.log("hello");
        console.log(e.target.getAttribute('id'));
        let num=e.target.getAttribute('id')
        console.log(num);
        if (Rarel[0].userD[num].request[0].date!="GRANTED") {
        $(e.target).html("DECLINED")
        Rarel[0].userD[num].request[0].date="DECLINED";
        localStorage.setItem('Rarel', JSON.stringify(Rarel));
        console.log(Rarel);
        removeExcess();
        mean();
        }
    }
  })

  $('.contadm').on('click', adminchat)
  function adminchat(){
       pressn = 0;
      feedcount=0;
     removeExcess();
     for(i=0;i<Rarel[0].userD.length;i++){
      for(let j=0;j<Rarel[0].userD[i].chat.length;j++){
        let mymess=`<div class="thechat"><div class="me"><p class="mere">${Rarel[0].userD[i].id}:</p>
        <p>${Rarel[0].userD[i].chat[j].message}</p>
        <span>${Rarel[0].userD[i].chat[j].time}</span>
        <span>${Rarel[0].userD[i].chat[j].date}</span>
        <span>${Rarel[0].userD[i].chat[j].day}</span>
        </div>
        <div class="admin"><p class="adminre">ADMIN:</p>
        <p>${Rarel[0].userD[i].chat[j].response[0].message}</p>
        <span>${Rarel[0].userD[i].chat[j].response[0].time}</span>
        <span>${Rarel[0].userD[i].chat[j].response[0].date}</span>
        <span>${Rarel[0].userD[i].chat[j].response[0].day}</span>
        </div>
        <textarea maxlength="500" class="admresp" id="${i}"></textarea>
        <button class="btn btn-primary w-20 rep" id="${j}">Reply</button>
        </div>`
        $('.rightpanel').append(mymess);
      }
     }
      }

  $('#dashboard').on('input', '.admresp', function(params){
      chatcont=params.target.value;
      console.log(chatcont);
      userind=params.target.id;
      
  })
  $('#dashboard').on('click', '.rep', function(params){
     usermesdex=params.target.id;
    Rarel[0].userD[userind].chat[usermesdex].response[0].message=chatcont;
    Rarel[0].userD[userind].chat[usermesdex].response[0].time=newtime;
    Rarel[0].userD[userind].chat[usermesdex].response[0].date=fulldate;
    Rarel[0].userD[userind].chat[usermesdex].response[0].day=newday;
    localStorage.setItem('Rarel', JSON.stringify(Rarel));
    removeExcess();
    adminchat();
  })
  
})

