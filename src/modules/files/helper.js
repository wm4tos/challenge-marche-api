module.exports.formatFile = ({
  name, path, size, type, isProfilePic = false, isDefaultProfilePic = false,
}) => ({
  name, path, size, type, isProfilePic, isDefaultProfilePic,
});

module.exports.getFileExtension = name => name.match(/\..*$/)[0];
