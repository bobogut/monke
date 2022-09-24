function getImageSkin(object) {
  if (object.type === "monke") return createMonkeSkin(object)
  if (object.type === "bloon") return createBloonSkin(object)
  if (object.type === "path") return createPathSkin(object)
  if (object.type === "dart") return createDartSkin(object)
  throw Error("unknown object type")
}

function createMonkeSkin() {
  return [myImages.rangeCircle]
}

function createBloonSkin() {
  return [myImages.mushroom_Red]
}

function createPathSkin() {
  return [myImages.snowball_Selected]
}

function createDartSkin() {
  return [myImages.snowball_Selected]
}
