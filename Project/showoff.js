/*
THE FOLLOWING GO IN EACH FUNCTION MOVE
var player = arguments[arguments.length - 3];
var move = arguments[arguments.length - 2];
var gamestate = arguments[arguments.length - 1];

THE FOLLOWING GOES IN THE WIN CONDITION FUNCTION
var gamestate = arguments[arguments.length - 1];
*/

function increaseValueResult()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];
	move.card.value += 1;
};
function increaseValueCheckLegality()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];
	return true;
};

function decreaseValueResult()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];
	move.card.value -= 1;
};
function decreaseValueCheckLegality()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];
	return true;
};

function toAnyZoneResult()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];
	var zone = arguments[0];

	moveCard(move.card, zone, gamestate);

};
function toAnyZoneCheckLegality()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];
	
	return (cardIsInPlayerHand(move.card, player, gamestate));
};

function toPublic1Result()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];

	var zone = lookupZone(["name"], ["public1"], gamestate);
	moveCard(move.card, zone, gamestate);
};
function toPublic1CheckLegality()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];

	return (cardIsInPlayerHand(move.card, player, gamestate));
};

function toPublic2Result()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];
	var zone = arguments[0];
	var zone = lookupZone(["name"], ["public2"], gamestate);
	moveCard(move.card, zone, gamestate);
};
function toPublic2CheckLegality()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];
	return (cardIsInPlayerHand(move.card, player, gamestate));
};

function toPublic3Result()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];
	var zone = arguments[0];
	var zone = lookupZone(["name"], ["public3"], gamestate);
	moveCard(move.card, zone, gamestate);
};
function toPublic3CheckLegality()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];
	return (cardIsInPlayerHand(move.card, player, gamestate));
};


function swapZonesResult()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];
	var zone1 = arguments[0];
	var zone2 = arguments[1];
	var zone1Size = zone1.cards.length;
	var zone2Size = zone2.cards.length;
	for(var i = 0; i < zone1Size; i += 1)
	{
		/*zone2.cards.push(zone1.cards[0]);
		zone1.cards.shift();*/
		moveCard(zone1.cards[0], zone2, gamestate);
	}

	for(var i = 0; i < zone2Size; i += 1)
	{
		/*zone1.cards.push(zone2.cards[0]);
		zone2.cards.shift();*/
		moveCard(zone2.cards[0], zone1, gamestate);
	}
};
function swapZonesCheckLegality()
{
	var player = arguments[arguments.length - 3];
	var move = arguments[arguments.length - 2];
	var gamestate = arguments[arguments.length - 1];
	var zone1 = arguments[0];
	var zone2 = arguments[1];
	if(zone1.name != zone2.name)
	{
		return true;
	}

	return false;
};

function showoffWinCondition()
{
	var gamestate = arguments[arguments.length - 1];
	return false;
};