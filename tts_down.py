lyrics = [
  [12600, "You will not be able to stay home, brother."],
  [5450, "You will not be able to plug in, turn on and cop out."],
  [4050, "You will not be able to lose yourself on skag and skip out for beer during commercials,"],
  [4300, "because the revolution will not be televised."],
  [5550, "The revolution will not be televised."],
  [1850, "The revolution will not be brought to you by Xerox in 4 parts without commercial interruptions."],
  [4900, "The revolution will not show you pictures of Nixon blowing a bugle and leading a charge by John Mitchell, General Abrams and Spiro Agnew to eat hog maws confiscated from a Harlem sanctuary."],
  [10180, "The revolution will not be televised."],
  [3720, "The revolution will not be brought to you by the Schaefer Award Theatre and will not star Natalie Woods and Steve McQueen or Bullwinkle and Julia."],
  [10500, "The revolution will not give your mouth sex appeal."],
  [2400, "The revolution will not get rid of the nubs."],
  [2400, "The revolution will not make you look five pounds thinner, because the revolution will not be televised, Brother."],
  [6600, "There will be no pictures of you and Willie May pushing that shopping cart down the block on the dead run, or trying to slide that color television into a stolen ambulance."],
  [7780, "NBC will not be able predict the winner at 8:32 or report from 29 districts."],
  [4600, "The revolution will not be televised."],
  [1850, "There will be no pictures of pigs shooting down brothers in the instant replay."],
  [3000, "There will be no pictures of pigs shooting down brothers in the instant replay."],
  [3000, "There will be no pictures of Whitney Young being run out of Harlem on a rail with a brand new process."],
  [4000, "There will be no slow motion or still life of Roy Wilkens strolling through Watts in a Red, Black and Green liberation jumpsuit that he had been saving for just the proper occasion."],
  [10000, "Green Acres, The Beverly Hillbillies, and Hooterville Junction will no longer be so damned relevant, and women will not care if Dick finally gets down with Jane on Search for Tomorrow because Black people will be in the street looking for a brighter day."],
  [10000, "The revolution will not be televised."],
  [1850, "There will be no highlights on the eleven o'clock news and no pictures of hairy armed women liberationists and Jackie Onassis blowing her nose."],
  [6000, "The theme song will not be written by Jim Webb, Francis Scott Key, nor sung by Glen Campbell, Tom Jones, Johnny Cash, Englebert Humperdink, or the Rare Earth."],
  [6000, "The revolution will not be televised."],
  [3000, "The revolution will not be right back after a message about a white tornado, white lightning, or white people."],
  [5000, "You will not have to worry about a dove in your bedroom, a tiger in your tank, or the giant in your toilet bowl."],
  [5000, "The revolution will not go better with Coke."],
  [3000, "The revolution will not fight the germs that may cause bad breath."],
  [3000, "The revolution will put you in the driver's seat."],
  [3000, "The revolution will not be televised, will not be televised, will not be televised, will not be televised."],
  [4000, "The revolution will be no re-run brothers;"],
  [4000, "The revolution will be live."]
]

import urllib2

for l in lyrics:
  url = 'http://translate.google.com/translate_tts?tl=en&q=' + escape(phrase); 
  request = urllib2.Request(url)
  f = urllib2.urlopen(request)
  f.read()

