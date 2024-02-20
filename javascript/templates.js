//TEMPLATE LITERALS OR TEMPLATE STRINGS(literals delimited with backtick ( ` ) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.)

//Back-Tics
let text = `Hello world!`;//Templates use back-ticks (``) to define a string & are not supported in internet explorer

//Quotes inside strings
let text1=`He's often called "Johnny"`;//With back-ticks, you can use both single and double quotes inside a string

//Multiline strings
let text2=
`The quick
brown fox
jumps over
the lazy dog`;//Templates allow multiline strings,it will print as The quick brown fox jumps over the lazy dog

//interpolation:Template String provide an easy way to interpolate variables and expressions into strings.

   //Variable Substitutions :Template Strings allow variables in strings
   let firstName = "John";
   let lastName = "Doe";
   let text3 = `Welcome ${firstName}, ${lastName}!`;//Welcome John, Doe!

   //Expression Substitutions:Template Strings allow expressions in strings
   let price = 10;
   let VAT = 0.25;
   let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;//Total: 12.50




