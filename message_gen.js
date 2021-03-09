

const messages = {

  zodiak: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
  months: ['March 21 - April 19', 'April 20 - May 20', 'May 21 - June 21', 'June 21 - July 22', 'July 23 - August 22', 'August 23 - September 22', 'September 23 - October 23', 'October 24 - November 21', 'November 22 - December 21', 'December 22 - January 19', 'January 20 - February 18', 'February 19 - March 20'],
  signs: ['♈︎', '♉︎', '♊︎', '♋︎', '♌︎', '♍︎', '♎︎', '♏︎', '♐︎', '♑︎', '♒︎', '♓︎'],

}

const randomZodiak = () => {

  let randomMessage = messages.zodiak[Math.floor(Math.random()*`${messages.zodiak.length}`)]

  switch(randomMessage) {
    case 'Aries':
      console.log(`You were born between ${messages.months[0]} with sign of ${messages.zodiak[0]} and symbol ${messages.signs[0]}`)
      break;
    case 'Taurus':
      console.log(`You were born between ${messages.months[1]} with sign of ${messages.zodiak[1]} and symbol ${messages.signs[1]}`)
      break;
    case 'Gemini':
      console.log(`You were born between ${messages.months[2]} with sign of ${messages.zodiak[2]} and symbol ${messages.signs[2]}`)
      break;
    case 'Cancer':
      console.log(`You were born between ${messages.months[3]} with sign of ${messages.zodiak[3]} and symbol ${messages.signs[3]}`)
      break;
    case 'Leo':
      console.log(`You were born between ${messages.months[4]} with sign of ${messages.zodiak[4]} and symbol ${messages.signs[4]}`)
      break;
    case 'Virgo':
      console.log(`You were born between ${messages.months[5]} with sign of ${messages.zodiak[5]} and symbol ${messages.signs[5]}`)
      break;
    case 'Libra':
      console.log(`You were born between ${messages.months[6]} with sign of ${messages.zodiak[6]} and symbol ${messages.signs[6]}`)
      break;
    case 'Scorpio':
      console.log(`You were born between ${messages.months[7]} with sign of ${messages.zodiak[7]} and symbol ${messages.signs[7]}`)
      break;  
    case 'Sagittarius':
      console.log(`You were born between ${messages.months[8]} with sign of ${messages.zodiak[8]} and symbol ${messages.signs[8]}`)
      break;
    case 'Capricorn':
      console.log(`You were born between ${messages.months[9]} with sign of ${messages.zodiak[9]} and symbol ${messages.signs[9]}`)
      break;  
    case 'Aquarius':
      console.log(`You were born between ${messages.months[10]} with sign of ${messages.zodiak[10]} and symbol ${messages.signs[10]}`)
      break;
    case 'Pisces':
      console.log(`You were born between ${messages.months[11]} with sign of ${messages.zodiak[11]} and symbol ${messages.signs[11]}`)
      break;
  }

return randomMessage;
};

randomZodiak();
