export function getInitials(name: string) {
  if (name) {
    let nameArry = name.split(" ");
    if (nameArry.length > 1) {
      return nameArry[0].charAt(0) + nameArry[1].charAt(0);
    } else {
      return nameArry[0].charAt(0);
    }
  } else {
    return "";
  }
}

export function keyGen() {
  return Date.now() * Math.random();
}
