function remove (string) {
  let res = string.split('!');
  console.log(res);
  res = res.join('');
  console.log(res);
}

remove("!!!!Hi!!!!")

