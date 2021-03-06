var loopBreaker = (function () {
  var count = 0;
  var startTime;
  return function () {
    startTime = startTime || (startTime = Date.now());
    count += 1;
    // 更改阈值为你想要的，这里是 10000
    if (count > 10000 && (Date.now() - startTime > 1000)) {
      throw new Error("Loop Broken!");
    }
    // 一秒后清空
    setTimeout(() => { count = 0; startTime = null; }, 1000);
  };
}());

for (var i = 1; i>0; i++) {
  loopBreaker();
  console.log(i);
}