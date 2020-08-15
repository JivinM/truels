# Truels

Words for the JS keywords `true` & `false`

Main File Size: 206b

## Installation

npm:

```shell
npm install truels
```

## Example

```javascript
// Lets say that you are checking if a button is clicked
// Then you want to change a image's visibility to 'visible'
// Here's the code:

const { on, off } = require('truels')

if(document.querySelector('#myBtn').clicked === true) { /* You can use `yes` instead of `true` */
    document.querySelector('#myEl').style.display = on // true
} else {
    document.querySelector('#myEl').style.display = off // false
}
```

## Words

- Falsy words:
  - no
  - of
  - zero
- Truthy words: 
  - on
  - one
  - yes

## License

This is licensed by MIT