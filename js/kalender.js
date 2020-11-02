browserName=navigator.appName;
browserVer=parseInt(navigator.appVersion);

if ((browserName=="Netscape" && browserVer>=4) || (browserName=="Microsoft Internet Explorer" && browserVer>=4))
version="n3";
else
version="n2";


var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();

mydate = new Date();
myday = mydate.getDay();
mymonth = mydate.getMonth();
myweekday= mydate.getDate();
weekday= myweekday;
myyear= mydate.getYear();
year = myyear

if (version=="n3") {

   if(myday == 0) day = "Minggu, "
   else if(myday == 1) day = "Senin, "
   else if(myday == 2) day = "Selasa, "
   else if(myday == 3) day = "Rabu, "
   else if(myday == 4) day = "Kamis, "
   else if(myday == 5) day = "Jum'at, "
   else if(myday == 6) day = "Sabtu, "

   if(mymonth == 0) month = "/01/"
   else if(mymonth ==1) month = "/02/"
   else if(mymonth ==2) month = "/03/"
   else if(mymonth ==3) month = "/04/"
   else if(mymonth ==4) month = "/05/"
   else if(mymonth ==5) month = "/06/"
   else if(mymonth ==6) month = "/07/"
   else if(mymonth ==7) month = "/08/"
   else if(mymonth ==8) month = "/09/"
   else if(mymonth ==9) month = "/10/"
   else if(mymonth ==10) month = "/11/"
   else if(mymonth ==11) month = "/12/"

if ((navigator.appName == "Microsoft Internet Explorer") && (year < 2000))		
year="19" + year;
if (navigator.appName == "Netscape")
year=1900 + year;

   document.write(day + myweekday);
   document.write(month+ ""+ year );
}
