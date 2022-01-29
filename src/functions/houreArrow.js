export const houreMoverUp = (houreMove) => {
  if (houreMove <= 0) {
    return houreMove - 20.5;
  }
};

export const houreMoverDown = (houreMove) => {
  if (houreMove < 0) {
    return houreMove + 20.5;
  }
};
export const weekMoverUp = (houreMove) => {
  if (houreMove <= 0) {
    return houreMove - 100;
  }
};

export const weekMoverDown = (houreMove) => {
  if (houreMove < 0) {
    return houreMove + 100;
  }
};
export const highlightsMoveUp = (highlightsMove) =>{
    if (highlightsMove < 0) {
        return highlightsMove + 80;
      }
}
export const highlightsMoveDown = (highlightsMove) =>{
    if (highlightsMove <= 0) {
        return highlightsMove -80;
      }
}