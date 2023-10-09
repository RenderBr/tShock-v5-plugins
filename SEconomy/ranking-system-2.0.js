/* 

    Ranking System v2.0, by Wolfje (Tyler W.), 2013.

    This is a ranking script for the AliasCmd plugin in Javascript.  Install it by putting it in your "serverscripts" directory and starting the Terraria server.
    If the server is already running AliasCmd just type "/jist reload" in the console to cause the script to load.

    Released under Wolfje's Don't-be-a-dick license.  You didn't write this, I did, so if you modify it don't claim the work as yours; it isn't.


	** THIS VERSION OF THE RANKING SCRIPT REQUIRES JIST AND SECONOMY UPDATE 15 OR LATER. **


    --- rankingList Object ---

    There's really nothing to it. :)

    * the first parameter is the rank key.
    * "name" must match the rank key.  Avoid spaces
    * "cost" is a SEconomy string representation of how much money it costs to be that rank, "0c" is free
    * "group" is the TShock group this rank is

    * "parentgroup" is used for hierarchy.  set it to the group of the rank that comes before it to establish a ladder
        You can specify multiple ranks with the same parent.  Doing this is going to create a tree of choices called a class trunk.
        Once a user arrives at a class trunk they cannot /rank up, they will be asked to pick a "class", but you can modify that text to whatever you like.

        You can specify as many trunks as you want.  You can have rank choices inside rank choices up to an infinite depth, the sky (or rather, your heap size) is the limit. :)

		
		"levelupcommands": [
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/time noon",
            "/spawnmob \"skeletron head\"",
        ],
		
*/

/*
 * Please see the forums at http://plugins.tw.id.au/ for tutorials on how 
 * to make a ranking list. 
 */
var rankingList = {
  "Level 1": {
    "name": "Level 1",
    "parentgroup": undefined,
    "levelupcommands": [
      ""
    ],
    "group": "Level 1",
    "cost": "0"
  },
  "Level 2": {
    "name": "Level 2",
    "parentgroup": "Level 1",
    "levelupcommands": [""],
    "group": "Level 2",
    "cost": "100"
  },
  "Level 3": {
    "name": "Level 3",
    "parentgroup": "Level 2",
    "levelupcommands": [""],
    "group": "Level 3",
    "cost": "230"
  },
  "Level 4": {
    "name": "Level 4",
    "parentgroup": "Level 3",
    "levelupcommands": [""],
    "group": "Level 4",
    "cost": "365"
  },
  "Level 5": {
    "name": "Level 5",
    "parentgroup": "Level 4",
    "levelupcommands": [""],
    "group": "Level 5",
    "cost": "503"
  },
  "Level 6": {
    "name": "Level 6",
    "parentgroup": "Level 5",
    "levelupcommands": [""],
    "group": "Level 6",
    "cost": "645"
  },
  "Level 7": {
    "name": "Level 7",
    "parentgroup": "Level 6",
    "levelupcommands": [""],
    "group": "Level 7",
    "cost": "791"
  },
  "Level 8": {
    "name": "Level 8",
    "parentgroup": "Level 7",
    "levelupcommands": [""],
    "group": "Level 8",
    "cost": "940"
  },
  "Level 9": {
    "name": "Level 9",
    "parentgroup": "Level 8",
    "levelupcommands": [""],
    "group": "Level 9",
    "cost": "1093"
  },
  "Level 10": {
    "name": "Level 10",
    "parentgroup": "Level 9",
    "levelupcommands": [""],
    "group": "Level 10",
    "cost": "1249"
  },
  "Level 11": {
    "name": "Level 11",
    "parentgroup": "Level 10",
    "levelupcommands": [""],
    "group": "Level 11",
    "cost": "1410"
  },
  "Level 12": {
    "name": "Level 12",
    "parentgroup": "Level 11",
    "levelupcommands": [""],
    "group": "Level 12",
    "cost": "1861"
  },
  "Level 13": {
    "name": "Level 13",
    "parentgroup": "Level 12",
    "levelupcommands": [""],
    "group": "Level 13",
    "cost": "2326"
  },
  "Level 14": {
    "name": "Level 14",
    "parentgroup": "Level 13",
    "levelupcommands": [""],
    "group": "Level 14",
    "cost": "2809"
  },
  "Level 15": {
    "name": "Level 15",
    "parentgroup": "Level 14",
    "levelupcommands": [""],
    "group": "Level 15",
    "cost": "3313"
  },
  "Level 16": {
    "name": "Level 16",
    "parentgroup": "Level 15",
    "levelupcommands": [""],
    "group": "Level 16",
    "cost": "3839"
  },
  "Level 17": {
    "name": "Level 17",
    "parentgroup": "Level 16",
    "levelupcommands": [""],
    "group": "Level 17",
    "cost": "4389"
  },
  "Level 18": {
    "name": "Level 18",
    "parentgroup": "Level 17",
    "levelupcommands": [""],
    "group": "Level 18",
    "cost": "4964"
  },
  "Level 19": {
    "name": "Level 19",
    "parentgroup": "Level 18",
    "levelupcommands": [""],
    "group": "Level 19",
    "cost": "5567"
  },
  "Level 20": {
    "name": "Level 20",
    "parentgroup": "Level 19",
    "levelupcommands": [""],
    "group": "Level 20",
    "cost": "6199"
  },
  "Level 21": {
    "name": "Level 21",
    "parentgroup": "Level 20",
    "levelupcommands": [""],
    "group": "Level 21",
    "cost": "6863"
  },
  "Level 22": {
    "name": "Level 22",
    "parentgroup": "Level 21",
    "levelupcommands": [""],
    "group": "Level 22",
    "cost": "7559"
  },
  "Level 23": {
    "name": "Level 23",
    "parentgroup": "Level 22",
    "levelupcommands": [""],
    "group": "Level 23",
    "cost": "8289"
  },
  "Level 24": {
    "name": "Level 24",
    "parentgroup": "Level 23",
    "levelupcommands": [""],
    "group": "Level 24",
    "cost": "9056"
  },
  "Level 25": {
    "name": "Level 25",
    "parentgroup": "Level 24",
    "levelupcommands": [""],
    "group": "Level 25",
    "cost": "9859"
  },
  "Level 26": {
    "name": "Level 26",
    "parentgroup": "Level 25",
    "levelupcommands": [""],
    "group": "Level 26",
    "cost": "10601"
  },
  "Level 27": {
    "name": "Level 27",
    "parentgroup": "Level 26",
    "levelupcommands": [""],
    "group": "Level 27",
    "cost": "11484"
  },
  "Level 28": {
    "name": "Level 28",
    "parentgroup": "Level 27",
    "levelupcommands": [""],
    "group": "Level 28",
    "cost": "12410"
  },
  "Level 29": {
    "name": "Level 29",
    "parentgroup": "Level 28",
    "levelupcommands": [""],
    "group": "Level 29",
    "cost": "13381"
  },
  "Level 30": {
    "name": "Level 30",
    "parentgroup": "Level 29",
    "levelupcommands": [""],
    "group": "Level 30",
    "cost": "14399"
  }
}



 /*
  * change this variable to false to disable the broadcast
  * messages when people rank up.
  */
