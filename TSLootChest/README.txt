TSLootChest v1.4.0
====================

INSTALLATION
------------
1. Copy LootChest.dll to your TShock ServerPlugins folder
2. Restart your TShock server
3. Configure settings in tshock/LootChest/LootChestConfig.json

REQUIREMENTS
------------
- TShock 5.2.4 (Terraria 1.4.4.9)
- .NET 6.0

DEPENDENCIES (INCLUDED IN DLL)
------------------------------
- OTAPI.Upcoming v3.1.20
- System.Data.SQLite v2.0.2
- TSAPI v5.2.1
- TShock v5.2.4

All dependencies are compiled into the DLL. No additional files needed.

DOCUMENTATION
-------------
https://github.com/matheus-fsc/TSLootChest

COMMANDS
--------
/addchest <X> <Y>    - Mark chest as player-placed
/remchest <X> <Y>    - Remove chest from tracking
/togglelogchest      - Toggle chest position logging
/lootchestreload     - Reload config and translations

All commands require 'lootchest.admin' permission.

SUPPORT
-------
GitHub Issues: https://github.com/matheus-fsc/TSLootChest/issues
```