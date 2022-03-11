var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.numberOfPlayers = 10;

    $scope.roles = ["KING","QUEEN","PRINCE","BISHOP","HEALER","SOLDIER","JOCKER","DANCER","POLICE","THIEF"];
    
    $scope.metadata = [
        {
          "role": "KING",
          "value": 1
        },
        {
          "role": "QUEEN",
          "value": 2
        },
        {
          "role": "PRINCE",
          "value": 3
        },
        {
          "role": "BISHOP",
          "value": 4
        },
        {
          "role": "HEALER",
          "value": 5
        },
        {
          "role": "SOLDIER",
          "value": 6
        },
        {
          "role": "JOCKER",
          "value": 7
        },
        {
          "role": "DANCER",
          "value": 8
        },
        {
          "role": "POLICE",
          "value": 9
        },
        {
          "role": "THIEF",
          "value": 10
        }
      ];
      $scope.names = ["Stephanie Barron",
      "Oakley Parsons",
      "Aliza Robinson",
      "Elena Povey",
      "Rahul Wilson",
      "Leela Redman",
      "Rianne Barrera",
      "Jayson Hibbert",
      "Barney Owens",
      "Stevie Mccullough",
      "Pierce Meza",
      "Marilyn Battle",
      "Richie Mellor",
      "Amelia-Rose Barker",
      "Wil Mcknight",
      "Mylee Fernandez",
      "Abbigail Roberson",
      "Sohaib Nairn",
      "Talia York",
      "Usmaan Williamson",
      "Gordon John",
      "Nana Donnelly",
      "Ada Turnbull",
      "Zavier Broadhurst",
      "Adaline Leech",
      "Inigo Oneill",
      "Trystan Villegas",
      "Iwan Clarkson",
      "Mimi Talbot",
      "Ivy-Rose Greer",
      "Kathleen Harwood",
      "Tristan Howells",
      "Oisin Schwartz",
      "Sana Bloggs",
      "Chase Green",
      "Iram Mccarthy",
      "Roxie Brook",
      "Samina Dennis",
      "Robin Smart",
      "Derren Gilmore",
      "Brad Mcneill",
      "Rio Avila",
      "Esther Simons",
      "Evelina Blaese",
      "Chantelle Harmon",
      "Kealan Pearson",
      "Jillian Logan",
      "Bailey Mcdaniel",
      "Georgia Knox",
      "Gabrielius Krueger"
    ];

    $scope.myTable = [];

    for(var i=0; i<$scope.numberOfPlayers; i++){
        $scope.index = Math.floor(Math.random() * $scope.metadata.length);
        $scope.indexName = Math.floor(Math.random() * $scope.names.length);
        $scope.thisPlayer = $scope.metadata[$scope.index];
        $scope.thisPlayer.id = i;
        if(i==0){
            $scope.thisPlayer.name = "You";
        } else{
            $scope.thisPlayer.name = $scope.names[$scope.indexName];
            $scope.names.splice($scope.indexName, 1);
        }
        if($scope.thisPlayer.value == 1){
            $scope.thisPlayer.reveal = false;
            $scope.thisPlayer.turn = false;
        } else{
            $scope.thisPlayer.reveal = true;
            $scope.thisPlayer.turn = true;
        }

        $scope.myTable.push($scope.thisPlayer);
        $scope.metadata.splice($scope.index, 1);
    }

    $scope.progress = [];

    $scope.guess = function(x){
        $scope.temp = {};
        var indexMyTable;
        do {
            indexMyTable = Math.floor(Math.random() * $scope.myTable.length);
          }
          while (indexMyTable == x.id || $scope.myTable[indexMyTable].reveal == false);
        var iGuess = $scope.myTable[indexMyTable];
        $scope.handleGuess(x, iGuess);
    };

    $scope.myGuess = function(y){
        $scope.handleGuess($scope.myTable[0], y);
    };

    $scope.handleGuess = function(x, y){

        console.log(x);
        console.log(y);


        if(y.value == x.value + 1){
            console.log($scope.myTable[y.id].reveal);
            $scope.myTable[y.id].reveal = false;
            $scope.myTable[y.id].turn = false;
            $scope.myTable[x.id].turn = true;
        } else{
            $scope.temp.role = y.role;
            $scope.temp.value = y.value;
            $scope.myTable[y.id].turn = false;
            $scope.myTable[x.id].turn = true;
            $scope.myTable[y.id].reveal = false;
            $scope.myTable[x.id].reveal = true;
            $scope.myTable[y.id].role = x.role;
            $scope.myTable[x.id].role = $scope.temp.role;
            $scope.myTable[y.id].value = x.value;
            $scope.myTable[x.id].value = $scope.temp.value;
        }
    };
});