var rank_enable_broadcast = true;

 /*
  * This is a permission for groups to be EXCLUDED from the ranking system.
  * Give this permission to your moderators or special elevated ranks
  * to stop them from being able to /rank up and screw their account up.
  */
var rank_excluded_permission = "seconomy.rank.excluded";

/*
 ------------------------------------------------------------------------------------------------------------------------------------------------------
 */

/**
 * Iterates over all items pointed to by @a enumerable and executes
 * @a func with a pointer to the item inside it.
 *
 * This function acts as a fast-enumerator, with built-in prototype
 * checking.
 *
 * @param	enumerable:Array	An Array or other enumerable to iterate over
 * @param	func:function		A function pointer to execute once for each item
 * 								in the enumerable.  The function prototype must
 * 								contain one parameter which points to the item
 * 								in the enumerable.
 */
function rank_for_each_item(enumerable, func)
{
	if (enumerable == undefined || func == undefined) {
		return;
	}

	for (var item in enumerable) {
		if (item == undefined || enumerable.hasOwnProperty(item) == false) {
			continue;
		}
		
		func(enumerable[item]);
	}
}


/**
 * Finds all the parent groups for the specified group.
 *
 * @param	group:string	A string containing the group to look up
 *
 * @returns	Array with the group objects if the operation was successful,
 * 			Array with no objects if none was found, or @a undefined 
 * 			 if there was an error.
 */
function rank_find_parent(group)
{
	var parentList = undefined;

	if (rankingList == undefined || group == undefined) {
		return;
	}

	if ((parentList = new Array()) == undefined) {
		return;
	}
	
	rank_for_each_item(rankingList, function(item) {
		if (item.parentgroup == group) {
			parentList.push(item);
		}
	});

	return parentList;
}

/**
 * Finds a rank in the rank tree by the name provided by group.
 *
 * @param	group:string	A string containing the group name in it
 * 
 * @returns		The group object if it was found, or undefined if it
 * 				doesn't exist or there was an error.
 */
