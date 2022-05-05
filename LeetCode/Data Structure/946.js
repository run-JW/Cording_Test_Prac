const validateStackSequences = (pushed, popped) => {
  let length = pushed.length, i = 0, j = 0, s = 0;

  while (i < length) {
    if (~s && popped[j] === pushed[s]) j++, s--
    else pushed[++s] = pushed[++i];
  }
  return !s;
};
