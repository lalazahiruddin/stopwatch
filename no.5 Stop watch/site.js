var LapNo = 1;
var count=0;
var hr=0;
var min=0;
var sec=0;

var Timer=false;

function Startbutton()
{
    Timer=true;
    StopWatch()
}

function Stopbutton()
{
    Timer=false;
}

function Restartbutton()
{
    Timer=false;

    hr=0;
    min=0;
    sec=0;
    count=0;

    Hour.innerHTML="00";
    minit.innerHTML=":00";
    second.innerHTML=":00";
    Millisecond.innerHTML=":00";
}


function StopWatch()
{
    if (Timer==true) {
        count=count+1;
        Millisecond.innerHTML=count;

        if (count==100) {
            sec=sec+1;
            count=0;
            second.innerHTML=sec;
        }
        if (sec==60) {
            min=min+1;
            sec=0;
            count=0;
            minit.innerHTML=min;
        }
        if (min==60) {
            hr=hr+1;
            sec=0
            min=0;
            Hour.innerHTML=hr;
        }
      
        setTimeout("StopWatch()",10);
    }
}

function Lapbutton()
{
    lbl1lap.innerHTML = "<br>"+(LapNo++)+"). "+Hour.innerHTML +":"+ minit.innerHTML +":"+ second.innerHTML +":  "+ Millisecond.innerHTML + lbl1lap.innerHTML;
}