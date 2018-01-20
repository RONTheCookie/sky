module.exports = {
    run: async (client, msg, args) => {
        const m = msg.channel.messages.fetch({limit: 2}).last();
        msg.channel.send(m.content);
        const mock = async function(string) {
            var chars = string.toUpperCase().split('');
            for (let i = 0; i < chars.length; i += 2) {
                chars[i] = chars[i].toLowerCase();
            }
            return chars.join('');
        };
        msg.channel.send(mock(m.content));
    },
    meta: {
        name: 'mock',
        ownerOnly: false,
        description: 'Mocks the last message in the channel.',
        usage: ''
    }
}