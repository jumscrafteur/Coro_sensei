function setProf(message, arg) {
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
  if (!message.guild.roles.cache.has(arg[0])) return message.channel.send('ID de role non valide');
  let test = message.guild.roles.cache.get(arg[0]);
  message.channel.send(`${test} est maintenant un grade prof`);
  return test;
}

module.exports = setProf;