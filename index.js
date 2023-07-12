const url = location.href;

const [_, p1] = url.match(
  /https:\/\/www\.amazon\.co\.jp\/.*dp\/([0-9A-Z]{10})\/?/
);

history.replaceState(null, '', p1 ? `https://www.amazon.co.jp/dp/${p1}/` : url);
