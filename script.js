function getSign() {

 let name = document.querySelector(".inp1").value;
 let month = document.querySelector(".inp3").value;
 let day = document.querySelector(".inp2").value;



  if((month == 1 && day >= 20) || (month == 2 && day <=18)) {
    alert( name + " you are Aquarius");
    // alert("Element: Air");
    // alert("Quality: Fixed");
    // alert("Color: Light-Blue, Silver");
    // alert("Day: Saturday");
    // alert("Ruler: Uranus, Saturn");
    // alert("Greatest Overall Compatibility: Leo, Sagittarius");
    // alert("Lucky Numbers: 4, 7, 11, 22, 29");
    // alert(" Date range: January 20 - February 18");

  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    alert(name + " you are PISCES");
    alert ("Element: Water");
    alert ("Quality: Mutable");
    alert ("Color: Mauve, Lilac, Purple, Violet, Sea green");
    alert ("Day: Thursday");
   alert ("Ruler: Neptune, Jupiter");
   alert ("Greatest Overall Compatibility: Virgo, Taurus");
  alert ("Lucky Numbers: 3, 9, 12, 15, 18, 24");
  alert (" Date range: February 19 - March 20");


  } else if((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
     alert( name + " you are ARIES")
//      Element: Fire

// Quality: Cardinal

// Color: Red

// Day: Tuesday

// Ruler: Mars

// Greatest Overall Compatibility: Libra, Leo

// Lucky Numbers: 1, 8, 17

// Date range: March 21 - April 19

  } else if((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
     alert( name + " you are TAURUS ")
//      Element: Earth

// Quality: Fixed

// Color: Green, Pink

// Day: Friday, Monday

// Ruler: Venus

// Greatest Overall Compatibility: Scorpio, Cancer

// Lucky Numbers: 2, 6, 9, 12, 24

// Date range: April 20 - May 20

  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
     alert(name + " you are GEMINI")
//      Element: Air

// Quality: Mutable

// Color: Light-Green, Yellow

// Day: Wednesday

// Ruler: Mercury

// Greatest Overall Compatibility: Sagittarius, Aquarius

// Lucky Numbers: 5, 7, 14, 23

// Date range: May 21 - June 20

  } else if((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
     alert( name +" you are  Cancer")
//      Element: Water

// Quality: Cardinal

// Color: White

// Day: Monday, Thursday

// Ruler: Moon

// Greatest Overall Compatibility: Capricorn, Taurus

// Lucky Numbers: 2, 3, 15, 20

// Date range: June 21 - July 22

  } else if((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
     alert( name +" you are leo")
//      Element: Fire

// Quality: Fixed

// Color: Gold, Yellow, Orange

// Day: Sunday

// Ruler: Sun

// Greatest Overall Compatibility: Aquarius, Gemini

// Lucky Numbers: 1, 3, 10, 19

// Date range: July 23 - August 22

  } else if((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
   	 alert( name +" you are Virgo")
//      Element: Earth

// Quality: Mutable

// Color: Grey, Beige, Pale-Yellow

// Day: Wednesday

// Ruler: Mercury

// Greatest Overall Compatibility: Pisces, Cancer

// Lucky Numbers: 5, 14, 15, 23, 32

// Date range: August 23 – September 22

  } else if((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
     alert( name +" you are Libra")
//      Element: Air

// Quality: Cardinal

// Color: Pink, Green

// Day: Friday

// Ruler: Venus

// Greatest Overall Compatibility: Aries, Sagittarius

// Lucky Numbers: 4, 6, 13, 15, 24

// Date range: September 23 - October 22

  } else if((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
     alert( name +" you are Scorpio")
//      Element: Water

// Quality: Fixed

// Color: Scarlet, Red, Rust

// Day: Tuesday

// Ruler: Pluto, Mars

// Greatest Overall Compatibility: Taurus, Cancer

// Lucky Numbers: 8, 11, 18, 22

// Date range: October 23 - November 21

  } else if((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    alert( name +" you are Sagittarius")
//     Element: Fire

// Quality: Mutable

// Color: Blue

// Day: Thursday

// Ruler: Jupiter

// Greatest Overall Compatibility: Gemini, Aries

// Lucky Numbers: 3, 7, 9, 12, 21

// Date range: November 22 - December 21

  } else if((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
     alert( name +" you are Capricorn")
//      Element: Earth

// Quality: Cardinal

// Color: Brown, Black

// Day: Saturday

// Ruler: Saturn

// Greatest Overall Compatibility: Taurus, Cancer

// Lucky Numbers: 4, 8, 13, 22

// Date range: December 22 - January 19
  }

}


