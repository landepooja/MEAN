var tigger = {character: "Tigger"};
var pooh = {character: "Winnie the Pooh"};
tigger.north = pooh;
var piglet = { character: "Piglet"};        
piglet.east = tigger.north;          
tigger.north.west = piglet;

var bees = {character: "Bees"};
bees.west = tigger.north;
tiger.north.east = bees

var christopherRobin = {character: "Christopher Robin"};
var kanga = {character: "Kanga"};
var owl = {character:"Owl"};
var rabbit = {character: "Rabbit"};
christopherRobin.south = tigger.north;
christopherRobin.north = Kanga;
piglet.north = owl;
christopherRobin.west = piglet.north;
bees.north = rabbit;
christopherRobin.west = bees.north

var gopher = {character: "Gopher"};
gopher.west = rabbit;
rabbit.east = bees.north.east;

var eeyore = {character: "Eeyore"};
var heffalumps = {character: "Heffalumps"};
eeyore.south = christopherRobin.north;
kanga.north = eeyore;
eeyore.east = heffalumps;
heffalumps.west = kanga.north;
