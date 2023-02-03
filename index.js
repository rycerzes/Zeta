require('dotenv').config();
const colors = require('colors');
const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./shard.js', { token:process.env.BOT_TOKEN||"OTQxNjk5MDg4OTkzMzcwMTUy.YgZvng.0HMfnh87fXKtAQe2rfqqaJERSyw"});

manager.on('shardCreate', shard => console.log('[STATUS]'.green + ` Launched shard ${shard.id}`));
manager.spawn();
