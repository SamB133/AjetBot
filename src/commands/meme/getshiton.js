const regex = /^!getshiton$/i;

const func = (msg) => {
	msg.channel.send('░░░░░░░░░░░█▀<@' + msg.author.id + '>█░░░░\n░░░░░░▄▀▀▀▀░░░░░█▄▄░░░░\n░░░░░░█░█░░░░░░░░░░▐░░░\n░░░░░░▐▐░░░░░░░░░▄░▐░░░\n░░░░░░█░░░░░░░░▄▀▀░▐░░░\n░░░░▄▀░░░░░░░░▐░▄▄▀░░░░\n░░▄▀░░░▐░░░░░█▄▀░▐░░░░░\n░░█░░░▐░░░░░░░░▄░█░░░░░\n░░░█▄░░▀▄░░░░▄▀▐░█░░░░░\n░░░█▐▀▀▀░▀▀▀▀░░▐░█░░░░░\n░░▐█▐▄░░▀░░░░░░▐░█▄▄░░░\n░░░▀▀░  <@152850062228193280>  ░░░▐▄▄▄▀░░░\n░░░░░░░░░░░░░░░░░░░░░░░');
};

module.exports = {
	regex,
	func
};