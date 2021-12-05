/*
    Convert hex to base64
    start: 49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d
    end: SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t
*/

const base64 = (hexStr) => {
  let solution = Buffer.from(hexStr, "hex").toString("base64");
  console.log(solution);
  return solution;
};
// base64(
//   "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d"
// );

/*
    Write a function that takes two equal-length buffers and produces their XOR combination.
    start: 1c0111001f010100061a024b53535009181c and 686974207468652062756c6c277320657965
    end: 746865206b696420646f6e277420706c6179
*/
function xor(hex1, hex2) {
  const buf1 = Buffer.from(hex1, "hex"); // split the hex
  const buf2 = Buffer.from(hex2, "hex"); // split the hex
  const bufResult = buf1.map((b, i) => b ^ buf2[i]); // xor each value at the same order
  let solution = bufResult.toString("hex"); // turn it back to hex
  console.log(solution);
  return solution;
}

// xor(
//   "1c0111001f010100061a024b53535009181c",
//   "686974207468652062756c6c277320657965"
// );

/*
    Single-byte XOR cipher
    start: 1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736
    end: find what letter
*/
