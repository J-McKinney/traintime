var config = {
    apiKey: "AIzaSyAaoKp0Xod_gObg2BIlujtAC5yg4kuMFUQ",
    authDomain: "traintime-ba953.firebaseapp.com",
    databaseURL: "https://traintime-ba953.firebaseio.com",
    storageBucket: "traintime-ba953.appspot.com"
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

var trainName = "";
var destination = "";
var trainTime = "";
var frequency = "";

$("#submit").on("click", function (event) {
    event.preventDefault();

    console.log("pushed")

    trainName = $("#inputTrainName").val().trim();
    destination = $("#inputDestination").val().trim();
    trainTime = $("#inputTrainTime").val().trim();
    frequency = $("#inputFrequency").val().trim();

    database.ref().push({
        TrainName: trainName,
        Destination: destination,
        TrainTime: trainTime,
        Frequency: frequency
    });

    console.log(trainName)
    console.log(destination)
    console.log(trainTime)
    console.log(frequency)

    $("#trainName").val("");
    $("#destination").val("");
    $("#trainTime").val("");
    $("#frequency").val("");

});

