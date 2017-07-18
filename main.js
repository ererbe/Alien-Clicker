var aliens = 0;

function eggClick(number){
    aliens += number;
    document.getElementById("aliens").innerHTML = aliens;
};

function cheat(){
    aliens += 100000000000000;
    document.getElementById("aliens").innerHTML = aliens;
};

var eggs = 0;

function buyEgg(){
    var eggCost = Math.floor(10 * Math.pow(1.15,eggs));
    if(aliens >= eggCost){
        eggs += 1;
    	aliens -= eggCost;
        document.getElementById('eggs').innerHTML = eggs;
        document.getElementById('aliens').innerHTML = aliens;
    };
    var nextCost = Math.floor(10 * Math.pow(1.15,eggs));
    document.getElementById('eggCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	eggClick(eggs);
	
}, 10000);

var facehuggers = 0;

function buyFacehugger(){
    var facehuggerCost = Math.floor(100 * Math.pow(1.15,facehuggers));
    if(aliens >= facehuggerCost){
        facehuggers += 1;
    	aliens -= facehuggerCost;
        document.getElementById('facehuggers').innerHTML = facehuggers;
        document.getElementById('aliens').innerHTML = aliens;
    };
    var nextCost = Math.floor(100 * Math.pow(1.15,facehuggers));
    document.getElementById('facehuggerCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	eggClick(facehuggers);
	
}, 2000);

var chestbursters = 0;

function buyChestburster(){
    var chestbursterCost = Math.floor(500 * Math.pow(1.15,chestbursters));
    if(aliens >= chestbursterCost){
        chestbursters += 1;
    	aliens -= chestbursterCost;
        document.getElementById('chestbursters').innerHTML = chestbursters;
        document.getElementById('aliens').innerHTML = aliens;
    };
    var nextCost = Math.floor(500 * Math.pow(1.15,chestbursters));
    document.getElementById('chestbursterCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	eggClick(chestbursters);
	
}, 250);

var xenomorphs = 0;

function buyXenomorph(){
    var xenomorphCost = Math.floor(3000 * Math.pow(1.15,xenomorphs));
    if(aliens >= xenomorphCost){
        xenomorphs += 1;
    	aliens -= xenomorphCost;
        document.getElementById('xenomorphs').innerHTML = xenomorphs;
        document.getElementById('aliens').innerHTML = aliens;
    };
    var nextCost = Math.floor(3000 * Math.pow(1.15,xenomorphs));
    document.getElementById('xenomorphCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	eggClick(xenomorphs*2);
	
}, 200);

var queens = 0;

function buyQueen(){
    var queenCost = Math.floor(10000 * Math.pow(1.15,queens));
    if(aliens >= queenCost){
        queens += 1;
    	aliens -= queenCost;
        document.getElementById('queens').innerHTML = queens;
        document.getElementById('aliens').innerHTML = aliens;
    };
    var nextCost = Math.floor(10000 * Math.pow(1.15,queens));
    document.getElementById('queenCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	eggClick(queens*4);
	
}, 100);

var ships = 0;

function buyShip(){
    var shipCost = Math.floor(40000 * Math.pow(1.15,ships));
    if(aliens >= shipCost){
        ships += 1;
    	aliens -= shipCost;
        document.getElementById('ships').innerHTML = ships;
        document.getElementById('aliens').innerHTML = aliens;
    };
    var nextCost = Math.floor(40000 * Math.pow(1.15,ships));
    document.getElementById('shipCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	eggClick(ships*10);
	
}, 100);

var stations = 0;

function buyStation(){
    var shipCost = Math.floor(200000 * Math.pow(1.15,stations));
    if(aliens >= stationCost){
        stations += 1;
    	aliens -= stationCost;
        document.getElementById('stations').innerHTML = stations;
        document.getElementById('aliens').innerHTML = aliens;
    };
    var nextCost = Math.floor(200000 * Math.pow(1.15,stations));
    document.getElementById('stationCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	eggClick(stations*10);
	
}, 25);

var kplas = 0;

function buyKpla(){
    var kplaCost = Math.floor(1666666 * Math.pow(1.15,kplas));
    if(aliens >= kplaCost){
        kplas += 1;
    	aliens -= kplaCost;
        document.getElementById('kplas').innerHTML = kplas;
        document.getElementById('aliens').innerHTML = aliens;
    };
    var nextCost = Math.floor(1666666 * Math.pow(1.15,kplas));
    document.getElementById('kplaCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	eggClick(kplas*6666);
	
}, 1000);

var gplas = 0;

function buyGpla(){
    var gplaCost = Math.floor(123456789 * Math.pow(1.15,gplas));
    if(aliens >= gplaCost){
        gplas += 1;
    	aliens -= gplaCost;
        document.getElementById('gplas').innerHTML = gplas;
        document.getElementById('aliens').innerHTML = aliens;
    };
    var nextCost = Math.floor(123456789 * Math.pow(1.15,gplas));
    document.getElementById('gplaCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	eggClick(gplas*98765);
	
}, 1000);

var systems = 0;

function buySystem(){
    var systemCost = Math.floor(3999999999 * Math.pow(1.15,systems));
    if(aliens >= systemCost){
        systems += 1;
    	aliens -= systemCost;
        document.getElementById('systems').innerHTML = systems;
        document.getElementById('aliens').innerHTML = aliens;
    };
    var nextCost = Math.floor(3999999999 * Math.pow(1.15,systems));
    document.getElementById('systemCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	eggClick(systems*999999);
	
}, 1000);

var galaxys = 0;

function buyGalaxy(){
    var galaxyCost = Math.floor(50000000000 * Math.pow(1.15,galaxys));
    if(aliens >= galaxyCost){
        galaxys += 1;
    	aliens -= galaxyCost;
        document.getElementById('galaxys').innerHTML = galaxys;
        document.getElementById('aliens').innerHTML = aliens;
    };
    var nextCost = Math.floor(50000000000 * Math.pow(1.15,galaxys));
    document.getElementById('galaxyCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	eggClick(galaxys*10000);
	
}, 1);

var universes = 0;

function buyUniverse(){
    var universeCost = Math.floor(1000000000000 * Math.pow(1.15,universes));
    if(aliens >= universeCost){
        universes += 1;
    	aliens -= universeCost;
        document.getElementById('universes').innerHTML = universes;
        document.getElementById('aliens').innerHTML = aliens;
    };
    var nextCost = Math.floor(1000000000000 * Math.pow(1.15,universes));
    document.getElementById('universeCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	eggClick(universes*150000);
	
}, 1);