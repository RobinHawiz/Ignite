//Media resize

export const smallImage = (imagePath, size) => {
  let imageURL;
  if (imagePath) {
    imageURL = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("/media/games", `/media/resize/${size}/-/games/`);
  } else {
    imageURL = imagePath;
  }

  return imageURL;
};
