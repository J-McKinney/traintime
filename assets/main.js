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

        var trainsName = childSnapshot.val().trainName;
        var dest = childSnapshot.val().destination;
        var tFrequency = childSnapshot.val().frequency;
        var firstTime = childSnapshot.val().trainTime;

        var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
        // console.log(firstTimeConverted);

        var currentTime = moment();
        // console.log(currentTime);
        // console.log("Current Time: " + moment(currentTime).format("hh:mm"));

        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        // console.log(diffTime);

        var tRemainder = diffTime % tFrequency;
        // console.log(tRemainder);

        var tMinutesTillTrain = tFrequency - tRemainder;
        // console.log(tMinutesTillTrain);

        var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        // console.log(nextTrain);

        var nextTrainFormatted = moment(nextTrain).format("hh:mm");
        // console.log(nextTrainFormatted);

        $("#trainTable").append(
            "<tr class='row'><td class='col-sm-2'>" + trainsName +
            "</td><td class='col-sm-3'>" + dest +
            "</td><td class='col-sm-3'>" + tFrequency +
            "</td><td class='col-sm-2'>" + nextTrainFormatted +
            "</td><td class='col-sm-2'>" + tMinutesTillTrain + "</td></tr>");

    }),
        function (errorObject) {
            console.log("Errors handled: " + errorObject.code);
        };
});