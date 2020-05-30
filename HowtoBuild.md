1. Create UI

Action:

Action 1:

1. Click to Edit Currencies
   1.1 Show table "Select Currencies"
   1.2 close when click close Button
   1.3 Toggle Components - Flag + monetaryUnit (short) + Country name + monetary Unit (full) + Star (If it active)
   1.4 Show elements if user searches
   1.5 display country to section target if it has star
   1.6 if it does have star ==> remove it from the list
   1.7 switch component from --> To

2. action 2: Setting
   2.2 select the source API
   2.3 if it requires key => show input field (reverse - no show)
   2.4 change the link follow the source API
   2.5 save or cancel ==> requires it

3. Click button switch => switch the current monetaryUnit with the one

================================================

1. Call Api + show item respective

=> 1 obj sẽ gồm:

- Cờ, monetary unit, country name, selected: true/false,

{
Flag: countryCode => ReactCountryFlag,
monetaryUnit: API rates: https://open.exchangerate-api.com/v6/latest
countryName: typed
rates: API rates: https://open.exchangerate-api.com/v6/latest
}

```bash
const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: 123,
};
console.log(mouse[bird.size]); //123
```

=> countryName

```
rate[monetary.[key]]
```

convert Obj to Arr

```
const object1 = {
  a: 'somestring',
  b: 42
};

let newArr = []
for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}`);
  newArr.push(`${key}`)
}
console.log(newArr)

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed
```

=============
Đầu ra cho currency modal sẽ là

1 array chứa obj và trong obj đó sẽ có các giá trị:

- đơn vị tiền tệ + tên nước
- rates
- đơn vị tiền

=============
Rates: API - Targets

- rates Api
- if rate api === countrynames.map(country => {
  if(country.substring(0,3) === rate[key]){
  return rate \* para Input
  }
  })

---

xử lý thằng currency modal:

1. Khi mà toggle thì đẩy nó xuống cuối
2. Khi nó biến thành original thì xóa nó trong list currency modal
