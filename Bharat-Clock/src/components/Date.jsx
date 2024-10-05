 function DateToday()
{
    let time=new Date();
    return <div class="row2" >
this is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
</div>
}
export default DateToday;