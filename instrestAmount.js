document.getElementById("calculateBtn").addEventListener("click", function() {
    var principalStr = document.getElementById("principal").value;
    var rateStr = document.getElementById("rate").value;
    var timeStr = document.getElementById("time").value;

    var principal = parseFloat(principalStr.replace(/[^0-9.]/g, ''));
    var rate = parseFloat(rateStr.replace(/[^0-9.]/g, ''));
    var time = parseFloat(timeStr.replace(/[^0-9.]/g, ''));

    if (!isNaN(principal) && !isNaN(rate) && !isNaN(time)) {
        var interestAmount = (principal * rate * time) / 100;
        var totalAmount = principal + interestAmount;
        document.getElementById("result").innerHTML = "Interest amount: R" + interestAmount.toFixed(2) + "<br>Total amount:R" + totalAmount.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Please enter valid numbers for principal, rate, and time.";
    }
});