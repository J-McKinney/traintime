$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyAaoKp0Xod_gObg2BIlujtAC5yg4kuMFUQ",
        authDomain: "traintime-ba953.firebaseapp.com",
        databaseURL: "https://traintime-ba953.firebaseio.com",
        projectId: "traintime-ba953",
        storageBucket: "traintime-ba953.appspot.com",
        messagingSenderId: "117555075753"
    };
    ////////////////////////////////////////////////////////////////
    // var firebaseConfig = {                                     //
    //     apiKey: "AIzaSyAaoKp0Xod_gObg2BIlujtAC5yg4kuMFUQ",     //
    //     authDomain: "traintime-ba953.firebaseapp.com",         //
    //     databaseURL: "https://traintime-ba953.firebaseio.com", //
    //     projectId: "traintime-ba953",                          //
    //     storageBucket: "traintime-ba953.appspot.com",          //
    //     messagingSenderId: "117555075753",                     //
    //     appId: "1:117555075753:web:cee20a606b84d593"           //
    //   };                                                       //
    ////////////////////////////////////////////////////////////////
    firebase.initializeApp(config);
    var database = firebase.database();

    var currentTime = moment();
    $("#currentTime").text(currentTime);

    var trainName = "";
    var destination = "";
    var trainTime = "";
    var frequency = "";

    $("#submit").on("click", function (event) {
        event.preventDefault();

        trainName = $("#inputTrainName").val().trim();
        destination = $("#inputDestination").val().trim();
        trainTime = $("#inputTrainTime").val().trim();
        frequency = $("#inputFrequency").val().trim();

        // console.log(trainName)
        // console.log(destination)
        // console.log(trainTime)
        // console.log(frequency)

        database.ref().push({
            trainName: trainName,
            destination: destination,
            trainTime: trainTime,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

        $("#inputTrainName").val("");
        $("#inputDestination").val("");
        $("#inputTrainTime").val("");
        $("#inputFrequency").val("");
    });

    database.ref().on("child_added", function (childSnapshot) {
        // console.log(childSnapshot.val());

        var trainsName = childSnapshot.val().trainName;
        var dest = childSnapshot.val().destination;
        var tFrequency = childSnapshot.val().frequency;
        var firstTime = childSnapshot.val().trainTime;

        console.log(trainsName);
        console.log(dest);
        console.log(firstTime);
        console.log(tFrequency);

        // var trainName = childSnapshot.val().trainName;
        // var destination = childSnapshot.val().destination;
        // var tFrequency = childSnapshot.val().frequency;
        // var firstTime = childSnapshot.val().trainTime;

        // var firstTimeConverted = moment(firstTime, 'hh:mm').subtract(1, 'years');
        // console.log(firstTimeConverted);

        // var currentTime = moment();
        // console.log("CURRENT TIME: " + moment(currentTime).format('hh:mm'));

        // var diffTime = moment().diff(moment(firstTimeConverted), 'minutes');
        // console.log("DIFFERENCE IN TIME: " + diffTime);

        // var tRemainder = diffTime % tFrequency;
        // console.log(tRemainder);

        // var tMinutesTillTrain = tFrequency - tRemainder;
        // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

        // var nextTrain = moment().add(tMinutesTillTrain, 'minutes');
        // console.log("ARRIVAL TIME: " + moment(nextTrain).format('hh:mm'));
        /////////////////////////////////////////////// above teachers

        // var frequency = parseInt(frequency);
        // var currentTime = moment();
        // console.log("Current Time: " + moment().format("hh:mm"));
        // console.log(frequency);
        // console.log(currentTime);

        // var dateConvert = moment(childSnapshot.val().trainTime, "hh:mm").subtract(1, "years");
        // console.log("Date converted: " + dateConvert);

        // var trainTime = moment(dateConvert).format("hh:mm");
        // console.log("Train Time : " + trainTime);

        // var timeConvert = moment(trainTime, "hh:mm").subtract(1, "years");
        // var timeDiff = moment().diff(moment(timeConvert), "minutes");
        // console.log("Difference in Times: " + timeDiff);
        // console.log(timeConvert);

        // var timeRemain = timeDiff % frequency;
        // console.log(timeRemain);

        // var minutesAway = frequency - timeRemain;
        // console.log("Minutes until next Train: " + minutesAway);

        // var trainTime = moment().add(minutesAway, "minutes");
        // console.log(trainTime);

        // $("#currentTime").text(currentTime);

        // $("#train-Table").append(
        //     "<tr><td>" + childSnapshot.val().train +
        //     "</td><td>" + childSnapshot.val().destination +
        //     "</td><td>" + childSnapshot.val().frequency +
        //     "</td><td>" + moment(trainTime).format("hh:mm") +
        //     "</td><td>" + minutesAway + "</td></tr>");
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
        // $("#nameOfTrain").append(childSnapshot.val().trainName);
        // $("#yourDestination").append(childSnapshot.val().destination);
        // $("#trainsFrequency").append(childSnapshot.val().frequency);
        // $("#trainsArrival").append(childSnapshot.val().trainTime);
        // $("#minutesAway").append(childSnapshot.val().minutesAway);


        /////////////////////////////////////////////////////////

        // var firstTimeConverted = moment(nextArrivalTable, "hh:mm").subtract(1, "years");

        // var currentTime = moment();

        //     var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

        //     var tRemainder = diffTime % frequencyTable;

        //     var minutesTillTrain = frequencyTable - tRemainder;
        //     var nextTrain = moment().add(minutesTillTrain, "minutes");
        //     var nextTrainFormatted = moment(nextTrain).format("hh:mm");

        //     $("#train-table").append("<tr><td>"
        //         + trainNameTable + "</td><td>"
        //         + destinationTable + "</td><td>"
        //         + frequencyTable + "</td><td>"
        //         + nextTrainFormatted + "</td><td>"
        //         + minutesTillTrain + "</td></tr>");
    }),
        function (errorObject) {
            console.log("Errors handled: " + errorObject.code);
        };
});