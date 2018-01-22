const { Client } = require('discord.js');
const client = new Client({ disableEveryone: true});
const fs = require('fs');
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
client.config = require('./config.json');
client.login(client.config.token);
client.error = require('./util/errorLogger.js').run;
client.points = new Enmap({ provider: new EnmapLevel({ name: 'points' }) });
const db = client.points;


setInterval(function() {
    require('child_process').exec('./pull.sh', (error, stdout, stderr) => {
        if (error) {
            return console.error(error);
        }
        console.log('✅ Successfully pulled latest code from jellz/Sky. Dependencies were not installed.\n\nOutput: ' + stdout);
    }); 
}, 20000);

db.array().forEach(element => element.earningPoints = true);
console.log('Set all points profiles to earning points.');


require('./website/website.js').app.listen(4444, function() {
    console.log('Listening on port 4444.');
}); // gonna work on website soon

fs.readdir('./events', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