function rank_find(group)
{
	var rank;

	if (group == undefined || rankingList == undefined) {
		return;
	}

	rank_for_each_item(rankingList, function(item) {
		if (item.group == group) {
			rank = item;
		}
	});

	return rank;
}

/**
 * Finds a rank in the rank tree by the specified name.
 *
 * @param	rankName:string		A string containing a valid rank name as
 * 								specified by the "rank" property in the
 * 								rankingList
 *
 * @returns	The rank item if it was found, or undefined if the rank does
 * 			not exist in the tree, or an error occured.
 */
function rank_find_by_name(rankName)
{
	var rank;

	if (rankName == undefined || rankingList == undefined) {
		return;
	}

	rank_for_each_item(rankingList, function(item) {
		if (item.name.toLowerCase() == rankName.toLowerCase()) {
			rank = item;
		}
	});
	return rank;
}

/**
 * Finds the first rank in the rankingList where the parent group isn't defined,
 * which is by definition the starting rank.
 *
 * There should not be more than one rank in the ranking list with an undefined parent.
 *
 * @returns	The starting rank if one exists, or undefined if it was not found.
 */
function rank_starting_rank()
{
	var startingRank;

	if (rankingList === undefined) {
		return;
	}

	rank_for_each_item(rankingList, function(item) {
		if (item.parentgroup === undefined) {
			startingRank = item;
		}
	});

	return startingRank;
}

/**
 * Returns a human-readable error message based on a provided 
 * hard-coded error level.
 *
 * @param	msgLevel	The return-code for functions that return
 * 						an error code.
 *
 * @returns		A string containing the error message for the provided
 * 				error code.
 */
function rank_error_message(msgLevel) 
{
	if (msgLevel == undefined) {
		return "Unknown Error";
	}

	switch (msgLevel) {
		case 0:
				return "The operation completed successfully.";
		case -1:
				return "Internal error: the operation failed.";
		case -2:
				return "Internal error: Parsing exp failed";
		case -3:
				return "Player does not have a exp pool or the account cannot be found";
		case -4:
				return "Transfer failed.  Perhaps you don't have enough exp.";
		default:
				return "Unknown error.";
	}
}

/**
 * Moves a player to a new rank specified by newRank.
 *
 * @param	player:Player	The player to move the rank
 * @param	rank:object		The rank to move the player to
 *
 * @returns		0 on success,
 * 				-1 on input parameter failure
 * 				-2 on ranking cost parse failure
 * 				-3 on bank account not found
 * 				-4 on transfer failed, too poor
 */
function rank_move(player, rank) 
{
	var rankCost;
	var seconomyAccount;

	if (player == undefined && rank == undefined) {
		return -1;
	}

	if ((rankCost = seconomy_parse_money(rank.cost)) == undefined) {
		return -2;
	}

	if (rankCost.Value == 0) {
		change_group(player, rank.group);
		rank_for_each_item(rank.levelupcommands, function(command) {
			execute_command(player, command);
		});

		return 0;
	}
	
	if ((seconomyAccount = seconomy_get_account(player)) == undefined) {
		return -3;
	}

	seconomy_pay_async(seconomyAccount, seconomy_world_account(), rankCost, 
					"rank " + rank.name, function(payResult) {
		if (payResult.TransferSucceeded == false) {
			msg(player, "You don't have enough experience to reach " + rank.name);
			return -4;
		}
			
		change_group(player, rank.group);
		rank_for_each_item(rank.levelupcommands, function(command) {
			execute_command(player, command);
		});
	
		if (rank_enable_broadcast) { 
			broadcast_colour("#00AAFF", player.Name + " has reached " + rank.name.replace(/s$/i, '') + "!");
			execute_command(tshock_server(), "/firework \"" + player.Name + "\"" );
		}

		return 0;
	});
}


/**
 * Simple wrapper around moving a player to the specified rank.
 *
 * Does the move, and informs the player if the move failed,
 * and optionally does the broadcast when a player ranks up
 * successfully if rank_enable_broadcast is set to true.
 */
function rank_move_wrapper(player, rank)
{
	if (player == undefined || rank == undefined) {
		return -1;
	}
	
	if ((moveResult = rank_move(player, rank)) < 0) {
		msg(player, "Level up unsuccessful: " + rank_error_message(moveResult));
		return -1;
	}


	return 0;
}


/**
 * Moves a player up the ranking tree.
 *
 * Will halt if the player is at a trunk in the tree, forcing them to make
 * a decision.  The decision is chosen with the /rank <rank name> command.
 *
 * @param	player	The player object to move up the rank tree.
 */
