function scuberGreetingForFeet(value){
  if (value <= 400) { return 'This one is on me!';}
  else if (value > 400 && value <= 2000) {return 'That will be twenty bucks.';}
  else if (value > 2000 && value <= 2500) {return 'I will gladly take your thirty bucks.'}
  else return 'No can do.';
}

function ternaryCheckCity(city){
  const ans = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'; 
  return ans;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    
    case 'not as generous':
      return 'Thank you.';

    default:
      return 'Bye.';
  }
}