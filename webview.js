'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    let directMessages = 0;
    unreads = document.querySelectorAll('.badge.unread-count')
    unreads.forEach(unread => directMessages += Number(unread.textContent))
    Franz.setBadge(directMessages);
  };

  Franz.loop(getMessages);

  setTimeout(() => {
    getTeamIcon();
  }, 4000);
};