function rank_move_next(player, aliasRef)
{
	var rank;
	var nextrankingList;
	var moveResult;
	var nextRank;
	var rankCost;
	var rankString;

	if (player == undefined || rankingList == undefined) {
		return;
	}

	if ((nextRank = rank_starting_rank()) === undefined) {
		msg(player, "There has been an error in the script, and you can't level up. Please report the issue & your current level to Split.");
		return;
	}

	if ((rank = rank_find(player.Group.Name)) === undefined) {
		rank_move_wrapper(player, rank_starting_rank());
		return;
	}

	if ((nextrankingList = rank_find_parent(rank.group)) == undefined) {
		msg(player, "There has been an error in the script, and you can't level up. Please report the issue & your current level to Split.");
		return;
	}
	if (nextrankingList.length == 0) {
		msg(player, "You are currently at the maximum level.");
		return;
	}
	if (nextrankingList.length == 1 && (nextRank = nextrankingList[0]) != undefined) {
		rank_move_wrapper(player, nextRank);
		return;
	}
	if (nextrankingList.length > 1) {
		msg(player, "You are currently " + rank.name + ". Classes are not available LOL DONT TRY");
		
		rank_for_each_item(nextrankingList, function(item) {
			rankCost = seconomy_parse_money(item.cost);
			rankString = " * /rank " + item.name;
			
			if (rankCost.Value == 0) {
				rankString += " (free)";
			} else {
				rankString += " (costs " + rankCost.ToString() + ")";
			}

			msg(player, rankString);
		});

		acmd_cooldown_reset(player, aliasRef);
	}
}

/**
 * Prints a help message to the player depending on where they are in the rank
 * tree.
 *
 * @param	player	The player to print the message to, and about.
 *
 */
function rank_player_help(player) 
{
	var rank;
	var nextRank;
	var playerText;
	var rankCost;
	var rankString;

	if (player == undefined || rankingList == undefined) {
		return;
	}
	
	if ((rank = rank_find(player.Group.Name)) == undefined) {
		var startingRank;
		if ((startingRank = rank_starting_rank()) === undefined) {
			msg(player, "You currently are unable to level up.");
			return;
		}

		msg(player, "Create an account using /register to begin gaining experience points.");
		return;
	}
	

	playerText = "You are currently " + rank.name + ".";
	if ((nextRank = rank_find_parent(rank.group)) === undefined) {
		msg(player, "There has been an internal error in the leveling system. Please report this issue, date & time to Split.");
		return;
	}
	
	
	if (nextRank.length == 0) {
		playerText += " You are currently at the maximum level.";
		msg(player, playerText);
		return;
	} else if (nextRank.length == 1 && (rank = nextRank[0]) != undefined) {
		playerText += " To reach " + rank.name;

		if ((rankCost = seconomy_parse_money(rank.cost)) == undefined) {
			playerText += ".";
		} else {
			if (rankCost.Value > 0) {
				playerText += " you need " + rankCost.ToString() + ". To level up, type \"/level up\".";
			} else {
				playerText += ".";
			}
		}
	} else {
		playerText += " Type /rank up to pick a class";
	}
	msg(player, playerText);

}

/**
 The main /rank aliascommand
 
 The command itself costs nothing, that's because
 the handlers will charge if need be.

 */
acmd_alias_create( /*alias name */ "level", /* cost */ "0c", /* Cool down seconds */0, /* permission needed */ "", /* function to execute */ function (player, parameters) {
	var command;
	var chosenClass;
	
	if (rankingList == undefined
		|| player.Group == undefined) {
		return;
	}
	
	if (tshock_has_permission(player, rank_excluded_permission)) {
		msg_colour("#FFDD00", player, "Create an account using /register to begin gaining experience points.");
		return;
	}
	
	if (parameters.Count == 0
		|| (command = parameters[0]) == "help") {
		rank_player_help(player);
		/*
		 * Cooldown gets reset if the
		 * player is just querying what
		 * rank they are
		 */
		acmd_cooldown_reset(player, this);
		return;
	}

	if (command == "up") {
		rank_move_next(player, this);
		return;
	}

	if (!(chosenClass = rank_find_by_name(command.toString().toLowerCase()))) {
		msg_colour("#FFDD00", player, "Use /level up to level up, " + command + " does not exist.");
		return;
	}

	
	
	if (chosenClass.parentgroup.toLowerCase() != rank_find(player.Group.Name).name.toLowerCase()) {
		rank_player_help(player);
		return;
	}


	rank_move_wrapper(player, chosenClass);
});
